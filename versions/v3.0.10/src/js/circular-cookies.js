"use strict";

// The purpose of this script is to set iPads and mobile phones to use
// the online format for circulars. We do this because Newsprints don't
// properly on small screens.

(function(){

  function setCircularFormat(){
    // This should set the cookie for iPad (768) and smaller
    if(document.body.clientWidth < 770 ){
      console.log('Setting circular cookie...');
      let name = window.webstop.retailerID + '_circular_format';
      cs3.setCookie(name, 'online', 7); // Note: many browsers cap JS set cookies to 7 days max.
    }
  }

  setCircularFormat();
})();
