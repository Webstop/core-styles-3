---
layout: docs
title: Toolbar
description: Navigation, settings, and controls for page features.
group: components
toc: true
source: Webstop
menu:
  main:
---

## Examples

The toolbar holds the primary controls and navigation for page content.

The base `toolbar` class defines the toolbar unit. Inside the toolbar we group items using the `toolbar-group` class.
The `toolbar-group` class provides consistent position and margins between toolbar elements. 

### Basic Toolbar Example

<div class="toolbar-detached">

{{< example >}}
<nav class="toolbar">
  <div class="toolbar-group btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-light">Left</button>
    <button type="button" class="btn btn-light">Middle</button>
    <button type="button" class="btn btn-light">Right</button>
  </div>

  <div class="toolbar-group">
    <button type="button" class="btn btn-light">Alone</button>
  </div>
  <div class="toolbar-group">
    <div class="dropdown">
      <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>

  <div class="toolbar-group btn-group" role="group" aria-label="Basic example">
    <div class="dropdown btn-group" role="group">
      <button class="btn btn-light dropdown-toggle" type="button" id="dropdownLeftMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Left
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownLeftMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="dropdown btn-group" role="group">
      <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMiddleMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Middle
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMiddleMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div class="dropdown btn-group" role="group">
      <button class="btn btn-light dropdown-toggle" type="button" id="dropdownRightMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Right
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownRightMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>

  <div class="toolbar-group ml-auto">
    <div class="toolbar-text-item"><strong>Shopping List</strong> <i class="icon-shopping-list"></i></div>
  </div>

</nav>
{{< /example >}}
</div>

### Form Toolbar Example

Inline forms can be placed inside a toolbar.

<div class="toolbar-detached">

{{< example >}}
<nav class="toolbar">
<div class="toolbar-group" role="group" aria-label="Basic example">
    <form class="form-inline">
     <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input type="text" class="form-control mr-2" id="inlineFormInputName2" placeholder="Jane Doe">
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <div class="input-group mr-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
      </div>
    </form>
  </div>
  <div class="toolbar-group" role="group" aria-label="Basic example">
    <form class="form-inline">
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input type="text" class="form-control mr-2" id="inlineFormInputName2" placeholder="Jane Doe">
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <div class="input-group mr-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
      </div>
      <div class="form-check mr-2">
        <input class="form-check-input" type="checkbox" id="inlineFormCheck">
        <label class="form-check-label" for="inlineFormCheck">
          Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</nav>

{{< /example >}}
</div>

### Toolbar Horizontal Alignment Example

Use any of the [Horizontal Alignment classes](/docs/bootstrap/4.1/layout/grid#horizontal-alignment) from the Bootstrap Grid to 
adjust the alignment of your toolbar groups. 

<div class="toolbar-detached">

{{< example >}}
<nav class="toolbar">
  <div class="toolbar-group btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-light">Left</button>
    <button type="button" class="btn btn-light">Middle</button>
    <button type="button" class="btn btn-light">Right</button>
  </div>
  <div class="toolbar-group" role="group" aria-label="Basic example">
    <form class="form-inline">
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <div class="input-group mr-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
      </div>
    </form>
  </div>
</nav>

<br>

<nav class="toolbar justify-content-between">
  <div class="toolbar-group btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-light">Left</button>
    <button type="button" class="btn btn-light">Middle</button>
    <button type="button" class="btn btn-light">Right</button>
  </div>
  <div class="toolbar-group" role="group" aria-label="Basic example">
    <form class="form-inline">
      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <div class="input-group mr-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
      </div>
    </form>
  </div>
</nav>

{{< /example >}}
</div>
