"use strict";
// Ajax Form Component
$(function() {

  $(document.body).on('submit', '[data-ajax-form]', function(event){
    event.preventDefault();

    let $this = $(this);
    let url = $this.attr('action');
    let method = $this.attr('method') || 'POST';
    let data = $this.serializeArray();
    let $target = $this;
    let $submitButtons = $this.find('[type="submit"], button[type="submit"], input[type="submit"]');
    let loadingText = $this.data('loading-text') || 'Loading…';
    let hasHideOnComplete = $this.is('[data-on-complete-hide]');
    let hideOnCompleteTarget = '';
    if(hasHideOnComplete){ hideOnCompleteTarget = $this.data('on-complete-hide'); }
    let hasClearOnComplete = $this.is('[data-on-complete-clear]');
    let clearOnCompleteTarget = '';
    if(hasClearOnComplete){ clearOnCompleteTarget = $this.data('on-complete-clear'); }
    let hasShowOnComplete = $this.is('[data-on-complete-show]');
    let showOnCompleteTarget = '';
    if(hasShowOnComplete){ showOnCompleteTarget = $this.data('on-complete-show'); }
    let hasLoadOnComplete = $this.is('[data-on-complete-load]');
    let loadOnCompleteURL = '';
    let loadOnCompleteTarget = '';
    if(hasLoadOnComplete){
      loadOnCompleteURL = $this.data('on-complete-load');
      loadOnCompleteTarget = $this.data('on-complete-target');
    }
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    if (!validMethods.includes(method.toUpperCase())) {
      method = 'POST';
    }
    $submitButtons.each(function() {
      let $btn = $(this);
      // submit inputs use val and submit buttons use text.
      if ($btn.is('input')) {
        $btn.val(loadingText);
      } else {
        $btn.text(loadingText);
      }
      $btn.prop('disabled', true)
    });

    if( $this.is('[data-target]') ){
      $target = $($this.data('target'));
    } else {
      if($this.parent().is('.ajax-form-container')) {
      }  else {
        $this.wrap( "<div class='ajax-form-container'></div>" );
      }
      $target = $this.parent();
    }
    $submitButtons.prop('disabled', true);

    $target.load(url,data,function(){
      if(hasClearOnComplete){ clearOnComplete(clearOnCompleteTarget); }
      if(hasHideOnComplete){ hideOnComplete(hideOnCompleteTarget); }
      if(hasShowOnComplete){ showOnComplete(showOnCompleteTarget); }
      if(hasLoadOnComplete){ loadOnComplete(loadOnCompleteURL, loadOnCompleteTarget); }
    });


  });

  function hideOnComplete(hideOnCompleteTarget) {
    const targets = document.querySelectorAll(hideOnCompleteTarget);

    targets.forEach(target => {
      target.style.display = 'none';
    });

  }

  function clearOnComplete(clearOnCompleteTarget) {
    const targets = document.querySelectorAll(clearOnCompleteTarget);

    targets.forEach(target => {
      target.innerHTML = '';
    });

  }
  function showOnComplete(showOnCompleteTarget) {
    const targets = document.querySelectorAll(showOnCompleteTarget);

    targets.forEach(target => {
      // Remove d-none class if present
      target.classList.remove('d-none');

      // Set display to block with !important
      target.style.setProperty('display', 'block', 'important');
    });

  }

  function loadOnComplete(loadOnCompleteURL, loadOnCompleteTarget) {
    const targets = document.querySelectorAll(loadOnCompleteTarget);
    // console.log(`loadOnComplete`);
    // console.log(`loadOnCompleteURL: ${loadOnCompleteURL}`);
    // console.log(`loadOnCompleteTarget: ${loadOnCompleteTarget}`);

    return fetch(loadOnCompleteURL, {credentials: 'include', headers: {'X-Requested-With': 'fetch'}})
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
          url: loadOnCompleteURL,
          method: method,
          target: loadOnCompleteTarget
        });
      });
  }

});
