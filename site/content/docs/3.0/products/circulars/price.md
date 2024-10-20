---
layout: docs
title: Price
description: A unit for laying out prices and associated data.
group: circulars
toc: true
source: Webstop
menu: 
  products:
    tags: "Circulars"
    parent: Circulars
---

## Examples

{{< example >}}
{{< prices/price-dollar-example >}}
    <hr>
{{< prices/price-cent-example >}}
    <hr>   
{{< prices/price-overlay-example >}}

{{< /example >}}


### Price in Dollars Example

This example shows a price in dollars. Use the `price-big-dollars` sub-class to 
give a larger emphasis to the dollar portion of the price.

{{< example >}}
{{< prices/price-dollar-example >}}
{{< /example >}}

### Price in Cents Example

This example shows a price in cents. Use the `price-big-cents` sub-class to 
give a larger emphasis to the cents portion of the price.

{{< example >}}
{{< prices/price-cent-example >}}
{{< /example >}}

### Price Overlay Example

In this example we want to overlay the price with text, but still give it special treatment.

{{< example >}}
{{< prices/price-overlay-example >}}
{{< /example >}}
