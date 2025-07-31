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

{{ $package := getJSON "package.json" }}
<p>Version: {{ $package.version }}</p>

Here we include the script to display some iframe content.

```html
<div id="webstop-circular" 
  data-retailer-id="3296" 
  data-api-host="https://rails.example.com" 
  data-cdn-host="https://cdn.example.com"
  data-web-host="https://lasso.example.com"
>
</div>
<script src="https://example.com/circulars/circular-iframe-parent.min.js" crossorigin="anonymous"></script>
```

```html
<div id="webstop-circular" 
  data-retailer-id="3296" 
  data-api-host="https://rails.example.com" 
  data-cdn-host="https://cdn.example.com"
  data-web-host="https://lasso.example.com"
>
</div>
<script src="https://example.com/circulars/circular-iframe-parent.min.js" crossorigin="anonymous"></script>
```

```html
<div id="webstop-circular"></div>
<script src="https://example.com/circulars/retailer-3296-circular-iframe-parent.min.js" crossorigin="anonymous"></script>
```
https://s3.grocerywebsite.com/customizations_v3/retailer_767/javascripts/

### The script does the following:

1. Creates a Circular iframe containing the circular inside the `#webstop-circular` div.
2. Creates a Modal with modal iframe within the body
3. Listens for a postMessage indicating the modal should be triggered and what URL to load into the iframe.
4. Listens for a postMessage indicating the height of the circular has changed, and updates the circular iframe height.

<div id="webstop-circular" 
  data-retailer-id="3296" 
  data-api-host="https://ace.core11.rails.webstophq.com" 
  data-cdn-host="https://circulars-cdn.acehardware.com"
  data-web-host="https://3296.core11.lasso5.webstophq.com"
>
</div>
<script src="/js/circular-iframe-parent.js" crossorigin="anonymous"></script>


---

### Notes

How will this deploy? Via Core-Customizations? Maybe the retailer file should be in core-customizations, but core-customizations doesn't have the JS goodies for compiling and minifying JS files.
