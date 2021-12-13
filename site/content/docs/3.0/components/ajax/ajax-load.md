---
layout: docs
title: Ajax Load
description: An easy way to load HTML content into a section of the page.
toc: true
source: Webstop
menu: 
  ajax:
    parent: Ajax
---



## Examples

Here are a couple of common uses of the AJAX Load feature.

### Basic Example

To use the Ajax Load feature place a `data-ajax` attribute on an HTML element (e.g. link or button). The `data-load` 
attribute specifies the URL to pull the content from, it is expected to be in HTML format. You specify where to place 
the AJAX content with the `data-target` attribute, it accepts standard jQuery selectors.


{{< example >}}
<button data-ajax-load data-target="#ajax-target-1" data-load="/ajax/alert_success" class="btn btn-primary mb-2">
  Load Content
</button>

<div id="ajax-target-1">
  <div class="alert alert-info">
    This box could be replaced by AJAX content, if only someone would click the button above.
  </div>
</div>
{{< /example >}}

### Replacement Example

In the following example we replace the button that triggers the request with the content returned by the AJAX call.

{{< example >}}
<div id="ajax-target-replace">
  <button data-ajax-load data-target="#ajax-target-replace" data-load="/ajax/alert_success" class="btn btn-primary">
    Replace Me with AJAX Content!
  </button>
</div>
{{< /example >}}

## Attributes

The following attributes are required.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">data-ajax-load</code></td>
      <td>The presence of this attribute indicates clicking on this element should trigger an AJAX load.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-load</code></td>
      <td>
        Attribute specifies the URL of the content you want AJAX'd. The AJAX request should return 
        HTML content to display inside the target element. 
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-target</code></td>
      <td>
        The DOM node to load the content into. Uses standard jQuery selectors, usually targets an id attribute 
        (e.g. <code class="text-nowrap">#some-target</code>).
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-power-bar</code></td>
      <td>
        When present, completing the ajax call triggers a reload of the Shopping List Power Bar.
      </td>
    </tr>
  </tbody>
</table>


