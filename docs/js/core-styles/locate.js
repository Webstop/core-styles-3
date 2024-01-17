"use strict";

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
  let filter = '';
  let has_filter = false;
  let redirect_url = '';
  let has_redirect_url = false;

  // Public Properties
  // Public Properties would take the form webstop.locator.someProperty = '';

  // Public Sub-Class
  webstop.locator = {}

  // Private Method locate();
  webstop.locator.locate = function(display_messages) {
    display_messages = !!(display_messages && message);

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const default_action_url = `${window.webstop.webHost}/retailers/${window.webstop.retailerID}/stores?display=results-only&latitude=${latitude}&longitude=${longitude}`;
      action_url = action_url || default_action_url;
      if(action_url == ''){ action_url = default_action_url; }
      if(filter != ''){ filter += `&filter=${filter}`; }
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
  }

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
        filter = trigger.getAttribute('data-locate-filter');
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
