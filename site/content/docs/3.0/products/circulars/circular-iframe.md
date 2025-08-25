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
retailer's internally managed website. We have made it so all they have to do is drop in the appropriate javascript file,
an empty div with the an id of `webstop-circular` and the Javascript file does the rest. 



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

### Step 1: Create an Empty File

_The file will be empty for this step._

In the Core-Customizations repo create a file like so:

`gem/customizations_v3/retailer_3296/javascripts/circular_iframe_parent_for_retailer_3296.js`

Where you replace `3296` in the folder and file name with the ID of the retailer you are interested in making the file for.

### Step 2: Copy Settings Template

Copy the contents of the `js/circular-iframe-parent-settings-template.js` file found in core-styles-3 and paste it into the file you made in Step 1.

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

> **Important note:** Ace Hardware runs in an isolated silo, so the values for API Host and CDN Host won't be used by any non-Ace retailers. Also the `webstop.retailerID` value should not be 3296, but the ID of the retailer you are working with.

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

Now append to the end of the file created in step 1 the contents of the `js/circular-iframe-parent.js` file found in core-styles-3.

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

Have the retailer place the following on their website.

```html
<div id="webstop-circular"></div>
<script src="https://cdn.example.com/customizations_v3/retailer_3296/javascripts/circular_iframe_parent_for_retailer_3296.js" crossorigin="anonymous"></script>
```

Due to core restrictions we can't host this file on a domain different than the host website. You'll notice in our Ace 
Hardware examples we use a CDN that's on the `acehardware.com` domain.

### The script does the following:

1. Creates a Circular iframe containing the circular inside the `#webstop-circular` div.
2. Creates a Modal with modal iframe within the body
3. Listens for a postMessage indicating the height of the circular has changed, and updates the circular iframe height.

[//]: # (4. Listens for a postMessage indicating the modal should be triggered and what URL to load into the iframe.)

---

## Alternative Approach (Development Only)

Instead of creating a file in Core-Customizations, you can point to the JS file in Core-Style-3 and then use data attributes 
on the `#webstop-circular` div to set the data needed by the script. 

> **Important Note:** This approach is going to seem easier, and for the initial setup it is a little easier. However, whenever we need a change 
> to any of these values (or need to add a new one) we have to get with the retailer's IT staff and coordinate the change, which can 
> be difficult, time consuming, and possibly embarrassing when working with a large corporation like Ace. Therefore this 
> approach is only recommended for development and testing.

```html
<div id="webstop-circular" 
  data-retailer-id="1" 
  data-api-host="https://rails.example.com" 
  data-cdn-host="https://cdn.example.com"
  data-web-host="https://lasso.example.com"
>
</div>
<script src="https://cdn.example.com/core-repos/core-styles-3/{{< version >}}/dist/js/circular-iframe-parent.min.js" crossorigin="anonymous"></script>
```

## Live Example

The following is the actual Ace Hardware production circulars.

[//]: # (<div id="webstop-circular" class="webstop-circular"></div>)

[//]: # (<script src="https://circulars-cdn.acehardware.com/customizations_v3/retailer_3296/javascripts/circular_iframe_parent_for_retailer_3296.js")

[//]: # ( crossorigin="anonymous"></script>)

```html
<div id="webstop-circular"
  data-retailer-id="3296"
  data-api-host="https://circulars-2.acehardware.com"
  data-cdn-host="https://circulars-cdn.acehardware.com"
  data-web-host="https://circulars-1.acehardware.com"
></div>
<script src="/js/circular-iframe-parent.js" crossorigin="anonymous"></script>
```

<div id="webstop-circular"
  data-retailer-id="3296"
  data-api-host="https://circulars-2.acehardware.com"
  data-cdn-host="https://circulars-cdn.acehardware.com"
  data-web-host="https://circulars-1.acehardware.com"
></div>
<script src="/js/circular-iframe-parent.js" crossorigin="anonymous"></script>


---

[//]: # (### Notes)

[//]: # ()
[//]: # (How will this deploy? Via Core-Customizations? Maybe the retailer file should be in core-customizations, but core-customizations doesn't have the JS goodies for compiling and minifying JS files.)
