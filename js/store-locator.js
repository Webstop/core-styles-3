"use strict";


// Vanilla JS Version
function load(target, url, infinite) {
  // TODO: Add callback support, success and failure callbacks
  fetch(url, {
    method: 'GET',
    headers: {
      'X-Requested-With': 'fetch',
    },
  })
    .then(function(response) { return response.text(); })
    .then(function(body) { target.innerHTML = body; })
    .then(function() { if(infinite){
      pagingObserver.observe(target.querySelector('.paging-trigger'));
      enableNextLoadOnView(target);
      initDataAttributes();
    } });
}

function loadOnView(target, url, infinite) {

  const observer = new IntersectionObserver((entries) => {

    if(entries[0].intersectionRatio !== 0) {
      // Element enters the viewport
      if(!entries[0].target.classList.contains('is-loaded')) {
        // Element has not been loaded yet
        entries[0].target.classList.add('is-loaded');
        load(target, url, infinite);
        let skipHistory = entries[0].target.hasAttribute('data-skip-history');
        if(!skipHistory) { history.pushState(null, "", url); }
      }

    } else {
      // Element leaves the viewport
    }

  });
  observer.observe(target);
}


function enableNextLoadOnView(current){
  let targets = document.querySelectorAll('[data-load-on-view]');
  let foundCurrent = false;
  let foundNext = false;
  let loaded = false;
  targets.forEach((target) => {
    loaded = target.classList.contains('is-loaded');
    if((foundCurrent && !foundNext) || loaded) {
      let display = target.getAttribute('data-display-as');
      display = display || 'block';
      target.style.display = display;
      if(!loaded){foundNext = true};
    } else {
      target.style.display = 'none';
    }
    if(target == current){foundCurrent = true}
  })
}

// Paging

const pagingObserver = new IntersectionObserver(entries => {

  // Element enters the viewport
  if(entries[0].intersectionRatio !== 0) {
    let parent = entries[0].target.closest('[data-page-number]');
    updatePaging(parent);
  }

});


function updatePaging(source) {
  // TODO: Add callback support, success and failure
  //let target = document.querySelector(selector);
  let maxPageNumber = source.getAttribute('data-max-page-number');
  let pageNumber = source.getAttribute('data-page-number');
  let selector = '';
  if(source.hasAttribute('data-paging')) {
    selector = source.getAttribute('data-paging');
  }

  if(!selector) {
    selector = '.paging';
  }

  let targets = document.querySelectorAll(selector);

  targets.forEach((target) => {
    let currentPage = target.querySelector('.paging-current-page');
    let pages = target.querySelectorAll('.paging-page');
    let html = `
      <span class="d-none d-sm-inline">Page ${pageNumber} of ${maxPageNumber}</span>
      <span class="d-inline d-sm-none">Pg. ${pageNumber}</span>
    `;
    currentPage.innerHTML = html;
    let url = source.getAttribute('data-load-on-view');
    if(!url){url = source.getAttribute('data-url')}
    pages.forEach((page) => {
      if(page.getAttribute('href') == url){
        page.classList.add('active');
      } else if(page.classList.contains('active')){
        page.classList.remove('active');
      }
    })
  })
}


// IIFE (Immediately Invoked Function Expression)
(() => {
  // Vanilla JS version of Data Attribute DSL
  let targets = document.querySelectorAll('[data-store-picker]');
  let count   = 0;
  if(targets.length !== 0) {
    targets.forEach((target) => {
      let url      = target.getAttribute('data-load-on-view');
      let infinite = target.hasAttribute('data-infinite-scroll');
      let display  = target.getAttribute('data-display-as');
      let loaded   = target.classList.contains('is-loaded');
      display = display || 'block';
      // count == 0 || loaded ? display = display : display = 'none';
      if(count != 0 && !loaded){display = 'none';}
      target.style.display = display;
      loadOnView(target, url, infinite);
      count++;
    })
    // Register any triggers on the initial page, not just the one's loaded via ALAX
    let pagingTrigger = document.querySelector('.paging-trigger');
    if(pagingTrigger) { pagingObserver.observe(pagingTrigger); }
  }


})();






// IIFE (Immediately Invoked Function Expression)
(() => {
  // Vanilla JS version of Data Attribute DSL
  let buttons = document.querySelectorAll('[data-store-picker]');
  if(buttons.length !== 0) {
    buttons.forEach((button) => {
      let input      = target.getAttribute('data-store-picker-input');
      let has_address = target.hasAttribute('data-store-picker-address');
      let address  = target.getAttribute('data-store-picker-address');
      button.addEventListener("click", function (event) {
        // do that picker here
      });
    })
  }


})();
