"use strict";
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(e) {
    const trigger = e.target.closest('.card-flipper-trigger');

    if (trigger) {
      e.stopPropagation();
      const card = trigger.closest('.card-flipper');

      if (card) {
        card.classList.toggle('card-flipper-is-flipped');
      }
    }
  });
});
