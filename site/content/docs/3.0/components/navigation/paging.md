---
layout: docs
title: Paging
description: A compact and flexible pagination solution.
group: components
toc: true
source: Webstop
menu: 
    components:
      tags: "pagination, paging, navigation, infinite scroll"
      parent: Components
---

## Basic Paging Example

{{< example >}}
<div class="paging btn-group" role="group" aria-label="Basic outlined example">
  <a href="#" class="paging-prev btn btn-outline-primary"><i class="fa-solid fa-angle-left"></i><span class="visually-hidden">Previous Page</span></a>
  <div class="paging-dropdown btn-group" role="group">
    <button type="button" class="paging-current-page btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="d-none d-sm-inline">Page 2 of 3</span>
      <span class="d-inline d-sm-none">Pg. 2</span>
    </button>
    <ul class="paging-dropdown-menu dropdown-menu">
      <li><a class="paging-menu-title dropdown-item" href="#"><strong class="paging-menu-title-text">Section Title</strong></a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 1 of 3</a></li>
      <li><a class="paging-page dropdown-item active" href="#">Page 2 of 3</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 3 of 3</a></li>
    </ul>
  </div>
  <a href="#" class="paging-next btn btn-outline-primary"><i class="fa-solid fa-angle-right"></i><span class="visually-hidden">Next Page</span></a>
</div>
{{< /example >}}

### CSS Classes

| Class                  | Validation | Description                                                                      |
|------------------------|------------|----------------------------------------------------------------------------------|
| `paging`               | Required   | Namespace for the paging component. Placed on the root element of the component. |
| `paging-prev`          | Required   | Placed on the button for navigation to the previous page.                        |
| `paging-next`          | Required   | Placed on the button for navigation to the next page.                            |
| `paging-dropdown`      | Required   | Placed on the root element of the dropdown menu.                                 | 
| `paging-current-page`  | Required   | Placed on button that acts as a dropdown trigger. It displays the current page.  | 
| `paging-dropdown-menu` | Required   | Placed on the list of dropdown items.                                            | 
| `paging-menu-title`    | Optional   | Used when a section heading is desired withing the dropdown menu.                |
| `paging-page`          | Required   | The individual page links in the dropdown menu.                                  |

## Paging vs. Pagination

Bootstrap already provides a <a href="https://getbootstrap.com/docs/5.3/components/pagination/" target="_blank">Pagination</a> 
feature, Paging is an alternative solution to navigating multiple pages of content. This alternative feature is called 
Paging instead of Pagination to avoid namespace collisions. By having this feature under the `paging` namespace it allows 
you to use either solution. 

### Side by Side Comparisons

The following examples use the Bootstrap `pagination` feature followed by the Core-Styles `paging` feature on the next line.
This should help illustrate the differences clearly.

### Small Dataset Comparison

With a small dataset there isn't much difference between the two solutions.

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#"><i class="fa-solid fa-angle-left"></i><span class="visually-hidden">Previous Page</span></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#"><i class="fa-solid fa-angle-right"></i><span class="visually-hidden">Next Page</span></a></li>
  </ul>
</nav>

<div class="paging btn-group" role="group" aria-label="Basic outlined example">
  <a href="#" class="paging-prev btn btn-outline-primary"><i class="fa-solid fa-angle-left"></i><span class="visually-hidden">Previous Page</span></a>
  <div class="paging-dropdown btn-group" role="group">
    <button type="button" class="paging-current-page btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="d-none d-sm-inline">Page 2 of 4</span>
      <span class="d-inline d-sm-none">Pg. 2</span>
    </button>
    <ul class="paging-dropdown-menu dropdown-menu">
      <li><a class="paging-page dropdown-item" href="#">Page 1 of 25</a></li>
      <li><a class="paging-page dropdown-item active" href="#">Page 2 of 4</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 3 of 4</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 4 of 4</a></li>
    </ul>
  </div>
  <a href="#" class="paging-next btn btn-outline-primary"><i class="fa-solid fa-angle-right"></i><span class="visually-hidden">Next Page</span></a>
</div>

### Large Dataset Comparison

