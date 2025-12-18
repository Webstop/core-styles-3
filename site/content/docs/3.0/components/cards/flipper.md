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

#### Coming Soon!

[//]: # ()
[//]: # (## Basic Card Flipper Example)

[//]: # ()
[//]: # ({{< example >}})

[//]: # ()
[//]: # (<div class="coupon-scene">)

[//]: # (  <div class="coupon-card">)

[//]: # (    <!-- Front Face -->)

[//]: # (    <div class="coupon-face coupon-front">)

[//]: # (      <div class="coupon-content">)

[//]: # (        <h3>20% OFF</h3>)

[//]: # (        <p>Your Next Purchase</p>)

[//]: # (      </div>)

[//]: # (      <button class="info-btn" aria-label="View terms">)

[//]: # (        Info)

[//]: # (      </button>)

[//]: # (    </div>)

[//]: # ()
[//]: # (    <!-- Back Face -->)

[//]: # (    <div class="coupon-face coupon-back">)

[//]: # (      <h3>Legal Terms</h3>)

[//]: # (      <!-- Scrollable wrapper with no transform -->)

[//]: # (      <div class="terms-scroll-wrapper">)

[//]: # (        <div class="terms-content">)

[//]: # (          <p>Terms and conditions...</p>)

[//]: # (          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>)

[//]: # (        </div>)

[//]: # (      </div>)

[//]: # (      <button class="close-btn" aria-label="Close terms">)

[//]: # (        X)

[//]: # (      </button>)

[//]: # (    </div>)

[//]: # (  </div>)

[//]: # (</div>)

[//]: # ()
[//]: # ({{< /example >}})

[//]: # ()
[//]: # (### CSS Classes)

[//]: # ()
[//]: # (| Class           | Validation | Description                                                                  |)

[//]: # (|-----------------|------------|------------------------------------------------------------------------------|)

[//]: # (| `flipper`       | Required   | Namespace for the flipper component. Placed on the root element of the card. |)

[//]: # ()
[//]: # ()
[//]: # (<style>)

[//]: # (/* Container with perspective */)

[//]: # (.coupon-scene {)

[//]: # (  perspective: 1000px;)

[//]: # (  width: 100%;)

[//]: # (  max-width: 400px;)

[//]: # (})

[//]: # ()
[//]: # (/* Card that flips */)

[//]: # (.coupon-card {)

[//]: # (  position: relative;)

[//]: # (  width: 100%;)

[//]: # (  height: 300px;)

[//]: # (  transform-style: preserve-3d;)

[//]: # (  transition: transform 0.6s;)

[//]: # (})

[//]: # ()
[//]: # (.coupon-card.is-flipped {)

[//]: # (  transform: rotateY&#40;180deg&#41;;)

[//]: # (})

[//]: # ()
[//]: # (/* Both faces */)

[//]: # (.coupon-face {)

[//]: # (  position: absolute;)

[//]: # (  width: 100%;)

[//]: # (  height: 100%;)

[//]: # (  backface-visibility: hidden;)

[//]: # (  -webkit-backface-visibility: hidden;)

[//]: # (  border-radius: 12px;)

[//]: # (  padding: 24px;)

[//]: # (})

[//]: # ()
[//]: # (/* Front face */)

[//]: # (.coupon-front {)

[//]: # (  background: linear-gradient&#40;135deg, #667eea 0%, #764ba2 100%&#41;;)

[//]: # (  display: flex;)

[//]: # (  flex-direction: column;)

[//]: # (  justify-content: space-between;)

[//]: # (})

[//]: # ()
[//]: # (/* Back face - rotated 180deg */)

[//]: # (.coupon-back {)

[//]: # (  background: var&#40;--background-bg-card&#41;;)

[//]: # (  border: 1px solid var&#40;--border-color&#41;;)

[//]: # (  transform: rotateY&#40;180deg&#41;;)

[//]: # (  /* Force own layer but don't affect children */)

[//]: # (  transform: rotateY&#40;180deg&#41; translateZ&#40;1px&#41;;)

[//]: # (})

[//]: # ()
[//]: # (/* CRITICAL: Scrollable wrapper with NO transform */)

[//]: # (.terms-scroll-wrapper {)

[//]: # (  /* Remove -webkit-overflow-scrolling: touch for iOS fix */)

[//]: # (  overflow-y: scroll;)

[//]: # (  -webkit-overflow-scrolling: auto; /* or omit */)

[//]: # (  max-height: 180px;)

[//]: # (  margin: 16px 0;)

[//]: # (  padding-right: 8px;)

[//]: # (  )
[//]: # (  /* Force GPU layer for smooth scrolling */)

[//]: # (  transform: translateZ&#40;0&#41;;)

[//]: # (  will-change: scroll-position;)

[//]: # (  )
[//]: # (  /* Ensure touch events work */)

[//]: # (  touch-action: pan-y;)

[//]: # (  pointer-events: auto;)

[//]: # (})

[//]: # ()
[//]: # (/* Content inside scroll wrapper */)

[//]: # (.terms-content {)

[//]: # (  font-size: 14px;)

[//]: # (  line-height: 1.6;)

[//]: # (  color: var&#40;--body-color&#41;;)

[//]: # (})

[//]: # ()
[//]: # (/* Scrollbar styling &#40;not supported on iOS but good for other browsers&#41; */)

[//]: # (.terms-scroll-wrapper::-webkit-scrollbar {)

[//]: # (  width: 6px;)

[//]: # (})

[//]: # ()
[//]: # (.terms-scroll-wrapper::-webkit-scrollbar-track {)

[//]: # (  background: var&#40;--background-bg-secondary&#41;;)

[//]: # (  border-radius: 3px;)

[//]: # (})

[//]: # ()
[//]: # (.terms-scroll-wrapper::-webkit-scrollbar-thumb {)

[//]: # (  background: var&#40;--text-tertiary&#41;;)

[//]: # (  border-radius: 3px;)

[//]: # (})

[//]: # ()
[//]: # (.terms-scroll-wrapper::-webkit-scrollbar-thumb:hover {)

[//]: # (  background: var&#40;--text-secondary&#41;;)

[//]: # (})

[//]: # ()
[//]: # (</style>)

[//]: # ()
[//]: # ()
[//]: # (<script>)

[//]: # (// Flip functionality)

[//]: # (const couponCard = document.querySelector&#40;'.coupon-card'&#41;;)

[//]: # (const infoBtn = document.querySelector&#40;'.info-btn'&#41;;)

[//]: # (const closeBtn = document.querySelector&#40;'.close-btn'&#41;;)

[//]: # ()
[//]: # (function flipCard&#40;&#41; {)

[//]: # (  couponCard.classList.toggle&#40;'is-flipped'&#41;;)

[//]: # (})

[//]: # ()
[//]: # (infoBtn?.addEventListener&#40;'click', &#40;e&#41; => {)

[//]: # (  e.stopPropagation&#40;&#41;;)

[//]: # (  flipCard&#40;&#41;;)

[//]: # (}&#41;;)

[//]: # ()
[//]: # (closeBtn?.addEventListener&#40;'click', &#40;e&#41; => {)

[//]: # (  e.stopPropagation&#40;&#41;;)

[//]: # (  flipCard&#40;&#41;;)

[//]: # (}&#41;;)

[//]: # ()
[//]: # (// Optional: Force scroll reset when flipping)

[//]: # (couponCard?.addEventListener&#40;'transitionend', &#40;&#41; => {)

[//]: # (  const scrollWrapper = document.querySelector&#40;'.terms-scroll-wrapper'&#41;;)

[//]: # (  if &#40;scrollWrapper && couponCard.classList.contains&#40;'is-flipped'&#41;&#41; {)

[//]: # (    // Reset scroll position when showing back)

[//]: # (    scrollWrapper.scrollTop = 0;)

[//]: # (  })

[//]: # (}&#41;;)

[//]: # ()
[//]: # (// iOS-specific: Ensure touch events work during scroll)

[//]: # (// This prevents the scroll from "sticking" on iOS)

[//]: # (const scrollWrapper = document.querySelector&#40;'.terms-scroll-wrapper'&#41;;)

[//]: # (if &#40;scrollWrapper&#41; {)

[//]: # (  let isScrolling = false;)

[//]: # (  )
[//]: # (  scrollWrapper.addEventListener&#40;'touchstart', &#40;&#41; => {)

[//]: # (    isScrolling = true;)

[//]: # (  }&#41;;)

[//]: # (  )
[//]: # (  scrollWrapper.addEventListener&#40;'touchend', &#40;&#41; => {)

[//]: # (    isScrolling = false;)

[//]: # (  }&#41;;)

[//]: # (  )
[//]: # (  // Prevent parent from capturing scroll events)

[//]: # (  scrollWrapper.addEventListener&#40;'touchmove', &#40;e&#41; => {)

[//]: # (    if &#40;isScrolling&#41; {)

[//]: # (      e.stopPropagation&#40;&#41;;)

[//]: # (    })

[//]: # (  }, { passive: true }&#41;;)

[//]: # (})

[//]: # (</script>)
