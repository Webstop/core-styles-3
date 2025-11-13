---
layout: docs
title: Background Utilities
description: Backgrounds colors for Webstop's products.
group: utilities
toc: true
source: Webstop
menu: 
  utilities:
    parent: Utilities
---

Bootstrap has a set of [background color classes](https://getbootstrap.com/docs/5.3/utilities/background/) &amp;
[Text & Background](https://getbootstrap.com/docs/5.3/helpers/color-background/), we add to those base classes by 
adding clases for colors of Webstop Products.

## Examples

### Product Backgrounds

These classes set the background color of the element they are applied to.

{{< example >}}
<div class="row mx-1">
  <div class="bg-circular col p-3">Circular</div>
  <div class="bg-coupon col p-3">Coupon</div>
  <div class="bg-recipe col p-3">Recipe</div>
  <div class="bg-shopping-list col p-3">Shopping List</div>
</div>
{{< /example >}}

### Product Backgrounds with Text

These classes set the background color of the element _and_ set the text color to a readable contrast.

{{< example >}}
<div class="row mx-1">
  <div class="text-bg-circular col p-3">Circular</div>
  <div class="text-bg-coupon col p-3">Coupon</div>
  <div class="text-bg-recipe col p-3">Recipe</div>
  <div class="text-bg-shopping-list col p-3">Shopping List</div>
</div>
{{< /example >}}

## Product Sass Variables

The following Sass variables manage the colors for Webstop products and can be overridden in the core-customizations for 
each retailer.

| Variable         | Default Value |
|------------------|---------------|
| `$circular`      | `$red`        |
| `$coupon`        | `$blue`       |
| `$recipe`        | `$green`      |
| `$shopping-list` | `$purple`     |
