(function () {
  'use strict';

  (function(webstop){

    const circularContainer = document.getElementById('webstop-circular');
    let error = '';

    if (webstop.hasCircularStoreLocator === '' || webstop.hasCircularStoreLocator === null || webstop.hasCircularStoreLocator === undefined) {
      webstop.hasCircularStoreLocator = true;
    }


    // If values are provided as attributes on the #webstop-circular container prefer those values
    if (circularContainer.hasAttribute('data-retailer-id')) {
      webstop.retailerID= circularContainer.getAttribute('data-retailer-id');
    }
    if (circularContainerhasAttribute('data-api-host')) {
      webstop.apiHost= circularContainer.getAttribute('data-api-host');
    }
    if (circularContainer.hasAttribute('data-api-host')) {
      webstop.apiHost= circularContainer.getAttribute('data-api-host');
    }
    if (circularContainer.hasAttribute('data-web-host')) {
      webstop.webHost= circularContainer.getAttribute('data-web-host');
    }
    if (circularContainer.hasAttribute('data-cdn-host')) {
      webstop.cdnHost= circularContainer.getAttribute('data-cdn-host');
    }
    if (circularContainer.hasAttribute('data-store-id')) {
      webstop.storeID= circularContainer.getAttribute('data-store-id');
    }
    if (circularContainer.hasAttribute('data-store-number')) {
      webstop.storeNumber= circularContainer.getAttribute('data-store-number');
    }

    // if a value is missing, check to see if it exists on the body tag, but only as a last resort
    if ( (webstop.retailerID === '' || webstop.retailerID === null || webstop.retailerID === undefined) && document.body.hasAttribute('data-retailer-id')) {
      webstop.retailerID= document.body.getAttribute('data-retailer-id');
    }
    if ( (webstop.apiHost === '' || webstop.apiHost === null || webstop.apiHost === undefined) && document.body.hasAttribute('data-api-host')) {
      webstop.apiHost= document.body.getAttribute('data-api-host');
    }
    if ( (webstop.webHost === '' || webstop.webHost === null || webstop.webHost === undefined) && document.body.hasAttribute('data-web-host')) {
      webstop.webHost= document.body.getAttribute('data-web-host');
    }
    if ( (webstop.cdnHost === '' || webstop.cdnHost === null || webstop.cdnHost === undefined) && document.body.hasAttribute('data-cdn-host')) {
      webstop.cdnHost= document.body.getAttribute('data-cdn-host');
    }
    if ( (webstop.storeID === '' || webstop.storeID === null || webstop.storeID === undefined) && document.body.hasAttribute('data-retailer-id')) {
      webstop.storeID= document.body.getAttribute('data-store-id');
    }
    if ( (webstop.storeNumber === '' || webstop.storeNumber === null || webstop.storeNumber === undefined) && document.body.hasAttribute('data-store-number')) {
      webstop.storeNumber= document.body.getAttribute('data-store-number');
    }

    // Notify us in the web browser's console if a required value is missing
    if (webstop.retailerID === '' || webstop.retailerID === null || webstop.retailerID === undefined) {
      error += 'Webstop circular unable find Retailer ID. ';
    }
    if (webstop.apiHost === '' || webstop.apiHost === null || webstop.apiHost === undefined) {
      error += 'Webstop circular unable find API Host. ';
    }
    if (webstop.webHost === '' || webstop.webHost === null || webstop.webHost === undefined) {
      error += 'Webstop circular unable find Web Host. ';
    }
    if (webstop.cdnHost === '' || webstop.cdnHost === null || webstop.cdnHost === undefined) {
      error += 'Webstop circular unable find CDN Host. ';
    }
    if ( webstop.hasCircularStoreLocator === false && (webstop.storeID === '' || webstop.storeID === null || webstop.storeID === undefined) && (webstop.storeNumber === '' || webstop.storeNumber === null || webstop.storeNumber === undefined)) {
      error += 'Webstop circular unable find Store ID and unable find Store Number. At least one must be present. ';
    }
    if (circularContainer === null || circularContainer === undefined) {
      error += 'Webstop circular unable container div. ';
    }

    if (error !== '') {
      console.warn(error);
    }

    // Create the main circular iframe
    if (error === '') {
      // Create the iframe element
      const circularIframe = document.createElement('iframe');
      circularIframe.id = 'webstop-circular-iframe';

      // Set Default URL
      circularIframe.src = `${webstop.webHost}/circulars/`;
      // Use Store Number URL
      if (webstop.storeNumber !== '' && webstop.storeNumber !== null && webstop.storeNumber !== undefined) {
        circularIframe.src = `${webstop.apiHost}/retailers/${webstop.retailerID}/stores/by_store_number/${webstop.storeNumber}/choose_store?filter=circulars&url=${webstop.webHost}/circulars/`;
      }
      // Use Store ID URL
      if (webstop.storeID !== '' && webstop.storeID !== null && webstop.storeID !== undefined) {
        circularIframe.src = `${webstop.apiHost}/retailers/${webstop.retailerID}/stores/${webstop.storeID}/choose_store?filter=circulars&url=${webstop.webHost}/circulars/`;
      }

      // circularIframe.width = '100%';
      // circularIframe.height = '300px'; // Adjust height as needed
      // circularIframe.allowFullScreen = true;

      // Add the iframe to the container
      circularContainer.appendChild(circularIframe);
    }

    // Create the modal
    if (error === '') {
      // Create the iframe element
      const modalBackdropContainer = document.createElement('div');
      const modalContainer = document.createElement('div');
      const modalIframe = document.createElement('iframe');
      modalBackdropContainer.id = 'webstop-modal-backdrop-container';
      modalContainer.id = 'webstop-modal-container';
      modalIframe.id = 'webstop-modal-iframe';

      // Add the iframe to the container
      circularContainer.appendChild(modalBackdropContainer);
      modalBackdropContainer.appendChild(modalContainer);
      modalContainer.appendChild(modalIframe);
    }


  })( window.webstop = window.webstop || {} );

})();
//# sourceMappingURL=circular-iframe-parent.js.map
