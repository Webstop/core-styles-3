---
layout: docs
title: Ajax Load Now
description: An easy way automatically load HTML content into a section of a page.
toc: true
source: Webstop
menu: 
  components:
      tags: "Ajax"
      parent: Components
---

This feature will automatically trigger an ajax call (actually fetch) to load html on to a section of a web page.

## Example

Here are a couple of common uses of the AJAX Load feature.

### Basic Example

To use the Ajax Load feature place a `data-load-now` attribute on an HTML element (e.g. link or button). The `data-load-now` 
attribute specifies the URL to pull the content from, it is expected to be in HTML format. The HTML is placed inside the 
element the attribute resides in.


{{< example >}}

<div data-load-now="/ajax/alert_success">
  loading...
</div>

{{< /example >}}

## Attributes

| Attribute       | Description                                                                                                                                                                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-load-now` | The presence of this attribute indicates clicking on this element should trigger an AJAX load. The value specifies the URL of the content you want AJAX'd. The AJAX request should return HTML content to display inside the target element. |



