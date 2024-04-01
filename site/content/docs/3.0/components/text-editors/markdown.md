---
layout: docs
title: Markdown Editor
description: Interface for the Milkdown text editor, producing clean usable Markdown.
group: components
toc: true
source: Webstop
menu: 
    Components:
      tags: "Markdown, text-editor"
      parent: Components
---

Built for features like a store locator,
the locate functionality uses the web browser's geolocation capabilities to get your latitude and longitude, and use it
to find nearby stores.

## Examples

The base `data-locate` attribute defines the locate button. 

### Basic Example


{{< example >}}
<label for="markdown-example" class="form-label">Text Editor Example</label>
<textarea data-markdown-editor class="form-control" rows="5"></textarea>
{{< /example >}}

<div  id="markdown-example" ></div>

<script src="/js/milkdown.js" type="module"></script>


#### Attributes

The following attributes are used by locate to enable rich functionality. These are placed on the button containing the `data-locate` attribute.

| Attribute                  | Description                                                                                                                                                     |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-locate`              | The attribute `data-locate` being present on the element makes it a clickable button.                                                                           |
| `data-locate-target`       | The attribute `data-locate-target` identifies the HTML element to place the search results inside.                                                              |
| `data-locate-message`      | The attribute `data-locate-message` identifies the HTML element to place the status messages inside.                                                            |
| `data-locate-on-load`      | The attribute `data-locate-on-load` tells the code to try geolocation on page load without waiting for a button click.                                          |
| `data-locate-hide-me`      | The attribute `data-locate-hide-me` identifies the HTML elements to hide while the search results are being displayed, and reveal when the search is cancelled. |
| `data-locate-redirect-url` | The `data-locate-redirect-url` attribute identifies the URL to use for the final destination. For example, return to the circular after using a store locator.  |

