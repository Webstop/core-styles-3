"use strict";

// IIFE (Immediately Invoked Function Expression)
(function(webstop){

  // Public Sub-Class
  webstop.stores = {}

  // Public Method formPicker();
  // Called from the ajax-modal method as a callback that occurs after the store locator content loads.
  // It registers all the Choose Store buttons in the store locator and attaches the functionality which
  // populates the form and the UI.
  webstop.stores.formPicker = function(trigger) {
    // Setup data from Trigger
    let inputSelector   = trigger.getAttribute('data-store-picker-input');
    let addressSelector = trigger.getAttribute('data-store-picker-address');
    let inputTarget   = document.querySelector(inputSelector);
    let addressTarget = document.querySelector(addressSelector);
    // Register all Choose Store buttons
    let buttons = document.querySelectorAll('[data-store-selection]');
    if(buttons.length !== 0) {
      buttons.forEach((button) => {
        let id      = button.getAttribute('data-store-id');
        let name  = button.getAttribute('data-store-name');
        let address  = button.getAttribute('data-store-address');
        let city  = button.getAttribute('data-store-city');
        let state  = button.getAttribute('data-store-state');
        let zip  = button.getAttribute('data-store-zip');
        let hasAddress = false;
        if(name || address || city || state || zip){
          hasAddress = true;
        }
        let addressHTML = '';
        if(hasAddress) {
          if (name) {
            addressHTML += `<strong>${name}</strong><br>`
          }
          addressHTML += `${address}<br>${city}, ${state} ${zip}`
        }
        button.addEventListener("click", function (event) {
          // Display the address in the UI
          if(hasAddress){
            addressTarget.innerHTML = addressHTML;
          }
          // Set the value in the form
          inputTarget.value = id;
          // Update the Select a Store button text
          trigger.textContent = 'Change Store'

        });
      })
    }
  }


})( window.webstop = window.webstop || {} );
