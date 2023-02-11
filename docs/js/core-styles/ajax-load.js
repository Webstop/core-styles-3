"use strict";
// Ajax Load Component

$(function() {

  $(document.body).on('click', '[data-ajax-load]', function(event){
    event.preventDefault();

    let $this = $(this);
    let url = $this.data('load');
    let target = $this.data('target');

    if( $this.is('[data-power-bar]') ){
      $(target).load(url,loadShoppingListPowerBar());
    } else {
      $(target).load(url);
    }

  });

});
