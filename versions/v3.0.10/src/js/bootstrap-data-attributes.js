"use strict";
// Adds default data attribute support to components that are missing it from Bootstrap.

function initPopovers() {
  $('[data-toggle="popover"]').popover();
  // Bootstrap v5 switched to adding the bs namespace to their data attributes.
  $('[data-bs-toggle="popover"]').popover();
}

function initTooltips() {
  $('[data-toggle="tooltip"]').tooltip();
  // Bootstrap v5 switched to adding the bs namespace to their data attributes.
  $('[data-bs-toggle="tooltip"]').tooltip();
}

function initDataAttributes() {
  initPopovers();
  initTooltips();
}

$(function() {
  initDataAttributes();
});
