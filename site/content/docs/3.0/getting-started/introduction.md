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

Important Note: _The value `2661` is unique to the retailer Shop'n Save, and should be replaced by the value of the retailer the website is used for. If you need a retailer-agnostic CSS file see the [advanced setup](#advanced-setup) directions below._

```html
<link rel="stylesheet" href="https://s3.grocerywebsite.com/customizations_v2/retailer_2661/stylesheets/retailer_2661.css">
```

**At the End of the `<body>` tag, include the following:**

{{ range .Site.Data.font_awesome_config }}
{{ if .kit_key }}Kit_key: {{ .kit_key }}{{ end }}
{{ end }}

```html
{{ range .Site.Data.font_awesome_config }}
{{ if .kit_key }}<script src="https://kit.fontawesome.com/{{ .kit_key }}.js" crossorigin="anonymous"></script>{{ end }}
{{ end }}
<script src="/js/core-styles/circular-cookies.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.1/dist/umd/popper.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script src="/js/core-styles/tags.js" defer=""></script>
<script src="/js/core-styles/ajax-form.js"></script>
<script src="/js/core-styles/ajax-load.js"></script>
<script src="/js/core-styles/bootstrap-data-attributes.js"></script>
<script src="/js/core-styles/checkbox-selector.js"></script>
<script src="/js/core-styles/shopping-list-power-bar.js"></script>
<script src="/js/core-styles/filter-search.js"></script>
<script src="/js/core-styles/form-toggles.js"></script>
<script src="/js/core-styles/search.js"></script>
```

_it currently looks like..._

```html
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/config.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/ahoy/ahoy.min.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/aye.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/ahoy/ahoy.min.js" defer=""></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/aye.js" type="module"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/ajax-form.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/ajax-load.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/ajax-modal.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/bootstrap-data-attributes.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/checkbox-selector.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/circular-cookies.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/form-toggles.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/shopping-list-power-bar.js"></script>
<script src="https://s3.grocerywebsite.com/core-repos/core-styles/v3.0.0/dist/js/core-styles/tags.js"></script>
```


To install the WSG use one of the following methods.

### Ruby Gem Installation

`command to install`

### Node Module Installation

`command to install`

### Bower Component Installation

`command to install`
