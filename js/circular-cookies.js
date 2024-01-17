"use strict";

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
