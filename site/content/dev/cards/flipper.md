---
layout: admin 
title: Card Flipper
description: Development of the card flipper.
group: guide
toc: true
source: Webstop
menu:
  main:
   parent: dev
---

#### Coming Soon!

[//]: # ()
[//]: # (### Card Flipper)

[//]: # ()
[//]: # (<div class="scene">)

[//]: # (  <div class="card">)

[//]: # (    <div class="card__face card__face--front">)

[//]: # (      <h2>Front Side</h2>)

[//]: # (    </div>)

[//]: # (    <div class="card__face card__face--back">)

[//]: # (      <h2>Back Side</h2>)

[//]: # (      <div class="scrollable">)

[//]: # (        <!-- Long scrollable content -->)

[//]: # (      </div>)

[//]: # (    </div>)

[//]: # (  </div>)

[//]: # (</div>)

[//]: # ()
[//]: # ()
[//]: # (<style>)

[//]: # (/* Container - creates 3D space */)

[//]: # (.scene {)

[//]: # (  width: 300px;)

[//]: # (  height: 400px;)

[//]: # (  perspective: 600px;)

[//]: # (})

[//]: # ()
[//]: # (/* Card - the element that flips */)

[//]: # (.card {)

[//]: # (  width: 100%;)

[//]: # (  height: 100%;)

[//]: # (  position: relative;)

[//]: # (  transition: transform 1s;)

[//]: # (  transform-style: preserve-3d;)

[//]: # (})

[//]: # ()
[//]: # (/* Both faces */)

[//]: # (.card__face {)

[//]: # (  position: absolute;)

[//]: # (  width: 100%;)

[//]: # (  height: 100%;)

[//]: # (  backface-visibility: hidden;)

[//]: # (})

[//]: # ()
[//]: # (/* Front face */)

[//]: # (.card__face--front {)

[//]: # (  background: #fff;)

[//]: # (})

[//]: # ()
[//]: # (/* Back face - pre-rotated */)

[//]: # (.card__face--back {)

[//]: # (  background: #f0f0f0;)

[//]: # (  transform: rotateY&#40;180deg&#41;;)

[//]: # (})

[//]: # ()
[//]: # (/* Flipped state */)

[//]: # (.card.is-flipped {)

[//]: # (  transform: rotateY&#40;180deg&#41;;)

[//]: # (})

[//]: # ()
[//]: # (/* Scrollable content &#40;iOS fix&#41; */)

[//]: # (.scrollable {)

[//]: # (  height: 100%;)

[//]: # (  overflow-y: auto;)

[//]: # (  -webkit-overflow-scrolling: auto;)

[//]: # (  transform: translateZ&#40;0&#41;;)

[//]: # (  will-change: scroll-position;)

[//]: # (})

[//]: # ()
[//]: # (</style>)

[//]: # ()
[//]: # ()
[//]: # (<script>)

[//]: # (// Wait for DOM to be ready)

[//]: # (document.addEventListener&#40;'DOMContentLoaded', function&#40;&#41; {)

[//]: # (  // Select the container that holds all flip cards)

[//]: # (  const container = document.querySelector&#40;'.flip-card-scene'&#41; || document.body;)

[//]: # (  )
[//]: # (  // Single delegated event listener using event delegation)

[//]: # (  container.addEventListener&#40;'click', function&#40;e&#41; {)

[//]: # (    // Find the nearest flip trigger button that was clicked)

[//]: # (    const trigger = e.target.closest&#40;'.flip-trigger'&#41;;)

[//]: # (    )
[//]: # (    if &#40;trigger&#41; {)

[//]: # (      // Prevent the click from bubbling up)

[//]: # (      e.stopPropagation&#40;&#41;;)

[//]: # (      )
[//]: # (      // Find the card that contains this trigger)

[//]: # (      const card = trigger.closest&#40;'.flip-card'&#41;;)

[//]: # (      )
[//]: # (      if &#40;card&#41; {)

[//]: # (        // Toggle the flipped state)

[//]: # (        card.classList.toggle&#40;'is-flipped'&#41;;)

[//]: # (      })

[//]: # (    })

[//]: # (  }&#41;;)

[//]: # (}&#41;;)

[//]: # ()
[//]: # (// Optional: Add keyboard support for accessibility)

[//]: # (document.addEventListener&#40;'keydown', function&#40;e&#41; {)

[//]: # (  if &#40;e.key === 'Escape'&#41; {)

[//]: # (    // Flip all cards back to front when Escape is pressed)

[//]: # (    const flippedCards = document.querySelectorAll&#40;'.flip-card.is-flipped'&#41;;)

[//]: # (    flippedCards.forEach&#40;card => {)

[//]: # (      card.classList.remove&#40;'is-flipped'&#41;;)

[//]: # (    }&#41;;)

[//]: # (  })

[//]: # (}&#41;;)

[//]: # ()
[//]: # (// Optional: Support for dynamically added cards)

[//]: # (// The event delegation pattern above automatically handles new cards)

[//]: # (// without needing to re-attach listeners)

[//]: # (</script>)
