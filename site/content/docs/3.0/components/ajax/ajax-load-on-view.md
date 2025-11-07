---
layout: docs
title: Ajax Load on View
description: Ajax content automatically loads on page view.
toc: true
source: Webstop
menu: 
  components:
      tags: "Ajax"
      parent: Components
---

## Example

In the most basic form of lazy loading content we have the Load on View feature. This feature allows you to load in
HTML content via AJAX only when the HTML element enters the web browser's viewport.

{{< notices/ajax-warning >}}

```html
<div data-load-on-view="/ajax/ajax_page_1">
  ...loading spinner...
</div>
```
<a href="/docs/3.0/components/ajax/infinite-scroll-demos/load-on-view-demo/" class="btn btn-outline-primary mb-3" target="_blank">
  Load on View Demo
  <i class="fa-duotone fa-up-right-from-square ms-2"></i>
</a>

Here our JavaScript will set an observer on any HTML elements with a `data-load-on-view` attribute. The value of the
`data-load-on-view` attribute represents the URL to fetch content from.

When the observed element enters the browser's viewport, a fetch request will be made to retrieve the contents of the
element with the HTML response from the supplied URL.

## Attributes


### Base Attributes

| Name                | Validation       | Description                                                                                                           |
|---------------------|------------------|-----------------------------------------------------------------------------------------------------------------------|
| `data-load-on-view` | String, Required | Place on the HTML element to load content into. Value is the URL path to fetch content from. Must return valid HTML.  |
| `data-skip-history` | Optional         | Without this attribute the fetch will be treated as a new page view in the browser history (and in Google Analytics). |


### Infinite Scroll Attributes

| Name                   | Validation        | Description                                                                       |
|------------------------|-------------------|-----------------------------------------------------------------------------------|
| `data-infinite-scroll` | Optional          | Required for Infinite Scroll support. If present infinite scroll will be enabled. |
| `data-page-number`     | Integer, Optional | Required for Paging support. The page number this content represents.             |
| `data-max-page-number` | Integer, Optional | Required for Paging support. The maximum number of pages of content available.    |
