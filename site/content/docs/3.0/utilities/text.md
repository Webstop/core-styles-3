---
layout: docs
title: Text Color Utilities
description: Text colors for Webstop's products.
group: utilities
toc: true
source: Webstop
menu: 
  utilities:
    parent: Utilities
---

Bootstrap has a set of [text color classes](https://getbootstrap.com/docs/5.3/utilities/colors/), we add to those base classes by 
adding clases for colors of Webstop Products.

## Examples

### Product Text Colors

These classes set the text color of the element they are applied to.

{{< example >}}
<div class="row mx-1">
  <div class="text-circular col p-3">Circular</div>
  <div class="text-coupon col p-3">Coupon</div>
  <div class="text-recipe col p-3">Recipe</div>
  <div class="text-shopping-list col p-3">Shopping List</div>
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
