---
layout: docs
title: Standard Digital Coupon
description: Individual standard digital coupons.
group: coupons
toc: true
source: Webstop
menu: 
  products:
    tags: "Coupons"
    parent: Coupons
---

## Examples

The basic coupon item enhances the value of our digital circular content. 

Tower format digital coupon item with a variable size thumbnail image.

{{< example >}}
{{< coupons/coupon-item-standard-example >}}
{{< /example >}}

The optional `col` class allows circular items align nicely in a flex box grid. 
Circular items which rest inside a `row` class and contain a `col` class will 
nicely divide up the available space in a row to provide a nice group presentation.

If a circular item is going to stand alone on a page or section of a page, the `col` 
class is unnecessary. 

### Grid of Coupons 

<div class="row row-cols-2 row-cols-md-3 g-4">
  <div class="col card-flipper-container">
    {{< coupons/coupon-item-standard-example-2 >}}
  </div>
  <div class="col card-flipper-container">
    {{< coupons/coupon-item-standard-example-alt >}}
  </div>
  <div class="col card-flipper-container">
    {{< coupons/coupon-item-standard-example-2 >}}
  </div>
</div>


### Grid of Coupon Circular Items

This layout is achieved by giving the circular items a `col` class within the context 
of a `row`.

<div class="wsg-example">
  <div class="row">
    {{< circular/circular-item-standard-coupon-example >}}
    {{< coupons/coupon-item-standard-example-2 >}}
    {{< coupons/coupon-item-standard-example >}}
    {{< coupons/coupon-item-standard-example >}}
    {{< coupons/coupon-item-standard-example >}}
    {{< coupons/coupon-item-standard-example >}}
  </div>
</div>

---

### Mixed Items Example

<div class="wsg-example">
  <div class="row">
    {{< coupons/coupon-item-standard-example >}}
    {{< coupons/coupon-item-standard-example >}}
    {{< coupons/coupon-item-standard-example >}}
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
