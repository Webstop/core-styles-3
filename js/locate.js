"use strict";

// Geolocation
(function(){

  function locate(trigger, target, message, hide_trigger, display_messages, filter, redirect_url, action_url) {

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const default_action_url = `${window.webstop.webHost}/retailers/${window.webstop.retailerID}/stores?display=results-only&latitude=${latitude}&longitude=${longitude}`;
      let action_url = action_url || default_action_url;
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

  function locator() {
    let trigger = document.querySelector("[data-locate]");
    let message = document.querySelector(trigger.getAttribute('data-locate-message'));
    let target = document.querySelector(trigger.getAttribute('data-locate-target'));
    let hide_trigger = trigger.hasAttribute('data-locate-hide-me');
    let locate_on_load = trigger.hasAttribute('data-locate-on-load');
    let action_url = '';
    let has_action_url = trigger.hasAttribute('data-locate-action-url');
    if(has_action_url){ action_url = trigger.getAttribute('data-locate-action-url'); }
    let filter = '';
    let has_filter = trigger.hasAttribute('data-locate-filter');
    if(has_filter){ filter = trigger.getAttribute('data-locate-filter'); }
    let redirect_url = '';
    let has_redirect_url = trigger.hasAttribute('data-locate-redirect-url');
    if(has_redirect_url){ redirect_url = trigger.getAttribute('data-locate-redirect-url'); }
    trigger.addEventListener("click", function(event){locate(trigger, target, message, hide_trigger, true, filter, redirect_url, action_url)});
    // the following runs locate on page load, but without hiding the Use My Location button.
    if(locate_on_load){locate(trigger, target, message, false, false, filter, redirect_url, action_url);}
  }

  locator();

})();

