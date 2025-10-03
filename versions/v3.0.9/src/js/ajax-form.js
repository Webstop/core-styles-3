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

  $(document.body).on('submit', '[data-ajax-form]', function(event){
    event.preventDefault();

    let $this = $(this);
    let url = $this.attr('action');
    let method = $this.attr('method');
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
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    if (!validMethods.includes(method.toUpperCase())) {
      method = 'POST';
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
      console.log(`hasOnComplete: ${hasOnComplete}`);
      if(hasOnComplete){ loadOnComplete(onCompleteUrl, onCompleteTarget, method); }
      if(hasPowerBar){ loadShoppingListPowerBar(); }
    });


  });

  function loadOnComplete(onCompleteUrl, onCompleteTarget, method = 'POST') {
    const targets = document.querySelectorAll(onCompleteTarget);
    // console.log(`loadOnComplete`);
    // console.log(`onCompleteUrl: ${onCompleteUrl}`);
    // console.log(`onCompleteTarget: ${onCompleteTarget}`);

    return fetch(onCompleteUrl, {method: method})
      .then(response => {
        if (!response.ok) {
          // Create a more detailed error message based on status code
          let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

          switch (response.status) {
            case 404:
              errorMessage += ' - The requested resource was not found';
              break;
            case 500:
              errorMessage += ' - Internal server error occurred';
              break;
            case 403:
              errorMessage += ' - Access forbidden';
              break;
            case 401:
              errorMessage += ' - Authentication required';
              break;
            default:
              errorMessage += ' - Request failed';
          }

          throw new Error(errorMessage);
        }
        return response.text();
      })
      .then(html => {
        targets.forEach(target => {
          console.log(`Apply on complete to target.`);
          target.innerHTML = html;
        });
      })
      .catch(error => {
        console.error('Error loading on-complete content:', error.message);

        // Log additional context for debugging
        console.error('Request details:', {
          url: onCompleteUrl,
          method: method,
          target: onCompleteTarget
        });
      });
  }

});
