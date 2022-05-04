---
layout: docs
title: CRUD Icons
description: Create, Read, Update, and Delete Icons for UI elements.
group: components
toc: true
source: Webstop
menu:
  icons:
    parent: Icons
---

These icons are CRUDdy, or is it cruddy?

## Example

{{< example >}}
<i class="fak fa-add-circle"></i>
{{< /example >}}

<div class="text-end">
  <button class="btn btn-primary">
    <i class="fak fa-add-circle me-1"></i> New Record
  </button>
</div>

<table class="table mt-3">
<thead>
  <tr>
    <th>Title</th>
    <th class="text-end">Actions</th>
  </tr>
</thead>
<tbody>
<!--
  <tr>
    <td>Lorem ipsum dolor sit amet</td>
    <td class="text-end">
      <a href="#" class="btn btn-outline-primary wsg-btn-outline-primary ms-3">
        <i class="fa-solid fa-circle-chevron-right me-1"></i> Show
      </a>
      <a href="#" class="btn btn-outline-primary wsg-btn-outline-primary ms-3">
        <i class="fa-solid fa-edit me-1"></i> Edit
      </a>
      <a href="#" class="btn btn-outline-primary wsg-btn-outline-primary ms-3">
        <i class="fak fa-delete-circle me-1"></i> Delete
      </a>
    </td>
  </tr>
 <tr>
    <td>Consectetur adipisicing elit</td>
    <td class="text-end">
      <div class="btn-group" role="group" aria-label="Record Actions">
        <a href="#" class="btn btn-outline-primary wsg-btn-outline-primary">
          <i class="fa-solid fa-circle-chevron-right"></i> Show
        </a>
        <a href="#" class="btn btn-outline-primary wsg-btn-outline-primary">
          <i class="fa-solid fa-edit"></i> Edit
        </a>
        <a href="#" class="btn btn-outline-primary wsg-btn-outline-primary">
          <i class="fak fa-delete-circle"></i> Delete
        </a>
      </div>
    </td>
  </tr>
-->


  <tr>
    <td>Sed do eiusmod tempor incididunt</td>
    <td class="text-end">
      <a href="#" class="text-decoration-none">
        <i class="fa-solid fa-circle-chevron-right"></i> Show
      </a>
      <a href="#" class="ms-3 text-decoration-none">
        <i class="fa-solid fa-edit"></i> Edit
      </a>
      <a href="#" class="ms-3 text-decoration-none">
        <i class="fak fa-delete-circle"></i> Delete
      </a>
    </td>
  </tr>

</tbody>
</table>



## Preferred CRUD Icons

The following icons are approved by our design team for general usage. More icons 
can be found at [Font Awesome v6](https://fontawesome.com/v6.0/icons). You have 
all the Font Awesome v6 icons available, but the use of some of them is discouraged.

<div class="mb-4">
  <input type="text" class="form-control" data-filter-search data-filter-selector=".wsg-icon" placeholder="Search Icons">
</div>

{{< icons CRUD >}} 

## Alternative CRUD Icons

{{< icons CRUD-alt >}} 
