---
layout: docs
title: Infinite Scroll
description: Load new pages of content as users scroll to the bottom of the page.
toc: true
source: Webstop
menu: 
  components:
      tags: "Ajax"
      parent: Components
---

This approach allows you to lazy load content on a page as the target elements enter 
the viewport.

## Examples

The capabilities discussed on this page consist of three main parts:

1. A Load on View (`loadOnView`) function which watches for when an HTML element enters the viewport and then populates the element with content fetched from the server.
2. A set of features the enable Infinite Scrolling. 
3. A set of features that allow pagination to match the content being viewed from the Infinite Scroll.

These pieces can be used independently of each other, but when combined together they produce a very nice user experience.

All of this is managed via a simple interface that uses HTML attributes to control and manage it. No need to write any additional JavaScript.

##### Preamble: Loading Spinner

In the following examples you'll see "`...loading spinner...`". This is placeholder text used to keep from distracting 
us from the important content. In your actual code, use the following whenever you see "`...loading spinner...`":

```html
<div class="d-flex justify-content-center m-4">
  <div class="d-block-inline">
    <div class="spinner-border" role="status"></div>
    <span class="h3 pb-2">Loading...</span>  
  </div>
</div>
```



### Load on View Example

In the most basic form of lazy loading content we have the Load on View feature. This feature allows you to load in 
HTML content via AJAX only when the HTML element enters the web browser's viewport.

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

### Basic Infinite Scroll Example

In the most basic form of lazy loading content we have the Load on View feature. This feature allows you to load in
HTML content via AJAX only when the HTML element enters the web browser's viewport.

```html
<div data-load-on-view="/ajax/ajax_page_1" data-infinite-scroll>
  ...loading spinner...
</div>
<div data-load-on-view="/ajax/ajax_page_2" data-infinite-scroll>
  ...loading spinner...
</div>
<div data-load-on-view="/ajax/ajax_page_3" data-infinite-scroll>
  ...loading spinner...
</div>
```

<a href="/docs/3.0/components/ajax/infinite-scroll-demos/basic-infinite-scroll-demo/" class="btn btn-outline-primary" target="_blank">
  Basic Infinite Scroll Demo
  <i class="fa-duotone fa-up-right-from-square ms-2"></i>
</a>

### Infinite Scroll with Paging Example

In the most basic form of lazy loading content we have the Load on View feature. This feature allows you to load in
HTML content via AJAX only when the HTML element enters the web browser's viewport.

```html
<div data-load-on-view="/ajax/ajax_page_1" data-infinite-scroll data-page-number="1" data-max-page-number="3">
  ...loading spinner...
</div>
<div data-load-on-view="/ajax/ajax_page_2" data-infinite-scroll data-page-number="2" data-max-page-number="3">
  ...loading spinner...
</div>
<div data-load-on-view="/ajax/ajax_page_3" data-infinite-scroll data-page-number="3" data-max-page-number="3">
  ...loading spinner...
</div>
```
<a href="/docs/3.0/components/ajax/infinite-scroll-demos/infinite-scroll-with-paging-demo/" class="btn btn-outline-primary" target="_blank">
  Infinite Scroll with Paging Demo
  <i class="fa-duotone fa-up-right-from-square ms-2"></i>
</a>



## Attributes


| Name                   | Validation        | Description                                                                                                          |
|------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------|
| `data-load-on-view`    | String, Required  | Place on the HTML element to load content into. Value is the URL path to fetch content from. Must return valid HTML. |
| `data-infinite-scroll` | Optional          | Required for Infinite Scroll support. If present infinite scroll will be enabled.                                    |
| `data-page-number`     | Integer, Optional | Required for Paging support. The page number this content represents.                                                |
| `data-max-page-number` | Integer, Optional | Required for Paging support. The maximum number of pages of content available.                                       |

<div class="alert alert-info" role="alert">
  This concludes the documentation for using Infinite Scroll in your projects. The documentation below is for developers who want to fix a bug or 
  add features to the JavaScript code.
</div>

## JavaScript Development

The following section is only for those who need to fix a bug or add a feature to the Javascript code. 

### JavaScriptMethod Interactions

The following chart describes how all the pieces fit together. After the chart we have a detailed description of each javascript method.

<a href="/assets/images/infinite-scroll/infinite_scrolling_flowchart.svg" target="_blank">
  <img src="/assets/images/infinite-scroll/infinite_scrolling_flowchart.svg" alt="" style="width: 100%;">
</a>


### JavaScript Methods


#### `load()` Function

Vanilla JS replacement for jQuery's `load` method with support for infinite scrolling, & paging.

Makes an AJAX request and replaces the contents of an HTML element with the results. Registers a new pagingObserver, and runs the enableNewLoadOnView function.

#### `enableNextLoadOnView()` Function

The setup: a series of HTML elements with `data-load-on-view` attributes. All but the first one is set to `display: none`. Each time we ajax in content for a `data-load-on-view` elemen t the next `data-load-on-view` element is switched to `display: block`. This allows an Intersection Observer to watch for the next element to enter the view port.

#### `updatePaging()` Function

Updates a standard `paging` display with the currently in view page. It updates the text in the menu item, and which item in the dropdown list is highlighted.

#### `pagingObserver` Object

An `IntersectionObserver` object designed to look for an element which should run the `updatePaging()` function when in view.

#### `loadOnView` Function

Registers an HTML element with an IntersectionObserver that monitors when the element enters the viewport.

When the element enters the viewport is will check if the element has been loaded previously, if not it will envoke the `load` function. It also updates the brower history to enable Google Analytics pageview tracking. It sets the `is-loaded` class on elements once they are loaded.


#### Data Attribute DSL

An IIFE (Immediately Invoked Function Expression) which initializes infinite scroll capabilities.

First, it looks for all HTML elements with a `data-load-on-view` attribute. It takes this list of elements and does two things with them:

1. It sets `display: block` on the first one it finds and `display: none` on the rest.
2. It registers them with the `loadOnView` function. Which sets an IntersectionObserver to watch for when the element enters the viewport.

Second, it looks for all HTML elements with a `paging-trigger` class and regsiters them with the `pagingObserver`. This is done allow content loaded directly on the page (say page 1) to also use the `pagingObserver`. Instead of just the content loaded via the `loadOnView` method.
