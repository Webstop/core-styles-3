---
layout: docs
title: Card Flipper
description: Make cards with a front and back side and flip them over to reveal the other side.
group: components
toc: true
source: Webstop
menu: 
    components:
      tags: "cards, flipper, flip, reveal, back, front"
      parent: Components
---

#### Card Flipper!!!!

Flipper is a component that allows you to flip a card over to reveal the back side.

This component is useful for creating interactive cards that can be flipped over to reveal additional information or content.




<div style="min-height: 200px;">
<div class="card-flipper-container w-25">
  <div class="card-flipper">
  <div class="card-flipper-front">
    <div class="border rounded p-3">
      <h4>Front Card</h4>
      <p>This si the front of the card, click the info icon to flip to the back side.</p>
      <div class="card-flipper-trigger coupon-flip-icon">
        <i class="fa-solid fa-info-circle"></i> Flip Me!
      </div>
    </div>
  </div>
  <div class="card-flipper-back">
    <div class="card-flipper-scrollable-container border rounded p-3" style="max-height: 158px;">
      <h4>Back Card</h4>
      <div class="card-flipper-trigger coupon-cancel-flip">
        <i class="fak fa-cancel-circle"></i>
      </div>
    </div>
  </div>
  </div>
</div>
</div>


# Flip Cards in a Grid

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col card-flipper-container">
    <div class="card-flipper card-flipper-fixed-height">
      <div class="card-flipper-front">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
            <span class="card-flipper-trigger btn btn-sm btn-outline-secondary">
              <i class="fa-solid fa-info-circle"></i> Details
            </span>
          </div>
        </div>
      </div>
      <div class="card-flipper-back">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>More Details</strong>
            <span class="card-flipper-trigger btn btn-sm btn-outline-secondary">
              <i class="fa-solid fa-times"></i> Close
            </span>
          </div>
          <div class="card-body card-flipper-scrollable-container">
            <div class="card-flipper-scrollable" tabindex="0">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col card-flipper-container">
    <div class="card-flipper card-flipper-fixed-height">
      <div class="card-flipper-front">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
            <span class="card-flipper-trigger btn btn-sm btn-outline-secondary">
              <i class="fa-solid fa-info-circle"></i> Details
            </span>
          </div>
        </div>
      </div>
      <div class="card-flipper-back">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Product Information</strong>
            <span class="card-flipper-trigger btn btn-sm btn-outline-secondary">
              <i class="fa-solid fa-times"></i> Close
            </span>
          </div>
          <div class="card-body card-flipper-scrollable-container">
            <div class="card-flipper-scrollable" tabindex="0">
              <h6>Nutritional Facts</h6>
              <ul>
                <li>Calories: 120</li>
                <li>Fat: 5g</li>
                <li>Carbs: 15g</li>
                <li>Protein: 3g</li>
              </ul>
              <h6>Ingredients</h6>
              <p>Whole grain wheat, sugar, corn syrup, honey, salt, natural flavor.</p>
              <h6>Allergens</h6>
              <p>Contains wheat. May contain traces of nuts and soy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col card-flipper-container">
    <div class="card-flipper card-flipper-fixed-height">
      <div class="card-flipper-front">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
            <span class="card-flipper-trigger btn btn-sm btn-outline-secondary">
              <i class="fa-solid fa-info-circle"></i> Details
            </span>
          </div>
        </div>
      </div>
      <div class="card-flipper-back">
        <div class="card h-100">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Extended Details</strong>
            <span class="card-flipper-trigger btn btn-sm btn-outline-secondary">
              <i class="fa-solid fa-times"></i> Close
            </span>
          </div>
          <div class="card-body card-flipper-scrollable-container">
            <div class="card-flipper-scrollable" tabindex="0">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<script>
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
</script>

<style>
.card-flipper-container {
  perspective: 500px;
  -webkit-perspective: 500px;
}

.card-flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

/* Fixed height variant for grid layouts */
.card-flipper.card-flipper-fixed-height {
  min-height: 280px;
}

.card-flipper.card-flipper-is-flipped {
  transform: rotateY(180deg);
}

.card-flipper-front,
.card-flipper-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0,0,0);
}

.card-flipper-back {
  transform: rotateY(180deg);
}

.card-flipper-scrollable-container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-flipper-scrollable {
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transform: translateZ(0);
  padding-right: 5px;
}

/* Make card body flex for scrollable content */
.card-flipper-back .card-body.card-flipper-scrollable-container {
  overflow: hidden;
}
</style>


