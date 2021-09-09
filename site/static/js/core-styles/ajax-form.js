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

  $('[data-ajax-form]').on('submit', function(event){
    event.preventDefault();

    let $this = $(this);
    let url = $this.attr('action');
    let data = $this.serializeArray();
    let $target = $this;

    if( $this.is('[data-target]') ){
      $target = $($this.data('target'));
    } else {
      if($this.parent().is('.ajax-form-container')) {
      }  else {
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
