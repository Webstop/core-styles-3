"use strict";
// Ajax Form Component
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
      if(hasOnComplete){ loadOnComplete(onCompleteUrl, onCompleteTarget); }
    });


  });

  function loadOnComplete(onCompleteUrl, onCompleteTarget) {
    const targets = document.querySelectorAll(onCompleteTarget);
    // console.log(`loadOnComplete`);
    // console.log(`onCompleteUrl: ${onCompleteUrl}`);
    // console.log(`onCompleteTarget: ${onCompleteTarget}`);

    return fetch(onCompleteUrl, {credentials: 'include', headers: {'X-Requested-With': 'fetch'}})
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
