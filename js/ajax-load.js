"use strict";
// Ajax Load, Load on View, Infinite Scroll, & Paging

// Track observed elements and pushed URLs to prevent duplicates
const observedElements = [];
const pushedUrls = [];

// Function to clear URL tracking (useful for navigation or page changes)
function clearUrlTracking() {
  console.log('Clearing URL tracking. Previous URLs:', pushedUrls);
  pushedUrls.length = 0;
}

// Clear URL tracking on page navigation to allow legitimate re-pushes
window.addEventListener('popstate', clearUrlTracking);
window.addEventListener('beforeunload', clearUrlTracking);

$(function() {

  $(document.body).on('click', '[data-ajax-load]', function(event){
    let $this = $(this);
    let url = $this.data('load');
    let $target = $this;
    let hasPowerBar = $this.is('[data-power-bar]');
    let hasOnComplete = $this.is('[data-on-complete-load]');
    let onCompleteUrl = '';
    let onCompleteTarget = '';
    if(hasOnComplete){
      onCompleteUrl = $this.data('on-complete-load');
      onCompleteTarget = $this.data('on-complete-target');
    }

    if( $this.is('[data-target]') ){
      $target = $($this.data('target'));
    } else {
      if($this.parent().is('.ajax-form-container')) {
      }  else {
        $this.wrap( "<div class='ajax-form-container'></div>" );
      }
      $target = $this.parent();
    }

    if( $this.is('[data-disable-loading-indicator]') ) {
    } else {
      if( $this.is('input[type="submit"]') ) {
        $this.val('Loading...');
      } else {
        $this.text('Loading...');
      }
      if( $this.is('button') || $this.is('input[type="submit"]') ) { $this.prop('disabled', true); }
    }

    $target.load(url,function(){
      if(hasOnComplete){ loadOnComplete(onCompleteUrl, onCompleteTarget); }
    });

  });

});


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
      const pagingTrigger = target.querySelector('.paging-trigger');
      if (pagingTrigger && !observedElements.includes(pagingTrigger)) {
        console.log('Adding paging observer to trigger:', pagingTrigger);
        pagingObserver.observe(pagingTrigger);
        observedElements.push(pagingTrigger);
      } else if (pagingTrigger) {
        console.log('Duplicate paging observer prevented for trigger:', pagingTrigger);
      }
      enableNextLoadOnView(target);
      initDataAttributes();
    } });
}

function loadOnView(target, url, infinite) {
  // Prevent duplicate observers for the same element
  if (observedElements.includes(target)) {
    console.log('Duplicate observer prevented for element:', target, 'URL:', url);
    return;
  }

  console.log('Creating new observer for element:', target, 'URL:', url);
  const observer = new IntersectionObserver((entries) => {

    if(entries[0].intersectionRatio !== 0) {
      // Element enters the viewport
      if(!entries[0].target.classList.contains('is-loaded')) {
        console.log('Element entering viewport:', entries[0].target, 'URL:', url);
        // Element has not been loaded yet
        load(target, url, infinite);
        let skipHistory = entries[0].target.hasAttribute('data-skip-history');
        if(!skipHistory) { 
          // Prevent duplicate history pushes for the same URL
          if (!pushedUrls.includes(url)) {
            console.log('Pushing to history state:', url);
            history.pushState(null, "", url);
            pushedUrls.push(url);
          } else {
            console.log('Duplicate history push prevented for URL:', url);
          }
        } else {
          console.log('Skipping history push (data-skip-history attribute)');
        }
        entries[0].target.classList.add('is-loaded');
      } else {
        console.log('Element already loaded, skipping:', entries[0].target);
      }

    } else {
      // Element leaves the viewport
      console.log('Element leaving viewport:', entries[0].target);
    }

  });
  
  observer.observe(target);
  observedElements.push(target);
  console.log('Total observed elements:', observedElements.length);
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

function loadOnComplete(onCompleteUrl, onCompleteTarget) {
  const targets = document.querySelectorAll(onCompleteTarget);
  console.log(`loadOnComplete`);
  console.log(`onCompleteUrl: ${onCompleteUrl}`);
  console.log(`onCompleteTarget: ${onCompleteTarget}`);

  return fetch(onCompleteUrl)
    .then(response => response.text())
    .then(html => {
      targets.forEach(target => {
        console.log(`Apply on complete to target.`);
        target.innerHTML = html;
      });
    })
    .catch(error => console.error('Error loading on-complete content:', error));
}


// IIFE (Immediately Invoked Function Expression)
(() => {
  // Vanilla JS version of Data Attribute DSL
  let targets = document.querySelectorAll('[data-load-on-view]');
  let count   = 0;
  console.log('Found', targets.length, 'elements with [data-load-on-view] attribute');
  if(targets.length !== 0) {
    targets.forEach((target) => {
      let url      = target.getAttribute('data-load-on-view');
      let infinite = target.hasAttribute('data-infinite-scroll');
      let display  = target.getAttribute('data-display-as');
      let show  = target.hasAttribute('data-show');
      let loaded   = target.classList.contains('is-loaded');
      display = display || 'block';
      // count == 0 || loaded ? display = display : display = 'none';
      if(count != 0 && !loaded && !show){display = 'none';}
      target.style.display = display;
      console.log('Processing element', count + 1, 'of', targets.length, ':', target, 'URL:', url, 'Infinite:', infinite);
      loadOnView(target, url, infinite);
      count++;
    })
    // Register any triggers on the initial page, not just the one's loaded via ALAX
    let pagingTrigger = document.querySelector('.paging-trigger');
    if(pagingTrigger && !observedElements.includes(pagingTrigger)) { 
      console.log('Adding initial paging observer to trigger:', pagingTrigger);
      pagingObserver.observe(pagingTrigger);
      observedElements.push(pagingTrigger);
    } else if (pagingTrigger) {
      console.log('Duplicate initial paging observer prevented for trigger:', pagingTrigger);
    }
  }
})();

(() => {
  // Vanilla JS version of Data Attribute DSL
  let targets = document.querySelectorAll('[data-load-now]');
  if(targets.length !== 0) {
    targets.forEach((target) => {
      let url      = target.getAttribute('data-load-now');
      load(target, url, false);
    })
  }

})();
