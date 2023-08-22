"use strict";


(function(){
  const publicLayout = document.querySelector('.public');

  const sidenavToggles = document.querySelectorAll('[data-sidenav-toggle]');
  const sidebarToggles = document.querySelectorAll('[data-sidebar-toggle]');

  sidenavToggles.forEach((sidenavToggle) => {
    sidenavToggle.addEventListener("click", (event) => {
      publicLayout.classList.toggle('public-hide-sidenav');
    });
  });
  sidebarToggles.forEach((sidebarToggle) => {
    sidebarToggle.addEventListener("click", (event) => {
      publicLayout.classList.toggle('public-hide-sidebar');
    });
  });
})();


