---
layout: docs
title: Toast Markdown Editor
description: Use the browser's built in geolocation features.
group: components
toc: true
source: Webstop
menu: 
    Components:
      tags: "text editor, markdown"
      parent: editor
---

Built for features like a store locator,
the locate functionality uses the web browser's geolocation capabilities to get your latitude and longitude, and use it
to find nearby stores.

## Examples

The base `data-locate` attribute defines the locate button. 

### Basic Example


{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
<button type="submit" class="btn btn-primary">Submit Form</button>
</form>
{{< /example >}}


#### Attributes

The following attributes are used by locate to enable rich functionality. These are placed on the button containing the `data-locate` attribute.

| Attribute              | Description                                                                                                                                                     |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-markdown-editor` | The attribute `data-locate` being present on the element makes it a clickable button.                                                                           |
| `data-editor-toolbar`  | The attribute `data-locate-target` identifies the HTML element to place the search results inside.                                                              |
| `rows`                 | The attribute `data-locate-message` identifies the HTML element to place the status messages inside.                                                            |
| `data-editor-height`   | The attribute `data-locate-on-load` tells the code to try geolocation on page load without waiting for a button click.                                          |
| `data-locate-hide-me`  | The attribute `data-locate-hide-me` identifies the HTML elements to hide while the search results are being displayed, and reveal when the search is cancelled. |


toast.js = 539 kb
toast.css = 165 kb
