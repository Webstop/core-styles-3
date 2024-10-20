---
layout: docs
title: Digital Coupon Circular Item
description: Individual digital coupons inside the digital circular.
group: circulars
toc: true
source: Webstop
menu: 
  products:
    tags: "Circulars"
    parent: Circulars
---

## Examples

The basic coupon item enhances the value of our digital circular content. 

Tower format digital coupon item with a variable size thumbnail image.

{{< example >}}
{{< circular/circular-item-coupon-example >}}
{{< /example >}}

The optional `col` class allows circular items align nicely in a flex box grid. 
Circular items which rest inside a `row` class and contain a `col` class will 
nicely divide up the available space in a row to provide a nice group presentation.

If a circular item is going to stand alone on a page or section of a page, the `col` 
class is unnecessary. 

### Grid of Coupon Circular Items

This layout is achieved by giving the circular items a `col` class within the context 
of a `row`.

<div class="wsg-example">
  <div class="row">
    {{< circular/circular-item-coupon-example >}}
    {{< circular/circular-item-coupon-example >}} 
    {{< circular/circular-item-coupon-example >}}       
    {{< circular/circular-item-coupon-example >}}
    {{< circular/circular-item-coupon-example >}} 
    {{< circular/circular-item-coupon-example >}}  
  </div>
</div>

---

### Mixed Items Example

<div class="wsg-example">
  <div class="row">
    {{< circular/circular-item-coupon-example >}}       
    {{< circular/circular-item-coupon-example >}}
    {{< circular/circular-item-coupon-example >}} 
    {{< circular/circular-item-coupon-example >}}  
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
