// This file contains the production values for the retailer.
// They can be overridden on the with attributes on the #webstop-circular div for testing & development purposes.
// Override Example:
// <div id="webstop-circular" data-retailer-id="1" data-api-host="https://api.example.com" data-web-host="https://www.example.com" data-cdn-host="https://cdn.example.com"></div>
// Production Example:
// <div id="webstop-circular"></div>
(function(webstop){

  webstop.retailerID = 3296;
  webstop.apiHost    = 'https://circulars-2.acehardware.com';
  webstop.webHost    = 'https://circulars-1.acehardware.com';
  webstop.cdnHost    = 'https://circulars-cdn.acehardware.com';
  webstop.hasCircularStoreLocator = false;

})( window.webstop = window.webstop || {} );

import './circular-iframe-parent';