With a larger dataset the differences become more apparent. With a large dataset the Paging feature occupies roughly the 
same amount of space in the page layout, but the Pagination feature requires exponentially more space as the number of 
pages increases. The impact of this becomes even more dramatic on mobile devices where screen width is limited. 

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#"><i class="fa-solid fa-angle-left"></i><span class="visually-hidden">Previous Page</span></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">7</a></li>
    <li class="page-item"><a class="page-link" href="#">8</a></li>
    <li class="page-item"><a class="page-link" href="#">9</a></li>
    <li class="page-item"><a class="page-link" href="#">10</a></li>
    <li class="page-item"><a class="page-link" href="#">11</a></li>
    <li class="page-item"><a class="page-link" href="#">12</a></li>
    <li class="page-item"><a class="page-link" href="#">13</a></li>
    <li class="page-item"><a class="page-link" href="#">14</a></li>
    <li class="page-item"><a class="page-link" href="#">15</a></li>
    <li class="page-item"><a class="page-link" href="#">16</a></li>
    <li class="page-item"><a class="page-link" href="#">17</a></li>
    <li class="page-item"><a class="page-link" href="#">18</a></li>
    <li class="page-item"><a class="page-link" href="#">19</a></li>
    <li class="page-item"><a class="page-link" href="#">20</a></li>
    <li class="page-item"><a class="page-link" href="#">21</a></li>
    <li class="page-item"><a class="page-link" href="#">22</a></li>
    <li class="page-item"><a class="page-link" href="#">23</a></li>
    <li class="page-item"><a class="page-link" href="#">24</a></li>
    <li class="page-item"><a class="page-link" href="#">25</a></li>
    <li class="page-item"><a class="page-link" href="#"><i class="fa-solid fa-angle-right"></i><span class="visually-hidden">Next Page</span></a></li>
  </ul>
</nav>

<div class="paging btn-group" role="group" aria-label="Basic outlined example">
  <a href="#" class="paging-prev btn btn-outline-primary"><i class="fa-solid fa-angle-left"></i><span class="visually-hidden">Previous Page</span></a>
  <div class="paging-dropdown btn-group" role="group">
    <button type="button" class="paging-current-page btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="d-none d-sm-inline">Page 2 of 25</span>
      <span class="d-inline d-sm-none">Pg. 2</span>
    </button>
    <ul class="paging-dropdown-menu dropdown-menu">
      <li><a class="paging-page dropdown-item" href="#">Page 1 of 25</a></li>
      <li><a class="paging-page dropdown-item active" href="#">Page 2 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 3 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 4 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 5 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 6 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 7 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 8 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 9 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 10 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 11 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 12 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 13 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 14 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 15 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 16 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 17 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 18 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 19 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 20 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 21 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 22 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 23 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 24 of 25</a></li>
      <li><a class="paging-page dropdown-item" href="#">Page 25 of 25</a></li>
    </ul>
  </div>
  <a href="#" class="paging-next btn btn-outline-primary"><i class="fa-solid fa-angle-right"></i><span class="visually-hidden">Next Page</span></a>
</div>

## Additional Benefits of Paging

In addition to the compact size, there are a number of other benefits to Paging over Pagination components.

### Enhanced Content

Anything you can place in a standard Bootstrap Dropdown Menu can be placed in a Paging Dropdown Menu. 

##### Including:

- Dividers
- Section Headings
- Notes
- Longer Text (e.g. categories instead of pages)
- Images
- Forms

### Infinite Scroll Support

The [Infinite Scroll](/docs/3.0/components/ajax/infinite-scroll/) feature is designed to interact with a `paging` element 
when it is present on the same page as infinite scroll content.

Infinite Scroll will set a URL in the `data-load-on-view` attribute. If this matches a URL of a `paging-page` element the 
`active` class will be added to that `paging-page` element. Also, it will use the `data-page-number` and `data-max-page-number` 
attributes to set the text in the `paging-current-page` element. It takes the format of `Page X of Y` for desktop 
breakpoints and `Pg. X` for mobile breakpoints. When a heading or other html element with a `paging-trigger` class 
enters the viewport, the parent element with the `data-load-on-view` attribute will become the current page. 

> ---
> 
> For more information on this functionality visit the documentation for the 
> [Infinite Scroll](/docs/3.0/components/ajax/infinite-scroll/) feature.
> 
> ---

