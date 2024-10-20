---
layout: docs
title: Locate
description: Use the browser's built in geolocation features.
group: components
toc: true
source: Webstop
menu: 
    components:
      tags: "Locations, geolocation"
      parent: Components
---

Built for features like a store locator,
the locate functionality uses the web browser's geolocation capabilities to get your latitude and longitude, and use it
to find nearby stores.

## Examples

The base `data-locate` attribute defines the locate button. 

### Basic Example


{{< example >}}
<button data-locate data-locate-target="#store-search-results" data-locate-message="#locate-message" data-locate-hide-me data-locate-return-url="https://example.com" class="btn btn-outline-primary">
  <i class="fa-solid fa-location-arrow me-1"></i> Use My Location
</button>
<span id="locate-message"></span>
<div id="store-search-results"></div>
{{< /example >}}


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

