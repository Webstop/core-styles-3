"use strict";
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

  function loadOnComplete(onCompleteUrl, onCompleteTarget) {
    const targets = document.querySelectorAll(onCompleteTarget);

    return fetch(onCompleteUrl)
      .then(response => response.text())
      .then(html => {
        targets.forEach(target => {
          target.innerHTML = html;
        });
      })
      .catch(error => console.error('Ajax-form, error loading on-complete content:', error));
  }

  $(document.body).on('submit', '[data-ajax-form]', function(event){
    event.preventDefault();

    let $this = $(this);
    let url = $this.attr('action');
    let data = $this.serializeArray();
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

    $target.load(url,data,function(){
      if(hasOnComplete){ loadOnComplete(onCompleteUrl, onCompleteTarget); }
      if(hasPowerBar){ loadShoppingListPowerBar(); }
    });

    // if( $this.is('[data-power-bar]') ){
    //   $target.load(url,data,function(){
    //     loadShoppingListPowerBar();
    //   });
    // } else {
    //   $target.load(url,data);
    // }

  });

});
