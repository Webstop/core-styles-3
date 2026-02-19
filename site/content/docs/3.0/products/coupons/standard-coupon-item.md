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
<div class="row">
  <div class="col card-standard-col">
    {{< coupons/coupon-item-standard-dove-example >}}
  </div>
</div>
{{< /example >}}

The optional `col` class allows circular items align nicely in a flex box grid. 
Circular items which rest inside a `row` class and contain a `col` class will 
nicely divide up the available space in a row to provide a nice group presentation.

If a circular item is going to stand alone on a page or section of a page, the `col` 
class is unnecessary. 

### Grid of Coupons 

Here we demonstrate a grid of coupons. 

<div class="wsg-example example shadow-none">
  <div class="row justify-content-center gy-4 mb-4">
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
  </div>
</div>

### Grid Mixed Height of Coupons

Here we demonstrate a grid of coupons. You can see the heights of the coupons will match the tallest offer in the grid row.

<div class="wsg-example example shadow-none">
  <div class="row justify-content-center gy-4 mb-4">
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-pepsi-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-pepsi-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-pepsi-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-pepsi-example >}}
    </div>
    <div class="col card-standard-col">
      {{< coupons/coupon-item-standard-dove-example >}}
    </div>
  </div>
</div>

### Grid of Coupon Circular Items

This layout is achieved by giving the circular items a `col` class within the context 
of a `row`.

<div class="wsg-example example shadow-none">
  <div class="row justify-content-center gy-4 mb-4">
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
  </div>
</div>

---

### Mixed Items Example


<div class="wsg-example example shadow-none">
  <div class="row justify-content-center g-4 mb-4">
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
    <div class="col card-standard-col">{{< circular/circular-item-standard-example >}}</div>
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
    <div class="col card-standard-col">{{< circular/circular-item-standard-example >}}</div>
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
    <div class="col card-standard-col">{{< circular/circular-item-standard-example >}}</div>
    <div class="col card-standard-col">{{< circular/circular-item-standard-promotion-example >}}</div>
    <div class="col card-standard-col">{{< circular/circular-item-standard-example >}}</div>
    <div class="col card-standard-col">{{< coupons/coupon-item-standard-dove-example >}}</div>
  </div>
</div>
