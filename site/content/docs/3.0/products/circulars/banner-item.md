---
layout: docs
title: Banner Circular Item
description: Full-page width promotional image inside the digital circular.
group: grocery
toc: true
source: Webstop
menu: 
  products:
    tags: "Circulars"
    parent: Circulars
---

- Banners can be any height and should be 2k to 4k wide. 
- Small text should be avoided or mobile devices won't be able to read it. 
- Banners create new sections within a circular page.

## Examples

Full-Page banners can be used to draw a lot of attention to a promotion. Another popular us is to  
create beautiful section heading.

### Full-Page Banner Image Circular Item 

{{< example >}}
{{< circular/circular-item-banner-example >}}
{{< /example >}}


The way the banner item handles living in a grid is different from how other circular items handle it. 
The banner item sits inside a table column, but the other circular items **are** the table column. The 
banner item also differs in that it uses the `col-12` class to span the full width of the page, while 
most circular items simply use the `col` class to take up a flexible division of available space.

## Responsive Design Considerations

It's important to realizes these images will be shrinking down to about `320px` for some mobile 
devices, but might be `2000px` wide on a desktop computer. Text that is quite readable on a wide 
desktop display will often shrink to be completely unreadable on a mobile device. There are two 
basic approaches for handling text at various responsive sizes.

1. Keep the text big and don't have a lot of text.
2. Create different images for different responsive sizes.



## Mixed Items Example

Here you can see how the banner creates new section headings within a group of circular items.

<div class="wsg-example">
  <div class="row">
    {{< circular/circular-item-banner-example >}}
    {{< circular/circular-item-standard-promotion-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-standard-example >}}
    {{< circular/circular-item-banner-example >}}
    {{< circular/circular-item-standard-promotion-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-thumbnail-example >}}
    {{< circular/circular-item-standard-promotion-example >}}
  </div>
</div>
