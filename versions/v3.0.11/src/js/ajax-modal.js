"use strict";
// Ajax Modal Component

$(function() {
  // Resets modal once closed
  $(document.body).on('hidden.bs.modal', '#site-modal', function () {
    $('#site-modal-title').text('');
    $('#site-modal-body').html('<div class="text-center"><div class="spinner-grow" style="width: 5rem; height: 5rem;" role="status"></div><H4>Loading...</H4></div>');
    $('#site-modal-footer').removeClass('d-none');
  });

  // Load on modal close. Main use case is reloading the shopping list sidebar when items are edited or added.
  $(document.body).on('hide.bs.modal', '#site-modal', function () {
    console.log('hide');
    $('[data-load-on-modal-close]').each(function(){
      $(this).load($(this).attr('data-load-on-modal-close').replace(/&amp;/g, '&'));
    });
  });

  $(document.body).on('show.bs.modal', '#site-modal', function (event) {
    let trigger = event.relatedTarget
    let $trigger = $(event.relatedTarget)
    let title = $trigger.attr('data-title');
    let url = $trigger.attr('data-load');
    let content = $trigger.attr('data-content');
    let footer = $trigger.attr('data-footer');
    let storeFormPicker = $trigger.is('[data-store-form-picker]');
    if(footer == 'hide'){
      $('#site-modal-footer').addClass('d-none');
    }
    $('#site-modal-title').text(title);
    if(content){
      $('#site-modal-body').html(content);
    }
    if(url){
      $('#site-modal-body').load(url, function(){
        // special features
        if(storeFormPicker){
          // Sets store form picker when initial store locator list loads
          webstop.stores.formPicker(trigger);
          // Resets store form picker when new content loads into the store locator results list
          let storesListing = document.querySelector('#stores-search-results');
          let storesListingObserver = new MutationObserver(function(){webstop.stores.formPicker(trigger);});
          storesListingObserver.observe(storesListing, { attributes: false, childList: true, subtree: false });
        }
      });
    }
  });

});

