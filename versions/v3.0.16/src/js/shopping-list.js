"use strict";

(function() {
  'use strict';


  // Toggle Shopping List View States (compact, expanded, in-store)

  function init() {
    // Get ALL shopping list elements
    const shoppingLists = document.querySelectorAll('.shopping-list-aside .shopping-list-items');

    // Get ALL toggle buttons from all button sets
    const viewToggleButtons = document.querySelectorAll('[data-shopping-list-view-toggle]');

    console.log(`Found ${shoppingLists.length} shopping list elements`);
    console.log(`Found ${viewToggleButtons.length} toggle buttons`);

    const retailerID = webstop.retailerID || 3362;

    const cookieName = 'shopping_list_view_for_retailer_' + retailerID;

    if (shoppingLists.length === 0) {
      console.warn('No shopping list elements found');
      return false;
    }

    if (viewToggleButtons.length === 0) {
      console.warn('No toggle buttons found');
      return false;
    }

    function setViewState(viewState) {
      console.log(`Setting view state to "${viewState}" for ${shoppingLists.length} shopping lists`);

      // Update ALL shopping list elements
      shoppingLists.forEach((shoppingList, index) => {
        shoppingList.setAttribute('data-shopping-list-view', viewState);
        console.log(`Updated shopping list ${index + 1}:`, shoppingList);
      });

      // Update ALL button states across all button sets
      viewToggleButtons.forEach(btn => {
        const buttonViewState = btn.getAttribute('data-shopping-list-view-toggle');
        if (buttonViewState === viewState) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Save the view state to cookie (expires in 365 days)
      cs3.setCookie(cookieName, viewState, 365);
      console.log(`View state "${viewState}" saved to cookie`);

      console.log(`All shopping lists updated to: ${viewState}`);
    }

    function getCurrentViewState() {
      // Return the state of the first shopping list (they should all be the same)
      return shoppingLists.length > 0 ?
        shoppingLists[0].getAttribute('data-shopping-list-view') : null;
    }

    // Add event listeners to ALL toggle buttons
    viewToggleButtons.forEach((button, index) => {
      console.log(`Adding listener to button ${index + 1}:`, button);

      button.addEventListener('click', (event) => {
        const viewState = event.currentTarget.getAttribute('data-shopping-list-view-toggle');
        console.log(`Button ${index + 1} clicked, setting view to: ${viewState}`);
        setViewState(viewState);
      });
    });

    // Check for saved view state in cookie, fallback to 'compact' if not found
    const savedViewState = cs3.getCookie(cookieName);
    const initialViewState = savedViewState || 'compact';

    console.log(`Saved view state from cookie: ${savedViewState}`);
    console.log(`Setting initial view state to: ${initialViewState}`);

    // Set initial state for all shopping lists
    setViewState(initialViewState);

    // Expose globally
    window.ShoppingListViews = {
      getCurrentView: getCurrentViewState,
      setView: setViewState,
      getShoppingLists: () => shoppingLists,
      getButtons: () => viewToggleButtons
    };

    return true;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

