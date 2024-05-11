"use strict";

// Requires cookies.js to be loaded first

(function(){
  const publicLayout = document.querySelector('.public');

  const sidenavToggles = document.querySelectorAll('[data-sidenav-toggle]');
  const sidebarToggles = document.querySelectorAll('[data-sidebar-toggle]');

  sidenavToggles.forEach((sidenavToggle) => {
    sidenavToggle.addEventListener("click", (event) => {
      event.preventDefault();
      publicLayout.classList.toggle('public-hide-sidenav');
      if(publicLayout.classList.contains('public-hide-sidenav')) {
        cs3.setCookie('public_sidenav', 'hide', 1);
      } else {
        cs3.setCookie('public_sidenav', 'show', 1);
      }
    });
  });
  sidebarToggles.forEach((sidebarToggle) => {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      publicLayout.classList.toggle('public-hide-sidebar');
      if(publicLayout.classList.contains('public-hide-sidebar')) {
        cs3.setCookie('public_sidebar', 'hide', 1);
      } else {
        cs3.setCookie('public_sidebar', 'show', 1);
      }
    });
  });
})();


