
document.addEventListener('DOMContentLoaded', function () {
  const dragContainer = document.querySelector('.drag-container');
  const gridElement = document.querySelector('.wsg-grid');
  const filterField = document.querySelector('.wsg-grid-control-field.filter-field');
  const searchField = document.querySelector('.wsg-grid-control-field.search-field');
  const sortField = document.querySelector('.wsg-grid-control-field.sort-field');
  const layoutField = document.querySelector('.wsg-grid-control-field.layout-field');
  const addButton = document.querySelector('.wsg-grid-button.add-more-items');
  const itemTemplate = document.querySelector('.wsg-grid-item-template');
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const style = ['solid', 'duotone', 'regular', 'lite'];

  let sortFieldValue;
  let searchFieldValue;

  //
  // GRID
  //

  const grid = new Muuri(gridElement, {
    items: '.wsg-grid-item',
    showDuration: 400,
    showEasing: 'ease',
    hideDuration: 400,
    hideEasing: 'ease',
    layoutDuration: 400,
    layoutEasing: 'cubic-bezier(0.625, 0.225, 0.100, 0.890)',
    sortData: {
      title(item, element) {
        return element.getAttribute('data-title') || '';
      },
      style(item, element) {
        return element.getAttribute('data-style') || '';
      },
    },
   
  });

  window.grid = grid;

  //
  // Grid helper functions
  //

  function initDemo() {
    // Reset field values.
    searchField.value = '';
    [sortField, filterField, layoutField].forEach((field) => {
      field.value = field.querySelectorAll('option')[0].value;
    });

    // Set inital search query, active filter, active sort value and active layout.
    searchFieldValue = searchField.value.toLowerCase();
    sortFieldValue = sortField.value;

    updateDragState();

    // Search field binding.
    searchField.addEventListener('keyup', function () {
      var newSearch = searchField.value.toLowerCase();
      if (searchFieldValue !== newSearch) {
        searchFieldValue = newSearch;
        filter();
      }
    });

    // Filter, sort and layout bindings.
    filterField.addEventListener('change', filter);
    sortField.addEventListener('change', sort);
    layoutField.addEventListener('change', updateLayout);

    // Add/remove items bindings.
    addButton.addEventListener('click', addItems);
    gridElement.addEventListener('click', (e) => {
      if (e.target.matches('.wsg-grid-card-remove')) {
        removeItem(grid.getItem(e.target.closest('.wsg-grid-item')));
      }
    });
  }

  function filter(onFinish = null) {
    const filterFieldValue = filterField.value;
    grid.filter(
      (item) => {
        const element = item.getElement();
        const isSearchMatch =
          !searchFieldValue ||
          (element.getAttribute('data-title') || '').toLowerCase().indexOf(searchFieldValue) > -1;
        const isFilterMatch =
          !filterFieldValue || filterFieldValue === element.getAttribute('data-toggle');
        return isSearchMatch && isFilterMatch;
      },
      { onFinish: onFinish }
    );
  }

  function sort() {
    var currentSort = sortField.value;
    if (sortFieldValue === currentSort) return;

    updateDragState();

    // If we are changing from "order" sorting to something else
    // let's store the drag order.
    if (sortFieldValue === 'order') {
      dragOrder = grid.getItems();
    }

    // Sort the items.
    grid.sort(
      currentSort === 'title' ? 'title' : currentSort === 'style' ? 'style title' : dragOrder
    );

    // Update active sort value.
    sortFieldValue = currentSort;
  }

  let addEffectTimeout = null;
  function addItems() {
    addButton.classList.add('processing');

    const items = grid.add(createItemElements(5), {
      layout: false,
      active: false,
    });

    if (sortFieldValue !== 'order') {
      grid.sort(sortFieldValue === 'title' ? 'title' : 'style title', {
        layout: false,
      });
      dragOrder = dragOrder.concat(items);
    }

    filter();

    if (addEffectTimeout) clearTimeout(addEffectTimeout);
    addEffectTimeout = setTimeout(() => {
      addEffectTimeout = null;
      addButton.classList.remove('processing');
    }, 250);
  }

  function removeItem(item) {
    if (!item) return;

    grid.hide([item], {
      onFinish: () => {
        grid.remove(item, { removeElements: true });
        if (sortFieldValue !== 'order') {
          const itemIndex = dragOrder.indexOf(item);
          if (itemIndex > -1) dragOrder.splice(itemIndex, 1);
        }
      },
    });
  }

  function updateLayout() {
    const { layout } = grid._settings;
    const val = layoutField.value;
    layout.alignRight = val.indexOf('right') > -1;
    layout.alignBottom = val.indexOf('bottom') > -1;
    layout.fillGaps = val.indexOf('fillgaps') > -1;
    grid.layout();
  }

  function updateDragState() {
    if (sortField.value === 'order') {
      gridElement.classList.add('drag-enabled');
    } else {
      gridElement.classList.remove('drag-enabled');
    }
  }

  //
  // Generic helper functions
  //

  

  
  //
  // Fire it up!
  //

  initDemo();
});