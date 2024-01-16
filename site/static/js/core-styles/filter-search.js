"use strict";
// Filter Search

// Waits for page to load.
window.addEventListener("load", function(){
  // Attaches event listener to the search field.
  // TODO: Update this to handle more than one search per-page, probably using querySelectorAll.
  let searchField = document.querySelector("input[data-filter-search]");
  if(searchField){
    searchField.addEventListener("keyup", function(){
      // Get the search string
      let search = this.value.toLowerCase();
      // Get the list of elements to search through.
      let selector = this.getAttribute('data-filter-selector');
      let items = document.querySelectorAll(selector);

      // Loop through the items and only show those that match the search terms.
      for (let i of items) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(search) == -1) {
          i.classList.add("d-none"); // Assumes we have Bootstrap CSS class `d-none` available.
        } else {
          i.classList.remove("d-none");
        }
      }
    });
  }

});
