---
layout: docs
title: Legacy Digital Coupon
description: Individual Digital Coupons.
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
{{< coupons/coupon-item-legacy-example >}}
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
  <div class="row row-cols-2 row-cols-md-3 g-4">
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
  </div>
</div>

---

### Mixed Items Example

<div class="wsg-example">
  <div class="row row-cols-2 row-cols-md-3 g-4">
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< coupons/coupon-item-legacy-example >}}</div>
    <div class="col">{{< circular/circular-item-standard-example >}}</div>
    <div class="col">{{< circular/circular-item-standard-example >}}</div>
    <div class="col">{{< circular/circular-item-standard-example >}}</div>
    <div class="col">{{< circular/circular-item-standard-example >}}</div>
    <div class="col">{{< circular/circular-item-standard-promotion-example >}}</div>
    <div class="col">{{< circular/circular-item-thumbnail-example >}}</div>
    <div class="col">{{< circular/circular-item-thumbnail-example >}}</div>
    <div class="col">{{< circular/circular-item-thumbnail-example >}}</div>
    <div class="col">{{< circular/circular-item-thumbnail-example >}}</div>
  </div>
</div>


<script>
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(e) {
    const trigger = e.target.closest('.flip-card-trigger');
    
    if (trigger) {
      e.stopPropagation();
      const card = trigger.closest('.flip-card');
      
      if (card) {
        card.classList.toggle('flipped');
      }
    }
  });
});
</script>

<style>
.flip-card-container {
  perspective: 1000px;
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}

.flip-card.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translate3d(0,0,0);
}

.flip-card-back {
  transform: rotateY(180deg);
}

.flip-card-scrollable {
  overflow-y: auto;
  -webkit-overflow-scrolling: auto;
  transform: translateZ(0);
}
</style>
