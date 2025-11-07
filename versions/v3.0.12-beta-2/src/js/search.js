"use strict";
// Search Component - Modern Vanilla JavaScript Version

document.addEventListener('DOMContentLoaded', function() {

  function liveSearch() {

    document.querySelectorAll('[data-live-search]').forEach(form => {
      const searchInput = form.querySelector('.live-search-search-text');
      const clearButton = form.querySelector('.live-search-clear');
      const target = form.dataset.target;
      const hide = form.dataset.hide;
      const url = form.action;
      let delay = null;
      let isFirstCall = true;

      function handleSearch() {

        if (isFirstCall) {
          const targetElement = document.querySelector(target);
          if (targetElement) {
            targetElement.style.display = 'block';
            targetElement.innerHTML = '<div class="mx-auto d-block" style="width: 5rem;" role="status"><div class="spinner-grow" style="width: 5rem; height: 5rem;" role="status"></div><br>Searching…</div>';
          }
          performSearch(target, hide, url, form);
          isFirstCall = false;
        } else {
          if (delay) {
            clearTimeout(delay);
          }
          delay = setTimeout(() => performSearch(target, hide, url, form), 300);
        }
      }

      form.addEventListener('submit', function(event) {
        event.preventDefault();
        handleSearch(); // No parameters needed
      });

      searchInput?.addEventListener('keyup', async function(event) {
        const search = event.target.value;

        if (search.length <= 2) {
          exitSearch(target, form.dataset.hide);
          // Reset state when search is too short
          if (delay) {
            clearTimeout(delay);
          }
          delay = null;
          isFirstCall = true;
        } else {
          handleSearch();
        }
      });

      clearButton?.addEventListener('click', function(event) {
        event.preventDefault();
        const target = form.dataset.target;
        const reveal = form.dataset.hide;
        const searchInput = form.querySelector('.live-search-search-text');
        exitSearch(target, reveal, searchInput);
        // Reset state when clearing
        if (delay) {
          clearTimeout(delay);
        }
        delay = null;
        isFirstCall = true;
      });
    });
  }

  function exitSearch(target, reveal = null, clearInput = null) {
    clearInput?.value && (clearInput.value = '');

    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.innerHTML = '';
      targetElement.style.display = 'none';
    }
    if (reveal) {
      const revealElements = document.querySelectorAll(reveal);
      revealElements.forEach(revealElement => {
        revealElement?.style && (revealElement.style.display = 'block');
      })
    }

    reveal && (document.querySelector(reveal).style.display = 'block');
  }

  async function performSearch(target, hide, url, form) {
    const targetElement = document.querySelector(target);
    const hideElements = hide ? document.querySelectorAll(hide) : null;
    const data = new FormData(form);
    hideElements.forEach(hideElement => {
      hideElement?.style && (hideElement.style.display = 'none');
    })


    if (targetElement) {
      targetElement.style.display = 'block';

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: data,
          credentials: 'include',
          headers: {'X-Requested-With': 'fetch'}
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const html = await response.text();
        targetElement.innerHTML = html;

      } catch (error) {
        console.error('Search request failed:', error);
        targetElement.innerHTML = '<p>Search failed. Please try again.</p>';
      }
    }
  }

  liveSearch();
});
