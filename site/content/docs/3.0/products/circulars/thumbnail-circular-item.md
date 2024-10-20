---
layout: docs
title: Thumbnail (Classic) Circular Item
description: The classic individual sale item inside the digital circular.
group: circulars
toc: true
source: Webstop
menu: 
  products:
    tags: "Circulars"
    parent: Circulars
---

<div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">Deprecation Warning!</h4>
  <p>
    The thumbnail layout is being superseeded by the Standard Circular Item. 
    We will continue to support this format while retailers transition to 
    larger graphics. 
  </p>
</div>

## Examples

The basic circular item is the basis for our digital circular content. 

The original digital circular ad item. With a `85px` x `83px` image.

{{< example >}}
{{< circular/circular-item-thumbnail-example >}}
{{< /example >}}

#### Grid of Thumbnail Circular Items

<div class="wsg-example">
  <div class="row">
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
  </div>
</div>

---

### Mixed Items Example

<div class="wsg-example">
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
