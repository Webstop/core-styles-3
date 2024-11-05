(function () {
  'use strict';

  // Dynamic height for iframe circulars
  // - This script determines the height of the circular and pushes a message to the parent iframe.
  // - The parent iframe will adjust the height of the circular accordingly.
  // - The script will resend the message when the webpage is resized or when content is added to the page.

  (function() {
    function calculateTrueHeight() {
      const doc = document;
      return Math.max(
        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      );
    }

    function sendHeightToParent(reason) {
      const height = calculateTrueHeight();
      console.log(`Sending height: ${height}, Reason: ${reason}`);
      window.parent.postMessage({ type: 'resize-webstop-circular-iframe', height: height, reason: reason }, '*');
    }

    // Initial height calculation with a small delay
    window.addEventListener('load', function() {
      setTimeout(function() {
        sendHeightToParent('load');
      }, 50);
    });

    // Recalculate height on window resize
    window.addEventListener('resize', function() {
      setTimeout(function() {
        sendHeightToParent('resize');
      }, 50);
    });

    // Recalculate height on content changes
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          setTimeout(function() {
            sendHeightToParent('content-change');
          }, 50);
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  })();


  // Modal fix for iframe circulars
  // This watches for when a modal is activated and makes the top margin of the modal equal to the distance
  // from the top of the page to the top of the circular-item. It then attempts to scroll the page down to that point.
  document.addEventListener('DOMContentLoaded', function() {


    const circularsContainer = document.querySelector('.site-content');

    const circular = document.querySelector('.circular');
    const pages =  Number(circular.getAttribute('data-max-page-number'));
    const circularHeight =  Number(circular.offsetHeight);
    const estimatedHeight = circularHeight * (pages - 1);
    circularsContainer.style.minHeight = `${Math.round(estimatedHeight)}px`;
    console.log(`circularHeight: ${Math.round(circularHeight)}px`);
    console.log(`estimatedHeight: ${Math.round(estimatedHeight)}px`);



    circularsContainer.addEventListener('click', function(event) {
      // Check if the clicked element or any of its parents has data-toggle="modal"
      const modalToggle = event.target.closest('[data-toggle="modal"]');

      if (modalToggle) {
        const circularItem = modalToggle.closest('.circular-item');
        const rect = circularItem.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const distanceFromTop = rect.top + scrollTop;

        // Send the information to the parent page
        // window.parent.postMessage({
        //   type: 'circularItemClicked',
        //   distanceFromTop: Math.round(distanceFromTop)
        // }, '*');
        console.log(`Distance: ${Math.round(distanceFromTop)}px`);
        const modalSelector = modalToggle.getAttribute('data-target');
        const modal = document.querySelector(modalSelector);
        modal.style.marginTop = `${distanceFromTop}px`;
      }
    });
  });

})();
//# sourceMappingURL=circular-iframe-internal.js.map
