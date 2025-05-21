"use strict";

// NOTE: this file must be loaded **before** ahoy.js. Don't use jQuery or any other lib that requires an object to execute before the code executes.

(function(webstop, ahoy){
  function getConfigValue(name){
    let value = '';
    if (name && document.body.hasAttribute(name)){ value = document.body.getAttribute(name);}
    return value
  }
  let retailerID  = getConfigValue('data-retailer-id');
  let apiHost     = getConfigValue('data-api-host');
  let webHost     = getConfigValue('data-web-host');
  let storeNumber = getConfigValue('data-store-number');

  webstop.retailerID  = retailerID;
  webstop.apiHost     = apiHost;
  webstop.webHost     = webHost;
  webstop.storeNumber = storeNumber;

  ahoy.visitParams   = {retailer_id: retailerID, store_number: storeNumber};
  ahoy.visitsUrl     = apiHost + "/api/v1/retailers/" + retailerID + "/aye/visit.json";
  ahoy.eventsUrl     = apiHost + "/api/v1/retailers/" + retailerID + "/aye/event.json";

})( window.webstop = window.webstop || {},  window.ahoy = window.ahoy || {} );
