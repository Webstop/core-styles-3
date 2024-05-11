"use strict";

(function(cs3){

  function setCookie(name, value, expireDays) {
    const d = new Date();
    let expires = '';
    if(expireDays) {
      d.setTime(d.getTime() + (expireDays*24*60*60*1000));
      expires = "expires=" + d.toUTCString() + ';';
    }
    document.cookie = name + "=" + value + ";" + expires + "path=/";
  }

  function getCookie(name) {
    let nameEquals = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEquals) == 0) return c.substring(nameEquals.length,c.length);
    }
    return null;
  }

  function checkCookie(name) {
    let cookie = getCookie(name);
    return !!cookie;
  }

  cs3.setCookie   = setCookie;
  cs3.getCookie   = getCookie;
  cs3.checkCookie = checkCookie;

})( window.cs3 = window.cs3 || {} );



