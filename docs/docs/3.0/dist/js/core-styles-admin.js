(function () {
  'use strict';

  // NOTE: this file must be loaded **before** ahoy.js. Don't use jQuery or any other lib that requires an object to execute before the code executes.

  (function(webstop, ahoy){

    let retailerID= document.body.getAttribute('data-retailer-id');
    let apiHost   = document.body.getAttribute('data-api-host');
    let webHost   = document.body.getAttribute('data-web-host');

    webstop.retailerID = retailerID;
    webstop.apiHost    = apiHost;
    webstop.webHost    = webHost;

    ahoy.visitParams   = {retailer_id: retailerID};
    ahoy.visitsUrl     = apiHost + "/api/v1/retailers/" + retailerID + "/aye/visit.json";
    ahoy.eventsUrl     = apiHost + "/api/v1/retailers/" + retailerID + "/aye/event.json";

  })( window.webstop = window.webstop || {},  window.ahoy = window.ahoy || {} );

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

  // Ajax Form Component


  // /**
  //  * ------------------------------------------------------------------------
  //  * Main Function
  //  * ------------------------------------------------------------------------
  //  */
  //
  // function ajaxForm(form){
  //
  //   let $form = $(form);
  //   let url = $form.attr('action');
  //   let data = $form.serializeArray();
  //   let $target = $form;
  //
  //   if( $form.is('[data-target]') ){
  //     $target = $($form.data('target'));
  //   } else {
  //     if($form.parent().is('.ajax-form-container')) {
  //     }  else {
  //       $form.wrap( "<div class='ajax-form-container'></div>" );
  //     }
  //     $target = $form.parent();
  //   }
  //
  //   if( $form.is('[data-power-bar]') ){
  //     $target.load(url,data,function(){
  //       loadShoppingListPowerBar();
  //     });
  //   } else {
  //     $target.load(url,data);
  //   }
  // }
  //
  // /**
  //  * ------------------------------------------------------------------------
  //  * Data API Implementation
  //  * ------------------------------------------------------------------------
  //  */
  //
  // $(function() {
  //
  //   $('[data-ajax-form]').on('submit', function(event){
  //     event.preventDefault();
  //
  //     ajaxForm(this);
  //
  //   });
  //
  // });
  //
  // export default ajaxForm

  $(function() {

    $(document.body).on('submit', '[data-ajax-form]', function(event){
      event.preventDefault();

      let $this = $(this);
      let url = $this.attr('action');
      let data = $this.serializeArray();
      let $target = $this;

      if( $this.is('[data-target]') ){
        $target = $($this.data('target'));
      } else {
        if($this.parent().is('.ajax-form-container')) ;  else {
          $this.wrap( "<div class='ajax-form-container'></div>" );
        }
        $target = $this.parent();
      }

      if( $this.is('[data-power-bar]') ){
        $target.load(url,data,function(){
          loadShoppingListPowerBar();
        });
      } else {
        $target.load(url,data);
      }

    });

  });

  // Ajax Load, Load on View, Infinite Scroll, & Paging

  $(function() {

    $(document.body).on('click', '[data-ajax-load]', function(event){
      let $this = $(this);
      let url = $this.data('load');
      let $target = $this;

      if( $this.is('[data-target]') ){
        $target = $($this.data('target'));
      } else {
        if($this.parent().is('.ajax-form-container')) ;  else {
          $this.wrap( "<div class='ajax-form-container'></div>" );
        }
        $target = $this.parent();
      }

      if( $this.is('[data-disable-loading-indicator]') ) ; else {
        if( $this.is('input[type="submit"]') ) {
          $this.val('Loading...');
        } else {
          $this.text('Loading...');
        }
        if( $this.is('button') || $this.is('input[type="submit"]') ) { $this.prop('disabled', true); }
      }

      $target.load(url,function(){
        if( $this.is('[data-power-bar]') ){ loadShoppingListPowerBar(); }
        if( $this.is('[data-load-on-callback]') && $this.is('[data-target-on-callback]') ){
          loadOnCallback();
        }
      });

      function loadOnCallback() {
        let callbackUrls = $this.data('load-on-callback').split(',');
        let callbackTargets = $($this.data('target-on-callback'));
        callbackUrls.forEach(function(callbackUrl, index){
          let $callbackTarget = $(callbackTargets[index]);
          $callbackTarget.load(callbackUrl);
        });
      }

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
        if(!loaded){foundNext = true;}    } else {
        target.style.display = 'none';
      }
      if(target == current){foundCurrent = true;}
    });
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
      if(!url){url = source.getAttribute('data-url');}
      pages.forEach((page) => {
        if(page.getAttribute('href') == url){
          page.classList.add('active');
        } else if(page.classList.contains('active')){
          page.classList.remove('active');
        }
      });
    });
  }


  // IIFE (Immediately Invoked Function Expression)
  (() => {
    // Vanilla JS version of Data Attribute DSL
    let targets = document.querySelectorAll('[data-load-on-view]');
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
      });
      // Register any triggers on the initial page, not just the one's loaded via ALAX
      let pagingTrigger = document.querySelector('.paging-trigger');
      if(pagingTrigger) { pagingObserver.observe(pagingTrigger); }
    }


  })();

  // Ajax Modal Component

  $(function() {
    // Resets modal once closed
    $(document.body).on('hidden.bs.modal', '#site-modal', function () {
      $('#site-modal-title').text('');
      $('#site-modal-body').html('');
      $('#site-modal-footer').removeClass('d-none');
    });

    $(document.body).on('show.bs.modal', '#site-modal', function (event) {
      let $trigger = $(event.relatedTarget);
      let title = $trigger.attr('data-title');
      let url = $trigger.attr('data-load');
      let content = $trigger.attr('data-content');
      let footer = $trigger.attr('data-footer');
      if(footer == 'hide'){
        $('#site-modal-footer').addClass('d-none');
      }
      $('#site-modal-title').text(title);
      if(content){
        $('#site-modal-body').html(content);
      }
      if(url){
        $('#site-modal-body').load(url);
      }
    });

  });

  // Adds default data attribute support to components that are missing it from Bootstrap.

  function initPopovers() {
    $('[data-toggle="popover"]').popover();
  }

  function initTooltips() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  function initDataAttributes$1() {
    initPopovers();
    initTooltips();
  }

  $(function() {
    initDataAttributes$1();
  });

  // Disable buttons


  const clickDisableButtons = document.querySelectorAll("[data-disable-on-click]");

  clickDisableButtons.forEach(btn=>{
    btn.addEventListener('click', function(event){
      event.target.disabled  = true;
      event.target.innerHTML = 'Loading...';
      event.target.value     = 'Loading...';
    });
  });

  const submitDisableButtons = document.querySelectorAll("[data-disable-on-submit]");

  submitDisableButtons.forEach(btn=>{
    btn.addEventListener('submit', function(event){
      event.target.disabled  = true;
      event.target.innerHTML = 'Loading...';
      event.target.value     = 'Loading...';
    });
  });

  // Checkbox Selector Component

  $(function() {


    // The button should be in the `select` state if there are more unchecked checkboxes than checked,
    // if there are not more unchecked than checked it should be in the `unselect` state
    function update_status(context){
      let group = $(context).attr('data-check-selector-group');
      let checked = 0;
      let unchecked = 0;

      console.log('Checkbox Changed!');

      // check state of all checkboxes in the group
      $(`input[type="checkbox"][data-check-selector-group="${group}"]`).each(function(index){
        if($(this).prop('checked')) {
          checked += 1;
        } else {
          unchecked += 1;
        }
      });

      if( checked <= unchecked ) {
        select(group);
      } else {
        unselect(group);
      }
    }

    function select(group){
      console.log('Change button to select.');
      $(`[data-check-selector-for="${group}"]`).removeClass('is-unselect');
      $(`[data-check-selector-for="${group}"]`).addClass('is-select');
      $(`[data-check-selector-for="${group}"]`).attr('data-check-selector-state', 'select');
    }

    function unselect(group){
      console.log('Change button to unselect.');
      $(`[data-check-selector-for="${group}"]`).removeClass('is-select');
      $(`[data-check-selector-for="${group}"]`).addClass('is-unselect');
      $(`[data-check-selector-for="${group}"]`).attr('data-check-selector-state', 'unselect');
    }

    // Check and update the button status everytime a checkbox is checked or unchecked
    $('input[type="checkbox"][data-check-selector-group]').on('change', function(){
      update_status(this);
    });

    $('input[type="checkbox"][data-check-selector-group]').each(function(){
      update_status(this);
    });



    // If a select/unselect button is clicked, make the grouped checkboxes checked/unchecked.
    $(document.body).on('click', '[data-check-selector-for]', function(event){
      event.preventDefault();

      let $button = $(this);
      let group = $button.attr('data-check-selector-for');
      let state = $button.attr('data-check-selector-state');

      if(state == 'select'){
        $(`input[type="checkbox"][data-check-selector-group="${group}"]`).prop('checked', true);
        unselect(group);
      } else {
        $(`input[type="checkbox"][data-check-selector-group="${group}"]`).prop('checked', false);
        select(group);
      }

    });

  });

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

  // Filter Search

  // Waits for page to load.
  window.addEventListener("load", function(){
    // Attaches event listener to the search field.
    // TODO: Update this to handle more than one search per-page, probably using querySelectorAll.
    let searchField = document.querySelector("input[data-filter-search]");
    if(searchField){
      searchField.addEventListener("keyup", function(){
        // Get the search string
        let search = this.value.toLowerCase();
        // Get the list of elements to search through.
        let selector = this.getAttribute('data-filter-selector');
        let items = document.querySelectorAll(selector);

        // Loop through the items and only show those that match the search terms.
        for (let i of items) {
          let item = i.innerHTML.toLowerCase();
          if (item.indexOf(search) == -1) {
            i.classList.add("d-none"); // Assumes we have Bootstrap CSS class `d-none` available.
          } else {
            i.classList.remove("d-none");
          }
        }
      });
    }

  });

  // Form Toggle Component

  $(function() {

    $(document.body).on('change', '[data-form-toggle-trigger]', function(event){
      let $this   = $(this);
      let name    = $this.attr('name');
      let tag     = $this.prop('tagName');
      let control = ''; // possible values 'select', 'checkbox', or 'radio'

      // Find control
      if(tag == 'SELECT'){
        control = 'select';
      } else if (tag == 'INPUT'){
        let input_type = $this.attr('type');
        if(input_type == 'CHECKBOX' || input_type == 'checkbox') {
          control = 'checkbox';
        } else if(input_type == 'RADIO' || input_type == 'radio'){
          control = 'radio';
        }
      }

      // Perform toggle
      if(control == 'select' || control == 'radio') {
        let value = this.value;
        let show = false;

        $(`[data-form-toggle*='${name}']`).each(function() {

          if($(this).attr('data-form-toggle-match') == 'exact'){
            show = $(this).attr('data-form-toggle-show-for') == value;
          } else {
            show = $(this).attr('data-form-toggle-show-for').includes(value);
          }

          if(show){
            $(this).removeClass('d-none');
          } else {
            $(this).addClass('d-none');
          }
        });
      } else if(control == 'checkbox') {
        $(`[data-form-toggle='${name}']`).toggleClass('d-none');
      }

    });

  });

  // Search Component

  $(function() {

    function liveSearch(){
      let delay = null;

      $('[data-search="live"]').find('.search-from-search-text').on('keyup', function(event) {
        clearTimeout(delay);
        let $form = $(this).parents('[data-search="live"]');
        let target = $form.data('target');
        let hide = $form.data('hide');
        let url = $form.attr('action');
        let search = event.target.value;

        if(search.length <= 2){
          exitSearch(target);
        } else {
          let data = $form.serializeArray();
          delay = setTimeout(function(){ performSearch(data, target, hide, url); }, 500);
        }
      });

      $('[data-search="live"]').find('.search-form-clear').on('click', function(event) {
        event.preventDefault();
        let $form = $(this).parents('[data-search="live"]');
        let target = $form.data('target');
        let reveal = $form.data('hide');
        let $clear = $form.find('.search-from-search-text');
        exitSearch(target, reveal, $clear);
      });
    }

    function exitSearch(target, reveal = null, $clear = null){
      if($clear != null){
        $clear.val('');
      }
      let $target = $(target);
      $target.html('');
      $target.hide();
      if(reveal != null){
        $(reveal).show();
      }
    }

    function performSearch(data, target, hide, url){
      let $target = $(target);
      $(hide).hide();
      $target.show('fast', function(){
        $target.load(url, data);
      });
    }

    liveSearch();
  });

  // Tag Search


  (function(){

    function tagSearch(){
      let delay = null;

      $(document.body).on('keyup', '[data-tag-search]', function(event) {
        clearTimeout(delay);
        const searchText   = event.target.value;
        const tagging = setTagging(this, searchText);

        if(searchText.length <= 2){
          exitTagSearch(tagging);
        } else {
          delay = setTimeout(function(){ performTagSearch(tagging); }, 100);
        }
      });

    }

    function setTagging(searchThis, searchText) {
      const $search    = $(searchThis);
      const searchId   = '#' + $search.attr('id');
      const targetId   = $search.data('tag-search-target');
      const displayId  = $search.data('tag-search-display');
      const resultsId  = $search.data('tag-search-results');

      const tagging = {
        searchText: searchText,
        searchId:   searchId,
        targetId:   targetId,
        displayId:  displayId,
        resultsId:  resultsId,
        $search:    $search,
        $target:    $(targetId),
        $display:   $(displayId),
        $results:   $(resultsId)
      };
      console.log('Tagging Set');
      console.log(`searchText: ${searchText}`);
      console.log(`searchId:   ${searchId}`);
      console.log(`targetId:   ${targetId}`);
      console.log(`displayId:  ${displayId}`);
      console.log(`resultsId:  ${resultsId}`);
      return tagging;
    }

    $('[data-tag-search]').each(function() {
      const tagging = setTagging(this, '');
      displayTags(tagging);
    });


    function makeTagResultsActive(){
      $(document.body).on('click', '[data-tag-add]', function(event){
        event.preventDefault();
        const searchId = $(this).data('tag-search-id');
        const tagging  = setTagging(searchId, '');
        let   tags     = trimArray(tagging.$target.val().split(','));
        const newTag   = $(this).data('tag-search-value').trim();

        //tags.indexOf(newTag) === -1 ? tags.push(newTag) : console.log("This tag already exists.");
        tags.push(newTag);
        tagging.$target.val(removeLeadingComma(uniqArraySort(tags).join()));

        displayTags(tagging);
        exitTagSearch(tagging);
      });
    }

    function displayTags(tagging){
      const tags  = trimArray(tagging.$target.val().split(','));
      let   items = [];
      let   html  = '';

      tags.forEach(function(tag){
        if(tag) {
          items.push(`<span class="tag bg-secondary"> ${tag} <span data-tag-search-remove-tag data-tag-text="${tag}"><i class="icon-cancel ml-1"></i></span></span>`);
        }
      });
      html = items.join('');
      tagging.$display.html(html);
      makeRemoveTagsActive(tagging);
    }

    function makeRemoveTagsActive(tagging){
      tagging.$display.find('[data-tag-search-remove-tag]').on('click', function(event){
        event.preventDefault();
        const tag   = $(this).data('tag-text');
        let   tags  = uniqArraySort(trimArray(tagging.$target.val().split(',')));
        const index = tags.indexOf(tag);

        tags.splice(index, 1);
        tagging.$target.val(removeLeadingComma(uniqArraySort(tags).join()));

        displayTags(tagging);
      });
    }

    function exitTagSearch(tagging){
      //$('[data-tag-add]').val('');
      tagging.$results.html('');
    }

    function performTagSearch(tagging){
      const url = window.webstop.apiHost + '/api/v1/tags/search';
      $.getJSON( `${url}?search=${tagging.searchText}`, function(data){renderTagSearchResults(data, tagging);});
    }

    function renderTagSearchResults(data, tagging){
      let html;
      let items = [];

      $.each( data, function( position, record ) {
        $.each( record, function( key, value ) {
          if(key == 'name'){
            //items.push(`<button class="list-group-item list-group-item-action" data-tag-add data-tag-search-target="${tagging.targetId}" data-tag-search-display="${tagging.displayId}" data-tag-search-results="${tagging.resultsId}" data-tag-search-value="${value}">${value}</button>`);
            items.push(`<button class="list-group-item list-group-item-action" data-tag-add data-tag-search-id="${tagging.searchId}" data-tag-search-value="${value}">${value}</button>`);
          }
        });
      });

      items.push(`<button class="list-group-item list-group-item-secondary list-group-item-action" data-tag-add data-tag-add data-tag-search-id="${tagging.searchId}" data-tag-search-value="${tagging.searchText}"><em class="text-muted">Create New "</em>${tagging.searchText}<em class="text-muted">" Tag.</em></button>`);

      html  = '<div class="list-group">';
      html += items.join('');
      html += '</div>';

      tagging.$results.html(html);
      makeTagResultsActive();
    }

    // Utilities
    function trimArray(a){
      let trim_a = [];
      a.forEach(function(i){
        trim_a.push(i.trim());
      });
      return trim_a;
    }

    function uniqArraySort(a) {
      return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
      })
    }

    function removeLeadingComma(text){
      if (text[0] == ',') {
        text = text.substring(1);
      }
      return text;
    }

    tagSearch();

  })();

})();
//# sourceMappingURL=core-styles-admin.js.map
