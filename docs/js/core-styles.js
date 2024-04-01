(function () {
  'use strict';

  // NOTE: this file must be loaded **before** ahoy.js. Don't use jQuery or any other lib that requires an object to execute before the code executes.

  (function(webstop, ahoy){

    let retailerID= document.body.getAttribute('data-retailer-id');
    let apiHost   = document.body.getAttribute('data-api-host');
    let webHost   = document.body.getAttribute('data-web-host');

    webstop.retailerID = retailerID;
    webstop.apiHost    = apiHost;
    webstop.webHost    = webHost;

    ahoy.visitParams   = {retailer_id: retailerID};
    ahoy.visitsUrl     = apiHost + "/api/v1/retailers/" + retailerID + "/aye/visit.json";
    ahoy.eventsUrl     = apiHost + "/api/v1/retailers/" + retailerID + "/aye/event.json";

  })( window.webstop = window.webstop || {},  window.ahoy = window.ahoy || {} );

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var ahoy$1 = {exports: {}};

  /*!
   * Ahoy.js v0.4.3
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

  $(function() {
    // Here we set the thee possible events types data-aye-view, data-aye-click, & data-aye-submit

    // Sends an ahoy track when the element is served to the browser.
    // TODO: enhance to track items brought onto the page via Ajax. It currently only works on items in the initial page render.
    $('[data-aye-view]').each(function(){
      let $element = $(this);
      let cargo = ayeCargo(this);
      ahoy.track('view ' + $element.attr('data-aye-view'), cargo);
    });

    // Sends an ahoy track when the user clicks on the element.
    $(document.body).on('click', '[data-aye-click]',  function(){
      let $element = $(this);
      let cargo = ayeCargo(this);
      ahoy.track('click ' + $element.attr('data-aye-click'), cargo);
    });

    // Sends an ahoy track when a form is submitted. Place on the form tag.
    $(document.body).on('submit', '[data-aye-submit]', function(){
      let $element = $(this);
      let cargo = ayeCargo(this);
      cargo = ayeFormidable($element, cargo);
      ahoy.track('submit ' + $element.attr('data-aye-submit'), cargo);
    });


    // The next two functions (ayeCargo & ayeFormidable) gather data and format it for submitting to ahoy.track

    // ayeCargo gathers Aye data attributes from an HTML element and formats them for API usage.
    function ayeCargo(element){
      let properties = {};
      $.each(element.attributes, function( index, attr ) {
        if(attr.name.indexOf('data-aye-property-')===0) {
          properties[attr.name.slice(18).split("-").join("_").toLowerCase()] = attr.value;
        } else if(attr.name == 'data-aye-click' || attr.name == 'data-aye-view' || attr.name =='data-aye-submit' ); else if(attr.name.indexOf('data-aye-')===0) {
          properties[attr.name.slice(9).split("-").join("_").toLowerCase()] = attr.value;
        }
      });
      return properties;
    }

    // ayeFormidable gathers Aye data attributes from HTML form elements and formats them for API usage.
    function ayeFormidable($element, cargo = {}){
      $element.find('input,select,textarea,output').each(function(index){
        let value = this.value;
        $.each(this.attributes, function( index, attr ) {
          if(attr.name.indexOf('data-aye-property-')===0) {
            cargo[attr.name.slice(18).split("-").join("_").toLowerCase()] = value;
          }
        });
      });
      return cargo;
    }

  });

  // Ajax Form Component


  // /**
  //  * ------------------------------------------------------------------------
  //  * Main Function
  //  * ------------------------------------------------------------------------
  //  */
  //
  // function ajaxForm(form){
  //
  //   let $form = $(form);
  //   let url = $form.attr('action');
  //   let data = $form.serializeArray();
  //   let $target = $form;
  //
  //   if( $form.is('[data-target]') ){
  //     $target = $($form.data('target'));
  //   } else {
  //     if($form.parent().is('.ajax-form-container')) {
  //     }  else {
  //       $form.wrap( "<div class='ajax-form-container'></div>" );
  //     }
  //     $target = $form.parent();
  //   }
  //
  //   if( $form.is('[data-power-bar]') ){
  //     $target.load(url,data,function(){
  //       loadShoppingListPowerBar();
  //     });
  //   } else {
  //     $target.load(url,data);
  //   }
  // }
  //
  // /**
  //  * ------------------------------------------------------------------------
  //  * Data API Implementation
  //  * ------------------------------------------------------------------------
  //  */
  //
  // $(function() {
  //
  //   $('[data-ajax-form]').on('submit', function(event){
  //     event.preventDefault();
  //
  //     ajaxForm(this);
  //
  //   });
  //
  // });
  //
  // export default ajaxForm

  $(function() {

    $(document.body).on('submit', '[data-ajax-form]', function(event){
      event.preventDefault();

      let $this = $(this);
      let url = $this.attr('action');
      let data = $this.serializeArray();
      let $target = $this;

      if( $this.is('[data-target]') ){
        $target = $($this.data('target'));
      } else {
        if($this.parent().is('.ajax-form-container')) ;  else {
          $this.wrap( "<div class='ajax-form-container'></div>" );
        }
        $target = $this.parent();
      }

      if( $this.is('[data-power-bar]') ){
        $target.load(url,data,function(){
          loadShoppingListPowerBar();
        });
      } else {
        $target.load(url,data);
      }

    });

  });

  // Ajax Load, Load on View, Infinite Scroll, & Paging

  $(function() {

    $(document.body).on('click', '[data-ajax-load]', function(event){
      let $this = $(this);
      let url = $this.data('load');
      let $target = $this;

      if( $this.is('[data-target]') ){
        $target = $($this.data('target'));
      } else {
        if($this.parent().is('.ajax-form-container')) ;  else {
          $this.wrap( "<div class='ajax-form-container'></div>" );
        }
        $target = $this.parent();
      }

      if( $this.is('[data-disable-loading-indicator]') ) ; else {
        if( $this.is('input[type="submit"]') ) {
          $this.val('Loading...');
        } else {
          $this.text('Loading...');
        }
        if( $this.is('button') || $this.is('input[type="submit"]') ) { $this.prop('disabled', true); }
      }

      $target.load(url,function(){
        if( $this.is('[data-power-bar]') ){ loadShoppingListPowerBar(); }
        if( $this.is('[data-load-on-callback]') && $this.is('[data-target-on-callback]') ){
          loadOnCallback();
        }
      });

      function loadOnCallback() {
        let callbackUrls = $this.data('load-on-callback').split(',');
        let callbackTargets = $($this.data('target-on-callback'));
        callbackUrls.forEach(function(callbackUrl, index){
          let $callbackTarget = $(callbackTargets[index]);
          $callbackTarget.load(callbackUrl);
        });
      }

    });

  });


  // Vanilla JS Version
  function load$1(target, url, infinite) {
    // TODO: Add callback support, success and failure callbacks
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'fetch',
      },
    })
      .then(function(response) { return response.text(); })
      .then(function(body) { target.innerHTML = body; })
      .then(function() { if(infinite){
        pagingObserver.observe(target.querySelector('.paging-trigger'));
        enableNextLoadOnView(target);
        initDataAttributes();
      } });
  }

  function loadOnView(target, url, infinite) {

    const observer = new IntersectionObserver((entries) => {

      if(entries[0].intersectionRatio !== 0) {
        // Element enters the viewport
        if(!entries[0].target.classList.contains('is-loaded')) {
          // Element has not been loaded yet
          entries[0].target.classList.add('is-loaded');
          load$1(target, url, infinite);
          let skipHistory = entries[0].target.hasAttribute('data-skip-history');
          if(!skipHistory) { history.pushState(null, "", url); }
        }

      }

    });
    observer.observe(target);
  }


  function enableNextLoadOnView(current){
    let targets = document.querySelectorAll('[data-load-on-view]');
    let foundCurrent = false;
    let foundNext = false;
    let loaded = false;
    targets.forEach((target) => {
      loaded = target.classList.contains('is-loaded');
      if((foundCurrent && !foundNext) || loaded) {
        let display = target.getAttribute('data-display-as');
        display = display || 'block';
        target.style.display = display;
        if(!loaded){foundNext = true;}    } else {
        target.style.display = 'none';
      }
      if(target == current){foundCurrent = true;}
    });
  }

  // Paging

  const pagingObserver = new IntersectionObserver(entries => {

    // Element enters the viewport
    if(entries[0].intersectionRatio !== 0) {
      let parent = entries[0].target.closest('[data-page-number]');
      updatePaging(parent);
    }

  });


  function updatePaging(source) {
    // TODO: Add callback support, success and failure
    //let target = document.querySelector(selector);
    let maxPageNumber = source.getAttribute('data-max-page-number');
    let pageNumber = source.getAttribute('data-page-number');
    let selector = '';
    if(source.hasAttribute('data-paging')) {
      selector = source.getAttribute('data-paging');
    }

    if(!selector) {
      selector = '.paging';
    }

    let targets = document.querySelectorAll(selector);

    targets.forEach((target) => {
      let currentPage = target.querySelector('.paging-current-page');
      let pages = target.querySelectorAll('.paging-page');
      let html = `
      <span class="d-none d-sm-inline">Page ${pageNumber} of ${maxPageNumber}</span>
      <span class="d-inline d-sm-none">Pg. ${pageNumber}</span>
    `;
      currentPage.innerHTML = html;
      let url = source.getAttribute('data-load-on-view');
      if(!url){url = source.getAttribute('data-url');}
      pages.forEach((page) => {
        if(page.getAttribute('href') == url){
          page.classList.add('active');
        } else if(page.classList.contains('active')){
          page.classList.remove('active');
        }
      });
    });
  }


  // IIFE (Immediately Invoked Function Expression)
  (() => {
    // Vanilla JS version of Data Attribute DSL
    let targets = document.querySelectorAll('[data-load-on-view]');
    let count   = 0;
    if(targets.length !== 0) {
      targets.forEach((target) => {
        let url      = target.getAttribute('data-load-on-view');
        let infinite = target.hasAttribute('data-infinite-scroll');
        let display  = target.getAttribute('data-display-as');
        let loaded   = target.classList.contains('is-loaded');
        display = display || 'block';
        // count == 0 || loaded ? display = display : display = 'none';
        if(count != 0 && !loaded){display = 'none';}
        target.style.display = display;
        loadOnView(target, url, infinite);
        count++;
      });
      // Register any triggers on the initial page, not just the one's loaded via ALAX
      let pagingTrigger = document.querySelector('.paging-trigger');
      if(pagingTrigger) { pagingObserver.observe(pagingTrigger); }
    }


  })();

  // Ajax Modal Component

  $(function() {
    // Resets modal once closed
    $(document.body).on('hidden.bs.modal', '#site-modal', function () {
      $('#site-modal-title').text('');
      $('#site-modal-body').html('');
      $('#site-modal-footer').removeClass('d-none');
    });

    $(document.body).on('show.bs.modal', '#site-modal', function (event) {
      let $trigger = $(event.relatedTarget);
      let title = $trigger.attr('data-title');
      let url = $trigger.attr('data-load');
      let content = $trigger.attr('data-content');
      let footer = $trigger.attr('data-footer');
      if(footer == 'hide'){
        $('#site-modal-footer').addClass('d-none');
      }
      $('#site-modal-title').text(title);
      if(content){
        $('#site-modal-body').html(content);
      }
      if(url){
        $('#site-modal-body').load(url);
      }
    });

  });

  // Adds default data attribute support to components that are missing it from Bootstrap.

  function initPopovers() {
    $('[data-toggle="popover"]').popover();
  }

  function initTooltips() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  function initDataAttributes$1() {
    initPopovers();
    initTooltips();
  }

  $(function() {
    initDataAttributes$1();
  });

  // Disable buttons


  const clickDisableButtons = document.querySelectorAll("[data-disable-on-click]");

  clickDisableButtons.forEach(btn=>{
    btn.addEventListener('click', function(event){
      event.target.disabled  = true;
      event.target.innerHTML = 'Loading...';
      event.target.value     = 'Loading...';
    });
  });

  const submitDisableButtons = document.querySelectorAll("[data-disable-on-submit]");

  submitDisableButtons.forEach(btn=>{
    btn.addEventListener('submit', function(event){
      event.target.disabled  = true;
      event.target.innerHTML = 'Loading...';
      event.target.value     = 'Loading...';
    });
  });

  // Checkbox Selector Component

  $(function() {


    // The button should be in the `select` state if there are more unchecked checkboxes than checked,
    // if there are not more unchecked than checked it should be in the `unselect` state
    function update_status(context){
      let group = $(context).attr('data-check-selector-group');
      let checked = 0;
      let unchecked = 0;

      console.log('Checkbox Changed!');

      // check state of all checkboxes in the group
      $(`input[type="checkbox"][data-check-selector-group="${group}"]`).each(function(index){
        if($(this).prop('checked')) {
          checked += 1;
        } else {
          unchecked += 1;
        }
      });

      if( checked <= unchecked ) {
        select(group);
      } else {
        unselect(group);
      }
    }

    function select(group){
      console.log('Change button to select.');
      $(`[data-check-selector-for="${group}"]`).removeClass('is-unselect');
      $(`[data-check-selector-for="${group}"]`).addClass('is-select');
      $(`[data-check-selector-for="${group}"]`).attr('data-check-selector-state', 'select');
    }

    function unselect(group){
      console.log('Change button to unselect.');
      $(`[data-check-selector-for="${group}"]`).removeClass('is-select');
      $(`[data-check-selector-for="${group}"]`).addClass('is-unselect');
      $(`[data-check-selector-for="${group}"]`).attr('data-check-selector-state', 'unselect');
    }

    // Check and update the button status everytime a checkbox is checked or unchecked
    $('input[type="checkbox"][data-check-selector-group]').on('change', function(){
      update_status(this);
    });

    $('input[type="checkbox"][data-check-selector-group]').each(function(){
      update_status(this);
    });



    // If a select/unselect button is clicked, make the grouped checkboxes checked/unchecked.
    $(document.body).on('click', '[data-check-selector-for]', function(event){
      event.preventDefault();

      let $button = $(this);
      let group = $button.attr('data-check-selector-for');
      let state = $button.attr('data-check-selector-state');

      if(state == 'select'){
        $(`input[type="checkbox"][data-check-selector-group="${group}"]`).prop('checked', true);
        unselect(group);
      } else {
        $(`input[type="checkbox"][data-check-selector-group="${group}"]`).prop('checked', false);
        select(group);
      }

    });

  });

  // The purpose of this script is to set iPads and mobile phones to use
  // the online format for circulars.

  (function(){

    // https://www.w3schools.com/js/js_cookies.asp
    function setCookie(name, value, expireDays) {
      const d = new Date();
      d.setTime(d.getTime() + (expireDays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function setCircularFormat(){
      // This should set the cookie for iPad (768) and smaller
      if(document.body.clientWidth < 770 ){
        console.log('Setting circular cookie...');
        let name = window.webstop.retailerID + '_circular_format';
        setCookie(name, 'online', 7); // Note: many browsers cap JS set cookies to 7 days max.
      }
    }

    setCircularFormat();
  })();

  // Filter Search

  // Waits for page to load.
  window.addEventListener("load", function(){
    // Attaches event listener to the search field.
    // TODO: Update this to handle more than one search per-page, probably using querySelectorAll.
    let searchField = document.querySelector("input[data-filter-search]");
    if(searchField){
      searchField.addEventListener("keyup", function(){
        // Get the search string
        let search = this.value.toLowerCase();
        // Get the list of elements to search through.
        let selector = this.getAttribute('data-filter-selector');
        let items = document.querySelectorAll(selector);

        // Loop through the items and only show those that match the search terms.
        for (let i of items) {
          let item = i.innerHTML.toLowerCase();
          if (item.indexOf(search) == -1) {
            i.classList.add("d-none"); // Assumes we have Bootstrap CSS class `d-none` available.
          } else {
            i.classList.remove("d-none");
          }
        }
      });
    }

  });

  // Form Toggle Component

  $(function() {

    $(document.body).on('change', '[data-form-toggle-trigger]', function(event){
      let $this   = $(this);
      let name    = $this.attr('name');
      let tag     = $this.prop('tagName');
      let control = ''; // possible values 'select', 'checkbox', or 'radio'

      // Find control
      if(tag == 'SELECT'){
        control = 'select';
      } else if (tag == 'INPUT'){
        let input_type = $this.attr('type');
        if(input_type == 'CHECKBOX' || input_type == 'checkbox') {
          control = 'checkbox';
        } else if(input_type == 'RADIO' || input_type == 'radio'){
          control = 'radio';
        }
      }

      // Perform toggle
      if(control == 'select' || control == 'radio') {
        let value = this.value;
        let show = false;

        $(`[data-form-toggle*='${name}']`).each(function() {

          if($(this).attr('data-form-toggle-match') == 'exact'){
            show = $(this).attr('data-form-toggle-show-for') == value;
          } else {
            show = $(this).attr('data-form-toggle-show-for').includes(value);
          }

          if(show){
            $(this).removeClass('d-none');
          } else {
            $(this).addClass('d-none');
          }
        });
      } else if(control == 'checkbox') {
        $(`[data-form-toggle='${name}']`).toggleClass('d-none');
      }

    });

  });

  // Using the following design pattern
  // https://web.archive.org/web/20181005005954/https://appendto.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/


  // Geolocation
  (function( webstop ) {

    // Private Properties
    let message; // element (where to display error messages)
    let trigger; // element
    let target; // element
    let hide_trigger = true;
    let locate_on_load = false;
    let action_url = '';
    let has_action_url = false;
    let has_filter = false;
    let redirect_url = '';
    let has_redirect_url = false;

    // Public Properties
    // Public Properties would take the form webstop.locator.someProperty = '';

    // Public Sub-Class
    webstop.locator = {};

    // Private Method locate();
    webstop.locator.locate = function(display_messages) {
      display_messages = !!(display_messages && message);

      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const default_action_url = `${window.webstop.webHost}/retailers/${window.webstop.retailerID}/stores?display=results-only&latitude=${latitude}&longitude=${longitude}`;
        action_url = action_url || default_action_url;
        if(action_url == ''){ action_url = default_action_url; }
        if(redirect_url != ''){ action_url += `&url=${redirect_url}`; }
        load(target, action_url);
        if(display_messages){ message.textContent = ''; }
        if(hide_trigger){ trigger.classList.add('d-none'); }
      }

      function error(error) {
        if(display_messages){ message.textContent = `Unable to retrieve your location.`; }
        console.error(`Geolocation Error. Code: ${error.code}. Message: ${error.message}`);
      }

      if(!navigator.geolocation) {
        if(display_messages){ message.textContent = "Geolocation is not supported by your browser."; }
      } else {
        if(display_messages){ message.textContent = 'Locating…'; }
        navigator.geolocation.getCurrentPosition(success, error);
      }
    };

    // Public Method webstop.locator.watcher
    webstop.locator.watcher = function() {
      trigger = document.querySelector("[data-locate]");
      if (trigger) {
        target = document.querySelector(trigger.getAttribute('data-locate-target'));
        message = document.querySelector(trigger.getAttribute('data-locate-message'));
        hide_trigger = trigger.hasAttribute('data-locate-hide-me');
        locate_on_load = trigger.hasAttribute('data-locate-on-load');
        has_action_url = trigger.hasAttribute('data-locate-action-url');
        if (has_action_url) {
          action_url = trigger.getAttribute('data-locate-action-url');
        }
        has_filter = trigger.hasAttribute('data-locate-filter');
        if (has_filter) {
          trigger.getAttribute('data-locate-filter');
        }
        has_redirect_url = trigger.hasAttribute('data-locate-redirect-url');
        if (has_redirect_url) {
          redirect_url = trigger.getAttribute('data-locate-redirect-url');
        }
        trigger.addEventListener("click", function (event) {
          webstop.locator.locate(true);
        });
        // the following runs locate on page load, but without hiding the Use My Location button.
        if(locate_on_load){
          webstop.locator.locate(false);
        }
      }
    };
  })( window.webstop = window.webstop || {} );

  (function(){
    const publicLayout = document.querySelector('.public');

    const sidenavToggles = document.querySelectorAll('[data-sidenav-toggle]');
    const sidebarToggles = document.querySelectorAll('[data-sidebar-toggle]');

    sidenavToggles.forEach((sidenavToggle) => {
      sidenavToggle.addEventListener("click", (event) => {
        publicLayout.classList.toggle('public-hide-sidenav');
      });
    });
    sidebarToggles.forEach((sidebarToggle) => {
      sidebarToggle.addEventListener("click", (event) => {
        publicLayout.classList.toggle('public-hide-sidebar');
      });
    });
  })();

  // Search Component

  $(function() {

    function liveSearch(){
      let delay = null;

      $('[data-search="live"]').find('.search-from-search-text').on('keyup', function(event) {
        clearTimeout(delay);
        let $form = $(this).parents('[data-search="live"]');
        let target = $form.data('target');
        let hide = $form.data('hide');
        let url = $form.attr('action');
        let search = event.target.value;

        if(search.length <= 2){
          exitSearch(target);
        } else {
          let data = $form.serializeArray();
          delay = setTimeout(function(){ performSearch(data, target, hide, url); }, 500);
        }
      });

      $('[data-search="live"]').find('.search-form-clear').on('click', function(event) {
        event.preventDefault();
        let $form = $(this).parents('[data-search="live"]');
        let target = $form.data('target');
        let reveal = $form.data('hide');
        let $clear = $form.find('.search-from-search-text');
        exitSearch(target, reveal, $clear);
      });
    }

    function exitSearch(target, reveal = null, $clear = null){
      if($clear != null){
        $clear.val('');
      }
      let $target = $(target);
      $target.html('');
      $target.hide();
      if(reveal != null){
        $(reveal).show();
      }
    }

    function performSearch(data, target, hide, url){
      let $target = $(target);
      $(hide).hide();
      $target.show('fast', function(){
        $target.load(url, data);
      });
    }

    liveSearch();
  });

  // TODO: For now this is global. It really should be loaded as an es6 module instead.
  function loadShoppingListPowerBar$1(){
    console.log('loadShoppingListPowerBar triggered');
    let url = '/shopping_list/power_bar?url=' + window.location.href ;
    $('#site-aside-slider').load(url);
  }

  $(function() {

    loadShoppingListPowerBar$1();

    $(document.body).on('click', '.site-aside-slider-toggle', function(event){
      event.preventDefault();
      let $aside = $('#site-aside-slider');
      if( $aside.hasClass('site-aside-slider-open') ){
        $aside.removeClass('site-aside-slider-open');
        Cookies.set('site_aside', 'close', {expires: 1460});
      } else {
        $aside.addClass('site-aside-slider-open');
        Cookies.set('site_aside', 'open', {expires: 1460});
      }
    });

    // Everything below here should probably go, as more generic methods are appropriate
    // ajax-form and site-modal should be used instead. Keeping it for now as reference
    // until we get the shopping list features.

    let $modal = $('#shopping-list-modal');

    $(document.body).on('show.bs.modal', '#shopping-list-modal', function(event) {
      // jQuery Objects
      let $form        = $modal.find('.shopping-list-form');
      let $errors      = $form.find('.shopping-list-form-errors');
      let $button      = $(event.relatedTarget); // Button or link that triggered the modal
      let $title       = $modal.find('.modal-title');
      let $nameGroup   = $modal.find('.modal-body .shopping-list-form-name-group');
      let $name        = $modal.find('.modal-body .shopping-list-form-name');
      let $submit      = $form.find('.shopping-list-form-submit');
      let $description = $form.find('.shopping-list-form-description');

      // strings
      //let currentList = $('#shopping-list-power-bar-list').text()
      let verb = $button.data('verb'); //  verbs: Create (new), Update (rename/edit), Delete (delete)
      let url =  $button.data('url');
      let response = {status: '', message: ''};

      //console.log('current list: ' + currentList)


      $title.text(verb + ' Shopping List');
      $submit.text(verb);
      $errors.html('');
      $form.attr('action', url);

      if(verb == 'Create'){
        let today = new Date();
        today = today.toLocaleDateString('en-US', {year: 'numeric', month: 'numeric', day: 'numeric' });
        $nameGroup.removeClass('is-hidden');
        $name.val('My ' + today + ' List');
        $description.text('');
        $description.addClass('is-hidden');
      }else if(verb == 'Rename'){
        $nameGroup.removeClass('is-hidden');
        $name.val($('#shopping-list-power-bar-list').text());
        $description.text('');
        $description.addClass('is-hidden');
      }else if(verb == 'Delete'){
        $nameGroup.addClass('is-hidden');
        $description.removeClass('is-hidden');
        $description.text('Once deleted your most recent shopping list will become your current list. If you have no shopping lists a new one will be created. Are you sure you want to delete your current shopping list?');
      }


      // Form response expects the following JSON:
      // {
      //   status: 'success' or 'failure',
      //   message: 'text message here'
      // }
      $form.on('submit', function(e) {
        e.preventDefault();
        // Do ajax calling url
        let request = $.ajax({
          url: url,
          method: 'POST',
          //data: { id : menuId },
          contentType: "application/json",
          dataType: 'json'
        });

        request.done(function(jqXHR, data){
          console.log('ajax response status: ' + data.status);
          console.log('message: ' + data.message);
          if(data.status == 'success'){
            response = data;
            $modal.modal('hide');
            console.log('hide modal triggered');
          } else if(data.status == 'failure') {
            response = data;
          } else {
            response = {status: 'failure', message: 'Unable to process request. Please try again.'};
          }

          if(response.status == 'failure') {
            $errors.html('<p class="shopping-list-form-errors-message alert alert-danger">' + response.message + '</p>');
          }

        });

        request.fail(function(response){
          $errors.html('<p class="shopping-list-form-errors-message alert alert-danger">' + response.message + '</p>');
        });


      });

    });

    $(document.body).on('hidden.bs.modal', '#shopping-list-modal', function(event) {
      console.log('modal fully hidden');
      loadShoppingListPowerBar$1();
    });


  });

  // Tag Search


  (function(){

    function tagSearch(){
      let delay = null;

      $(document.body).on('keyup', '[data-tag-search]', function(event) {
        clearTimeout(delay);
        const searchText   = event.target.value;
        const tagging = setTagging(this, searchText);

        if(searchText.length <= 2){
          exitTagSearch(tagging);
        } else {
          delay = setTimeout(function(){ performTagSearch(tagging); }, 100);
        }
      });

    }

    function setTagging(searchThis, searchText) {
      const $search    = $(searchThis);
      const searchId   = '#' + $search.attr('id');
      const targetId   = $search.data('tag-search-target');
      const displayId  = $search.data('tag-search-display');
      const resultsId  = $search.data('tag-search-results');

      const tagging = {
        searchText: searchText,
        searchId:   searchId,
        targetId:   targetId,
        displayId:  displayId,
        resultsId:  resultsId,
        $search:    $search,
        $target:    $(targetId),
        $display:   $(displayId),
        $results:   $(resultsId)
      };
      console.log('Tagging Set');
      console.log(`searchText: ${searchText}`);
      console.log(`searchId:   ${searchId}`);
      console.log(`targetId:   ${targetId}`);
      console.log(`displayId:  ${displayId}`);
      console.log(`resultsId:  ${resultsId}`);
      return tagging;
    }

    $('[data-tag-search]').each(function() {
      const tagging = setTagging(this, '');
      displayTags(tagging);
    });


    function makeTagResultsActive(){
      $(document.body).on('click', '[data-tag-add]', function(event){
        event.preventDefault();
        const searchId = $(this).data('tag-search-id');
        const tagging  = setTagging(searchId, '');
        let   tags     = trimArray(tagging.$target.val().split(','));
        const newTag   = $(this).data('tag-search-value').trim();

        //tags.indexOf(newTag) === -1 ? tags.push(newTag) : console.log("This tag already exists.");
        tags.push(newTag);
        tagging.$target.val(removeLeadingComma(uniqArraySort(tags).join()));

        displayTags(tagging);
        exitTagSearch(tagging);
      });
    }

    function displayTags(tagging){
      const tags  = trimArray(tagging.$target.val().split(','));
      let   items = [];
      let   html  = '';

      tags.forEach(function(tag){
        if(tag) {
          items.push(`<span class="tag bg-secondary"> ${tag} <span data-tag-search-remove-tag data-tag-text="${tag}"><i class="icon-cancel ml-1"></i></span></span>`);
        }
      });
      html = items.join('');
      tagging.$display.html(html);
      makeRemoveTagsActive(tagging);
    }

    function makeRemoveTagsActive(tagging){
      tagging.$display.find('[data-tag-search-remove-tag]').on('click', function(event){
        event.preventDefault();
        const tag   = $(this).data('tag-text');
        let   tags  = uniqArraySort(trimArray(tagging.$target.val().split(',')));
        const index = tags.indexOf(tag);

        tags.splice(index, 1);
        tagging.$target.val(removeLeadingComma(uniqArraySort(tags).join()));

        displayTags(tagging);
      });
    }

    function exitTagSearch(tagging){
      //$('[data-tag-add]').val('');
      tagging.$results.html('');
    }

    function performTagSearch(tagging){
      const url = window.webstop.apiHost + '/api/v1/tags/search';
      $.getJSON( `${url}?search=${tagging.searchText}`, function(data){renderTagSearchResults(data, tagging);});
    }

    function renderTagSearchResults(data, tagging){
      let html;
      let items = [];

      $.each( data, function( position, record ) {
        $.each( record, function( key, value ) {
          if(key == 'name'){
            //items.push(`<button class="list-group-item list-group-item-action" data-tag-add data-tag-search-target="${tagging.targetId}" data-tag-search-display="${tagging.displayId}" data-tag-search-results="${tagging.resultsId}" data-tag-search-value="${value}">${value}</button>`);
            items.push(`<button class="list-group-item list-group-item-action" data-tag-add data-tag-search-id="${tagging.searchId}" data-tag-search-value="${value}">${value}</button>`);
          }
        });
      });

      items.push(`<button class="list-group-item list-group-item-secondary list-group-item-action" data-tag-add data-tag-add data-tag-search-id="${tagging.searchId}" data-tag-search-value="${tagging.searchText}"><em class="text-muted">Create New "</em>${tagging.searchText}<em class="text-muted">" Tag.</em></button>`);

      html  = '<div class="list-group">';
      html += items.join('');
      html += '</div>';

      tagging.$results.html(html);
      makeTagResultsActive();
    }

    // Utilities
    function trimArray(a){
      let trim_a = [];
      a.forEach(function(i){
        trim_a.push(i.trim());
      });
      return trim_a;
    }

    function uniqArraySort(a) {
      return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
      })
    }

    function removeLeadingComma(text){
      if (text[0] == ',') {
        text = text.substring(1);
      }
      return text;
    }

    tagSearch();

  })();

})();
//# sourceMappingURL=core-styles.js.map
