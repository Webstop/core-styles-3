"use strict";

// Geolocation


(function(){

  function locate(trigger, target, message, hide_trigger, display_messages, redirect_url) {

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let has_url = trigger.hasAttribute('data-locate-redirect-url');
      let load_url =`${window.webstop.webHost}/retailers/${window.webstop.retailerID}/stores?display=results-only&latitude=${latitude}&longitude=${longitude}`;
      if(has_url){ load_url += `&url=${trigger.getAttribute('data-locate-redirect-url')}`; }
      //let load_url =`${window.webstop.webHost}/retailers/${window.webstop.retailerID}/stores?display=results-only&latitude=${latitude}&longitude=${longitude}&url=${redirect_url}`;
      load(target, load_url);
      if(display_messages){ message.textContent = ''; }
      if(hide_trigger){ trigger.classList.add('d-none'); }
    }

    function error(error) {
      if(display_messages){ message.textContent = `Unable to retrieve your location. ${display_messages}`; }
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
    let redirect_url = trigger.getAttribute('data-locate-redirect-url');

    trigger.addEventListener("click", function(event){locate(trigger, target, message, hide_trigger, true, redirect_url)});
    // the following runs locate on page load, but without hiding the Use My Location button.
    if(locate_on_load){locate(trigger, target, message, false, false, redirect_url);}
  }

  locator();

})();

