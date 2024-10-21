---
layout: docs
title: Circular Iframe
description: Content items designed to live inside the digital circular.
group: circulars
toc: true
source: Webstop
menu: 
  products:
    tags: "Circulars"
    parent: Circulars
---

Here we include the script to display some iframe content.

The script does the following:

1. Creates a Circular iframe containing the circular inside the `#webstop-circular` div.
2. Creates a Modal with modal iframe within the body
3. Listens for a postMessage indicating the modal should be triggered and what URL to load into the iframe.
4. Listens for a postMessage indicating the height of the circular has changed, and updates the circular iframe height.

<div id="webstop-circular"></div>
<script src="/js/circular-iframe-parent.js" crossorigin="anonymous"></script>
