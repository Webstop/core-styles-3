---
layout: docs
title: Icon Utilities
description: Common styling for icons components.
group: utilities
toc: true
source: Webstop
menu: 
  utilities:
    parent: Utilities
---


Utilities for icons


## Examples

### Icon Sizes Example

We have 4 font sizing classes for use with icons. The `fs-lg-icon` class is our most frequently used, you'll commonly 
find it in card grids for things like index pages.

<style>
.icon-size-example-sizer .example{
  min-height: 192px;
}
</style>

<div class="row icon-size-example-sizer">
  <div class="col text-center">
    <h4>fs-md-icon</h4>
    {{< example >}}
      <i class="fa-duotone fa-user-magnifying-glass fs-md-icon"></i>
    {{< /example >}}
  </div>
  <div class="col text-center">
    <h4>fs-lg-icon</h4>
    {{< example >}}
      <i class="fa-duotone fa-user-magnifying-glass fs-lg-icon"></i>
    {{< /example >}}
  </div>
  <div class="col text-center">
    <h4>fs-xl-icon</h4>
    {{< example >}}
      <i class="fa-duotone fa-user-magnifying-glass fs-xl-icon"></i>
    {{< /example >}}
  </div>
  <div class="col text-center">
    <h4>fs-xxl-icon</h4>
    {{< example >}}
      <i class="fa-duotone fa-user-magnifying-glass fs-xxl-icon"></i>
    {{< /example >}}
  </div>
</div>


### Large Icon on Card Grid Example

The following is a common design patter on admin pages where we have a grid of cards and icons using the `fs-lg-icon` class.

{{< example >}}
<div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
  <div class="col">
    <div class="card readable shadow h-100">
      <div class="card-body text-center">
        <div class="fs-lg-icon"><i class="fa-duotone fa-user-magnifying-glass"></i></div>        <h4 class="card-title">Search Consumers</h4>
        <p>Search and manage consumer accounts for E&amp;H Ace Hardware.</p>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary btn-lg d-block" href="/admin/retailers/3278/consumers/search">
          <i class="fa-duotone fa-user-magnifying-glass"></i> Search Consumers
        </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card readable shadow h-100">
      <div class="card-body text-center">
        <div class="fs-lg-icon"><i class="fa-duotone fa-user-plus"></i></div>
        <h4 class="card-title">Add Consumers</h4>
        <p>Create new consumer accounts for E&amp;H Ace Hardware.</p>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary btn-lg d-block" href="/admin/retailers/3278/consumers/new">
          <i class="fa-duotone fa-user-plus"></i> Add Consumers
        </a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card readable shadow h-100">
      <div class="card-body text-center">
        <div class="fs-lg-icon"><i class="fa-duotone fa-solid fa-user-gear"></i></div>
        <h4 class="card-title">Consumer Fields</h4>
        <p>Manage custom fields for E&amp;H Ace Hardware consumer accounts.</p>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary btn-lg d-block" href="/admin/retailers/3278/consumer_field_assignments">
          <i class="fa-duotone fa-solid fa-user-gear"></i> Consumer Fields
        </a>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

