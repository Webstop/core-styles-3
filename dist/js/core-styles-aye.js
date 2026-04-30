(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var ahoy$1 = {exports: {}};

	/*!
	 * Ahoy.js v0.4.4
	 * Simple, powerful JavaScript analytics
	 * https://github.com/ankane/ahoy.js
	 * MIT License
	 */

	(function (module, exports) {
		(function (global, factory) {
		  module.exports = factory() ;
		})(commonjsGlobal, (function () {
		  // https://www.quirksmode.org/js/cookies.html

		  var Cookies = {
		    set: function (name, value, ttl, domain) {
		      var expires = "";
		      var cookieDomain = "";
		      if (ttl) {
		        var date = new Date();
		        date.setTime(date.getTime() + (ttl * 60 * 1000));
		        expires = "; expires=" + date.toGMTString();
		      }
		      if (domain) {
		        cookieDomain = "; domain=" + domain;
		      }
		      document.cookie = name + "=" + escape(value) + expires + cookieDomain + "; path=/; samesite=lax";
		    },
		    get: function (name) {
		      var i, c;
		      var nameEQ = name + "=";
		      var ca = document.cookie.split(';');
		      for (i = 0; i < ca.length; i++) {
		        c = ca[i];
		        while (c.charAt(0) === ' ') {
		          c = c.substring(1, c.length);
		        }
		        if (c.indexOf(nameEQ) === 0) {
		          return unescape(c.substring(nameEQ.length, c.length));
		        }
		      }
		      return null;
		    }
		  };

		  var config = {
		    urlPrefix: "",
		    visitsUrl: "/ahoy/visits",
		    eventsUrl: "/ahoy/events",
		    page: null,
		    platform: "Web",
		    useBeacon: true,
		    startOnReady: true,
		    trackVisits: true,
		    cookies: true,
		    cookieDomain: null,
		    headers: {},
		    visitParams: {},
		    withCredentials: false,
		    visitDuration: 4 * 60, // default 4 hours
		    visitorDuration: 2 * 365 * 24 * 60 // default 2 years
		  };

		  var ahoy = window.ahoy || window.Ahoy || {};

		  ahoy.configure = function (options) {
		    for (var key in options) {
		      if (Object.prototype.hasOwnProperty.call(options, key)) {
		        config[key] = options[key];
		      }
		    }
		  };

		  // legacy
		  ahoy.configure(ahoy);

		  var $ = window.jQuery || window.Zepto || window.$;
		  var visitId, visitorId, track;
		  var isReady = false;
		  var queue = [];
		  var canStringify = typeof(JSON) !== "undefined" && typeof(JSON.stringify) !== "undefined";
		  var eventQueue = [];

		  function visitsUrl() {
		    return config.urlPrefix + config.visitsUrl;
		  }

		  function eventsUrl() {
		    return config.urlPrefix + config.eventsUrl;
		  }

		  function isEmpty(obj) {
		    return Object.keys(obj).length === 0;
		  }

		  function canTrackNow() {
		    return (config.useBeacon || config.trackNow) && isEmpty(config.headers) && canStringify && typeof(window.navigator.sendBeacon) !== "undefined" && !config.withCredentials;
		  }

		  function serialize(object) {
		    var data = new FormData();
		    for (var key in object) {
		      if (Object.prototype.hasOwnProperty.call(object, key)) {
		        data.append(key, object[key]);
		      }
		    }
		    return data;
		  }

		  // cookies

		  function setCookie(name, value, ttl) {
		    Cookies.set(name, value, ttl, config.cookieDomain || config.domain);
		  }

		  function getCookie(name) {
		    return Cookies.get(name);
		  }

		  function destroyCookie(name) {
		    Cookies.set(name, "", -1);
		  }

		  function log(message) {
		    if (getCookie("ahoy_debug")) {
		      window.console.log(message);
		    }
		  }

		  function setReady() {
		    var callback;
		    while ((callback = queue.shift())) {
		      callback();
		    }
		    isReady = true;
		  }

		  ahoy.ready = function (callback) {
		    if (isReady) {
		      callback();
		    } else {
		      queue.push(callback);
		    }
		  };

		  function matchesSelector(element, selector) {
		    var matches = element.matches ||
		      element.matchesSelector ||
		      element.mozMatchesSelector ||
		      element.msMatchesSelector ||
		      element.oMatchesSelector ||
		      element.webkitMatchesSelector;

		    if (matches) {
		      if (matches.apply(element, [selector])) {
		        return element;
		      } else if (element.parentElement) {
		        return matchesSelector(element.parentElement, selector);
		      }
		      return null;
		    } else {
		      log("Unable to match");
		      return null;
		    }
		  }

		  function onEvent(eventName, selector, callback) {
		    document.addEventListener(eventName, function (e) {
		      var matchedElement = matchesSelector(e.target, selector);
		      if (matchedElement) {
		        var skip = getClosest(matchedElement, "data-ahoy-skip");
		        if (skip !== null && skip !== "false") { return; }

		        callback.call(matchedElement, e);
		      }
		    });
		  }

		  // http://beeker.io/jquery-document-ready-equivalent-vanilla-javascript
		  function documentReady(callback) {
		    if (document.readyState === "interactive" || document.readyState === "complete") {
		      setTimeout(callback, 0);
		    } else {
		      document.addEventListener("DOMContentLoaded", callback);
		    }
		  }

		  // https://stackoverflow.com/a/2117523/1177228
		  function generateId() {
		    if (window.crypto && window.crypto.randomUUID) {
		      return window.crypto.randomUUID();
		    }

		    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		      var r = Math.random() * 16 | 0;
		      var v = c === 'x' ? r : (r & 0x3 | 0x8);
		      return v.toString(16);
		    });
		  }

		  function saveEventQueue() {
		    if (config.cookies && canStringify) {
		      setCookie("ahoy_events", JSON.stringify(eventQueue), 1);
		    }
		  }

		  // from rails-ujs

		  function csrfToken() {
		    var meta = document.querySelector("meta[name=csrf-token]");
		    return meta && meta.content;
		  }

		  function csrfParam() {
		    var meta = document.querySelector("meta[name=csrf-param]");
		    return meta && meta.content;
		  }

		  function CSRFProtection(xhr) {
		    var token = csrfToken();
		    if (token) { xhr.setRequestHeader("X-CSRF-Token", token); }
		  }

		  function sendRequest(url, data, success) {
		    if (canStringify) {
		      if ($ && $.ajax) {
		        $.ajax({
		          type: "POST",
		          url: url,
		          data: JSON.stringify(data),
		          contentType: "application/json; charset=utf-8",
		          dataType: "json",
		          beforeSend: CSRFProtection,
		          success: success,
		          headers: config.headers,
		          xhrFields: {
		            withCredentials: config.withCredentials
		          }
		        });
		      } else {
		        var xhr = new XMLHttpRequest();
		        xhr.open("POST", url, true);
		        xhr.withCredentials = config.withCredentials;
		        xhr.setRequestHeader("Content-Type", "application/json");
		        for (var header in config.headers) {
		          if (Object.prototype.hasOwnProperty.call(config.headers, header)) {
		            xhr.setRequestHeader(header, config.headers[header]);
		          }
		        }
		        xhr.onload = function () {
		          if (xhr.status === 200) {
		            success();
		          }
		        };
		        CSRFProtection(xhr);
		        xhr.send(JSON.stringify(data));
		      }
		    }
		  }

		  function eventData(event) {
		    var data = {
		      events: [event]
		    };
		    if (config.cookies) {
		      data.visit_token = event.visit_token;
		      data.visitor_token = event.visitor_token;
		    }
		    delete event.visit_token;
		    delete event.visitor_token;
		    return data;
		  }

		  function trackEvent(event) {
		    ahoy.ready(function () {
		      sendRequest(eventsUrl(), eventData(event), function () {
		        // remove from queue
		        for (var i = 0; i < eventQueue.length; i++) {
		          if (eventQueue[i].id === event.id) {
		            eventQueue.splice(i, 1);
		            break;
		          }
		        }
		        saveEventQueue();
		      });
		    });
		  }

		  function trackEventNow(event) {
		    ahoy.ready(function () {
		      var data = eventData(event);
		      var param = csrfParam();
		      var token = csrfToken();
		      if (param && token) { data[param] = token; }
		      // stringify so we keep the type
		      data.events_json = JSON.stringify(data.events);
		      delete data.events;
		      window.navigator.sendBeacon(eventsUrl(), serialize(data));
		    });
		  }

		  function page() {
		    return config.page || window.location.pathname;
		  }

		  function presence(str) {
		    return (str && str.length > 0) ? str : null;
		  }

		  function cleanObject(obj) {
		    for (var key in obj) {
		      if (Object.prototype.hasOwnProperty.call(obj, key)) {
		        if (obj[key] === null) {
		          delete obj[key];
		        }
		      }
		    }
		    return obj;
		  }

		  function eventProperties() {
		    return cleanObject({
		      tag: this.tagName.toLowerCase(),
		      id: presence(this.id),
		      "class": presence(this.className),
		      page: page(),
		      section: getClosest(this, "data-section")
		    });
		  }

		  function getClosest(element, attribute) {
		    for (; element && element !== document; element = element.parentNode) {
		      if (element.hasAttribute(attribute)) {
		        return element.getAttribute(attribute);
		      }
		    }

		    return null;
		  }

		  function createVisit() {
		    isReady = false;

		    visitId = ahoy.getVisitId();
		    visitorId = ahoy.getVisitorId();
		    track = getCookie("ahoy_track");

		    if (config.cookies === false || config.trackVisits === false) {
		      log("Visit tracking disabled");
		      setReady();
		    } else if (visitId && visitorId && !track) {
		      // TODO keep visit alive?
		      log("Active visit");
		      setReady();
		    } else {
		      if (!visitId) {
		        visitId = generateId();
		        setCookie("ahoy_visit", visitId, config.visitDuration);
		      }

		      // make sure cookies are enabled
		      if (getCookie("ahoy_visit")) {
		        log("Visit started");

		        if (!visitorId) {
		          visitorId = generateId();
		          setCookie("ahoy_visitor", visitorId, config.visitorDuration);
		        }

		        var data = {
		          visit_token: visitId,
		          visitor_token: visitorId,
		          platform: config.platform,
		          landing_page: window.location.href,
		          screen_width: window.screen.width,
		          screen_height: window.screen.height,
		          js: true
		        };

		        // referrer
		        if (document.referrer.length > 0) {
		          data.referrer = document.referrer;
		        }

		        for (var key in config.visitParams) {
		          if (Object.prototype.hasOwnProperty.call(config.visitParams, key)) {
		            data[key] = config.visitParams[key];
		          }
		        }

		        log(data);

		        sendRequest(visitsUrl(), data, function () {
		          // wait until successful to destroy
		          destroyCookie("ahoy_track");
		          setReady();
		        });
		      } else {
		        log("Cookies disabled");
		        setReady();
		      }
		    }
		  }

		  ahoy.getVisitId = ahoy.getVisitToken = function () {
		    return getCookie("ahoy_visit");
		  };

		  ahoy.getVisitorId = ahoy.getVisitorToken = function () {
		    return getCookie("ahoy_visitor");
		  };

		  ahoy.reset = function () {
		    destroyCookie("ahoy_visit");
		    destroyCookie("ahoy_visitor");
		    destroyCookie("ahoy_events");
		    destroyCookie("ahoy_track");
		    return true;
		  };

		  ahoy.debug = function (enabled) {
		    if (enabled === false) {
		      destroyCookie("ahoy_debug");
		    } else {
		      setCookie("ahoy_debug", "t", 365 * 24 * 60); // 1 year
		    }
		    return true;
		  };

		  ahoy.track = function (name, properties) {
		    // generate unique id
		    var event = {
		      name: name,
		      properties: properties || {},
		      time: (new Date()).getTime() / 1000.0,
		      id: generateId(),
		      js: true
		    };

		    ahoy.ready(function () {
		      if (config.cookies && !ahoy.getVisitId()) {
		        createVisit();
		      }

		      ahoy.ready(function () {
		        log(event);

		        event.visit_token = ahoy.getVisitId();
		        event.visitor_token = ahoy.getVisitorId();

		        if (canTrackNow()) {
		          trackEventNow(event);
		        } else {
		          eventQueue.push(event);
		          saveEventQueue();

		          // wait in case navigating to reduce duplicate events
		          setTimeout(function () {
		            trackEvent(event);
		          }, 1000);
		        }
		      });
		    });

		    return true;
		  };

		  ahoy.trackView = function (additionalProperties) {
		    var properties = {
		      url: window.location.href,
		      title: document.title,
		      page: page()
		    };

		    if (additionalProperties) {
		      for (var propName in additionalProperties) {
		        if (Object.prototype.hasOwnProperty.call(additionalProperties, propName)) {
		          properties[propName] = additionalProperties[propName];
		        }
		      }
		    }
		    ahoy.track("$view", properties);
		  };

		  ahoy.trackClicks = function (selector) {
		    if (selector === undefined) {
		      throw new Error("Missing selector");
		    }
		    onEvent("click", selector, function (e) {
		      var properties = eventProperties.call(this, e);
		      properties.text = properties.tag === "input" ? this.value : (this.textContent || this.innerText || this.innerHTML).replace(/[\s\r\n]+/g, " ").trim();
		      properties.href = this.href;
		      ahoy.track("$click", properties);
		    });
		  };

		  ahoy.trackSubmits = function (selector) {
		    if (selector === undefined) {
		      throw new Error("Missing selector");
		    }
		    onEvent("submit", selector, function (e) {
		      var properties = eventProperties.call(this, e);
		      ahoy.track("$submit", properties);
		    });
		  };

		  ahoy.trackChanges = function (selector) {
		    log("trackChanges is deprecated and will be removed in 0.5.0");
		    if (selector === undefined) {
		      throw new Error("Missing selector");
		    }
		    onEvent("change", selector, function (e) {
		      var properties = eventProperties.call(this, e);
		      ahoy.track("$change", properties);
		    });
		  };

		  // push events from queue
		  try {
		    eventQueue = JSON.parse(getCookie("ahoy_events") || "[]");
		  } catch (e) {
		    // do nothing
		  }

		  for (var i = 0; i < eventQueue.length; i++) {
		    trackEvent(eventQueue[i]);
		  }

		  ahoy.start = function () {
		    createVisit();

		    ahoy.start = function () {};
		  };

		  documentReady(function () {
		    if (config.startOnReady) {
		      ahoy.start();
		    }
		  });

		  return ahoy;

		})); 
	} (ahoy$1));

	// Aye

	// Please Note: this file is divided into 2 sections (I & II).
	// Section I is the newer code that has been refactored into Vanilla JS.
	// Section II is the older jQuery based code that still needs to be converted to Vanilla JS.

	// Section I: Newer Vanilla JS version. Namespaced into window.webstop.aye
	(function( webstop ) {

	  // Public Sub-Class
	  webstop.aye = {};
	  // Aye data attributes
	  let attrView     = 'data-aye-view';
	  let attrClick    = 'data-aye-click';
	  let attrSubmit   = 'data-aye-submit';
	  let attrWatching = 'data-aye-watching';


	  webstop.aye.cargo = function(element){
	    let properties = {};
	    properties['store_number'] = webstop.storeNumber;
	    for(let attribute of element.attributes) {
	      if(attribute.name.indexOf('data-aye-property-')===0) {
	        properties[attribute.name.slice(18).split("-").join("_").toLowerCase()] = attribute.value;
	      } else if(attribute.name == attrClick || attribute.name == attrView || attribute.name == attrSubmit || attribute.name == attrWatching ); else if(attribute.name.indexOf('data-aye-')===0) {
	        properties[attribute.name.slice(9).split("-").join("_").toLowerCase()] = attribute.value;
	      }
	    }
	    return properties;
	  };

	  webstop.aye.formidable = function(element, cargo = {}) {
	    let fields = element.querySelectorAll('input,select,textarea,output');
	    fields.forEach((field) => {
	      let value = field.value;
	      field.getAttributeNames().forEach((attr) => {
	        if (attr.indexOf('data-aye-property-') === 0) {
	          cargo[attr.slice(18).split('-').join('_').toLowerCase()] = value;
	        }
	      });
	    });

	    return cargo;
	  };

	  webstop.aye.track = function(name, element){
	    let cargo = webstop.aye.cargo(element);
	    let ahoyName = name + ' ';
	    if(name === 'submit') {
	      cargo = webstop.aye.formidable(element, cargo);
	      ahoyName += element.getAttribute(attrSubmit);
	    } else if(name === 'click') {
	      ahoyName += element.getAttribute(attrClick);
	    } else if(name === 'view') {
	      ahoyName += element.getAttribute(attrView);
	    }
	    ahoy.track(ahoyName, cargo);
	  };

	  webstop.aye.watch = function(){
	    let clickables = document.querySelectorAll('[data-aye-click]:not([data-aye-watching])');
	    let submitables = document.querySelectorAll('[data-aye-submit]:not([data-aye-watching])');
	    let viewables = document.querySelectorAll('[data-aye-view]:not([data-aye-watching])');

	    clickables.forEach(function(element) {
	      webstop.aye.listen('click', element);
	    });

	    submitables.forEach(function(element) {
	      webstop.aye.listen('submit', element);
	    });

	    viewables.forEach(function(element) {
	      if(element.hasAttribute(attrWatching) === false){
	        element.setAttribute(attrWatching, '');
	        webstop.aye.track('view', element);
	      }
	    });

	  };

	  // Name can be 'click', 'submit', or 'view'
	  webstop.aye.listen = function(name, element){
	    if(element.hasAttribute(attrWatching) === false){
	      element.setAttribute(attrWatching, '');
	      element.addEventListener(name, function() {
	        webstop.aye.track(name, this);
	      });
	    }
	  };

	  webstop.aye.start = function(){

	    // Live executes the watch script once at init, so we don't have to run it again in here.
	    // webstop.aye.watch();
	    webstop.live(webstop.aye.watch);
	  };


	  // Starts Aye tracking only when the DOM is ready.
	  if (document.readyState === "loading") {
	    document.addEventListener("DOMContentLoaded", webstop.aye.start);
	  } else {
	    webstop.aye.start();
	  }

	})( window.webstop = window.webstop || {} );

})();
//# sourceMappingURL=core-styles-aye.js.map
