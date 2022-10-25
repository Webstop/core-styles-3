---
layout: docs
title: Standard Circular Item
description: Individual sale items inside the digital circular.
group: grocery
toc: true
source: Webstop
menu: 
  Grocery:
      tags: "Circulars"
      parent: Grocery
---

## Examples

The basic circular item is the basis for our digital circular content. 

### Standard Item Example

Tower format digital circular item with a 1k 16:9 image.

{{< example >}}
{{< circular/circular-item-standard-example >}}
{{< /example >}}

The optional `col` class allows circular items align nicely in a flex box grid. 
Circular items which rest inside a `row` class and contain a `col` class will 
nicely divide up the available space in a row to provide a nice group presentation.

If a circular item is going to stand alone on a page or section of a page, the `col` 
class is unnecessary. 

### Price Pinned Bottom Example

Standard circular item with the price pinned to the bottom. 

{{< example >}}
{{< circular/circular-item-standard-price-bottom-example >}}
{{< /example >}}

### Price Pinned Top Example

Standard circular item with the price pinned to the top.

{{< example >}}
{{< circular/circular-item-standard-price-top-example >}}
{{< /example >}}

### Grid of Standard Circular Items

This layout is achieved by giving the circular items a `col` class within the context 
of a `row`.

<div class="bd-example">
  <div class="row">
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
  </div>
</div>

### Grid of Price Bottom Standard Circular Items

Demonstrates the alignment of prices on the bottom of circular items in a group.

<div class="bd-example">
  {{< circular/circular-item-standard-price-bottom-examples >}}
</div>

### Grid of Price Top Standard Circular Items

Demonstrates the alignment of prices on the bottom of circular items in a group.

<div class="bd-example">
  {{< circular/circular-item-standard-price-top-examples >}}
</div>

---

### Mixed Items Example

<div class="bd-example">
  <div class="row">
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-promotion-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
  </div>
</div>
