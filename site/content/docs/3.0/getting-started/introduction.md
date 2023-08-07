---
layout: docs
title: Introduction
description: This guide will help you get your website up and running with our modern framework in short order.
toc: true
source: Webstop
menu:
  getstart:
    parent: Getting Started
    weight: 1
---

Webstop's front-end framework contains finely crafted HTML5, CSS3 & JavaScript designed to produce compelling web experiences for grocery retailer websites. Our framework takes advantage of modern tools to create mobile-first responsive websites.

This guide will help you get your website up and running with our modern framework in short order.

## Quick start

There are 3 parts needed to get Core-Styles 3 installed in a project.

1. **CSS**, this is usually accomplished by linking to the retailer's CSS file. This will include Bootstrap 5, Core-Styles 3 and the retailer's customizations.
2. **JavaScripts**, for this we include a series of javascript files, we hope to concatenate them into one file soon.
3. **Core-Icons**, for this we include a custom kit from Font Awesome.

**In the `<head>` include the following:**
 
**Important CSS Note:** _The value `2661` is unique to the retailer Shop'n Save, and should be replaced by the value of the retailer the website is used for. If you need a retailer-agnostic CSS file see the [advanced setup](#advanced-setup) directions below._

**Important Icon Note:** _The value `8bda546f76` is the unique Kit Key which represents the current build of core-icons, this will probably be a variable in your implementation and need to be replaced by the latest value._

```html
<link rel="stylesheet" href="https://s3.grocerywebsite.com/customizations_v2/retailer_2661/stylesheets/retailer_2661.css">
<script src="https://kit.fontawesome.com/{{ .Site.Params.icons_kit_key }}.js" crossorigin="anonymous"></script>
```
**At the End of the `<body>` tag, include the following:**

```html
<!-- External Libraries -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/src/js.cookie.min.js"></script>
<!-- Core-Styles jS Files -->
<!-- These three need to go first, in this order, and with these attributes. -->
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/config.js"></script>
<script src="/js/ahoy/ahoy.min.js" defer=""></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/aye.js" type="module"></script>
<!-- The rest of the files are simply listed in alphabetical order. -->
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/ajax-form.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/ajax-load.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/ajax-modal.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/bootstrap-data-attributes.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/btn-disabled.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/checkbox-selector.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/circular-cookies.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/filter-search.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/form-toggles.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/search.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/shopping-list-power-bar.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/v{{ .Site.Params.current_version }}/dist/core-styles/js/tags.js"></script>
```

First we include the 3rd party javascript libraries. Then we include our custom javascript files. 
Note the first three files must be in the order they are with the attributes they contain in the example above. 
The rest of the files can simply be included in alphabetical order.

