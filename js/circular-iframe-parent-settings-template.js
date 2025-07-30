// This file contains the production values for the retailer.
// They can be overridden with attributes on the #webstop-circular div for testing & development purposes.
// Override Example:
// <div id="webstop-circular" data-retailer-id="1" data-api-host="https://rails.example.com" data-web-host="https://lasso.example.com" data-cdn-host="https://cdn.example.com"></div>
// Production Example:
// <div id="webstop-circular"></div>
(function(webstop){

  webstop.retailerID = 0;
  webstop.apiHost    = '';
  webstop.webHost    = '';
  webstop.cdnHost    = '';
  // webstop.hasCircularStoreLocator = false;

})( window.webstop = window.webstop || {} );


