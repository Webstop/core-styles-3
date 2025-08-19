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

Some retailers want to use Webstop's Digital Circular within an iframe on a website managed by a third party or the 
retailer's internally managed website. We have made it so all they have to do is drop in the appropriate javascript file 
and this Javascript file does the rest. 



## Example 

The following is used at Ace Hardware (retailer 3296).

```html
<div id="webstop-circular" class="webstop-circular"></div>
<script src="https://circulars-cdn.acehardware.com/customizations_v3/retailer_3296/javascripts/circular_iframe_parent_for_retailer_3296.js"
 crossorigin="anonymous"></script>
```

## Creating the Javascript File

You'll notice the file in the example above isn't served directly from Core Styles but instead is part of Core Customizations. 
This is because we need to set some retailer specific configuration values in the file in order for it to work properly. 

### Step 1: Create a File

In the Core-Customizations repo create a file like so:

`gem/customizations_v3/retailer_3296/javascripts/circular_iframe_parent_for_retailer_3296.js`

Where you replace `3296` in the folder and file name with the ID of the retailer you are interested in making the file for.

### Step 2: Copy Settings Template

Copy the contents of the `js/circular-iframe-parent-settings-template.js` file and paste it into the file you made in Step 1.

It should look something like this:

```javascript
(function(webstop){

  webstop.retailerID = 0;
  webstop.apiHost    = '';
  webstop.webHost    = '';
  webstop.cdnHost    = '';
  // webstop.hasCircularStoreLocator = false; // Defaults to false, uncomment

})( window.webstop = window.webstop || {} );
```

### Step 3: Apply Retailer Settings

Now put the information for the retailer and the silo they operate in the file created in step 1. For Ace Hardware it 
it looks like the following.

> **Important note:** Ace Hardware runs in an isolated silo, so the values for API Host and CDN Host won't be used by any non-Ace retailers. 

```javascript
(function(webstop){

  webstop.retailerID = 3296;
  webstop.apiHost    = 'https://circulars-2.acehardware.com';
  webstop.webHost    = 'https://circulars-1.acehardware.com';
  webstop.cdnHost    = 'https://circulars-cdn.acehardware.com';
  webstop.hasCircularStoreLocator = false;

})( window.webstop = window.webstop || {} );
```

### Step 4: Append Parent Script

Now append to the end of the file the contents of the `js/circular-iframe-parent.js` file.

```javascript
'use strict';
(function(webstop){

webstop.retailerID = 3296;
webstop.apiHost    = 'https://circulars-2.acehardware.com';
webstop.webHost    = 'https://circulars-1.acehardware.com';
webstop.cdnHost    = 'https://circulars-cdn.acehardware.com';
webstop.hasCircularStoreLocator = false;

})( window.webstop = window.webstop || {} );

(function(webstop){

  // ==================================
  // A BUNCH OF JAVASCRIPT WILL BE HERE
  // ==================================
  
})( window.webstop = window.webstop || {} );
```

Now you've created the file with the custom values the retailer needs.


## Deploying the Circular

Now that you've created the file we need to put it on the Retailer's website. 

---

```html
<div id="webstop-circular" 
  data-retailer-id="3296" 
  data-api-host="https://rails.example.com" 
  data-cdn-host="https://cdn.example.com"
  data-web-host="https://lasso.example.com"
>
</div>
<script src="https://circulars-cdn.acehardware.com/core-repos/core-styles-3/{{< version >}}/src/js/circular-iframe-parent.js
 crossorigin="anonymous"></script>
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
