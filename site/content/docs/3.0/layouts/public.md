---
layout: docs
title: Public Layout
description: Website layout for consumer facing pages.
toc: true
source: Webstop
menu: 
  layout:
    parent: Layouts
---

> Prior to Core-Styles v3 publicistration pages were served in a separate framework called Public-Styles. We soon realized 
we wanted access to all the things in core-styles from public pages, and that the thing we found most valuable from 
Public-Styles was the page layout features. Now the page layout features of Public-Styles are included as part of Core-Styles.

## Base Public Example

This example contains a header, footer, and main content sections.

<div class="row">
  <div class="col-auto">
    <table style="width: 250px;"> 
      <tr>
        <td style="background-color: #369; height: 15px;"></td>
      </tr>
      <tr>
        <td style="background-color: #ccc; height: 120px;"></td>
      </tr>
      <tr>
        <td style="background-color: #ddd; height: 5px;"></td>
      </tr>
    </table>
  </div>
  <div class="col">
    <a href="/docs/3.0/layouts/examples/public_base" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Base Public Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>


```html
<div class="public">
  <header class="public-header" role="banner">
    Public Header...
  </header>
  <main class="public-page" role="main">
    Public Page Main Content...
  </main>
  <footer class="public-footer" role="contentinfo">
    Public Footer...
  </footer>
</div>
```

## Sidecar Example

<div class="row">
  <div class="col-auto">
    <table style="width: 250px;"> 
      <tr>
        <td colspan="2" style="background-color: #369; height: 15px;"></td>
      </tr>
      <tr>
        <td style="background-color: #336; width: 15px;" rowspan="2"></td>
        <td style="background-color: #ccc; height: 120px;"></td>
      </tr>
      <tr>
        <td style="background-color: #ddd; height: 5px;"></td>
      </tr>
    </table>
  </div>
  <div class="col">
    <a href="/docs/3.0/layouts/examples/public_with_sidecar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidecar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="public public-with-sidecar">
  <header class="public-header" role="banner">
    Public Header...
  </header>
  <nav class="public-sidecar" role="navigation">
      Public Sidecar Navigation...
  </nav>
  <main class="public-page" role="main">
    Public Page Main Content...
  </main>
  <footer class="public-footer" role="contentinfo">
    Public Footer...
  </footer>
</div>
```

## Sidenav Example

<div class="row">
  <div class="col-auto">
    <table style="width: 250px;"> 
      <tr>
        <td colspan="2" style="background-color: #369; height: 15px;"></td>
      </tr>
      <tr>
        <td style="background-color: #eee; width: 60px;" rowspan="2"></td>
        <td style="background-color: #ccc; height: 120px;"></td>
      </tr>
      <tr>
        <td style="background-color: #ddd; height: 5px;"></td>
      </tr>
    </table>
  </div>
  <div class="col">
    <a href="/docs/3.0/layouts/examples/public_with_sidenav" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidenav Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="public public-with-sidenav">
  <header class="public-header" role="banner">
    Public Header...
  </header>
  <nav class="public-sidenav" role="navigation">
      Public Sidenav Navigation...
  </nav>
  <main class="public-page" role="main">
    Public Page Main Content...
  </main>
  <footer class="public-footer" role="contentinfo">
    Public Footer...
  </footer>
</div>
```

## Sidecar and Sidenav Example

<div class="row">
  <div class="col-auto">
    <table style="width: 250px;"> 
      <tr>
        <td colspan="3" style="background-color: #369; height: 15px;"></td>
      </tr>
      <tr>
        <td style="background-color: #336; width: 15px;" rowspan="2"></td>
        <td style="background-color: #eee; width: 60px;" rowspan="2"></td>
        <td style="background-color: #ccc; height: 120px;"></td>
      </tr>
      <tr>
        <td style="background-color: #ddd; height: 5px;"></td>
      </tr>
    </table>
  </div>
  <div class="col">
    <a href="/docs/3.0/layouts/examples/public_with_sidecar_and_sidenav" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidecar &amp; Sidenav Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="public public-with-sidenav">
  <header class="public-header" role="banner">
    Public Header...
  </header>
  <nav class="public-sidecar" role="navigation">
      Public Sidecar Navigation...
  </nav>
  <nav class="public-sidenav" role="navigation">
      Public Sidenav Navigation...
  </nav>
  <main class="public-page" role="main">
    Public Page Main Content...
  </main>
  <footer class="public-footer" role="contentinfo">
    Public Footer...
  </footer>
</div>
```

## Sidebar Example


<div class="row">
  <div class="col-auto">
    <table style="width: 250px;"> 
      <tr>
        <td colspan="2" style="background-color: #369; height: 15px;"></td>
      </tr>
      <tr>
        <td style="background-color: #ccc; height: 120px;"></td>
        <td style="background-color: #eee; width: 60px;" rowspan="2"></td>
      </tr>
      <tr>
        <td style="background-color: #ddd; height: 5px;"></td>
      </tr>
    </table>
  </div>
  <div class="col">
    <a href="/docs/3.0/layouts/examples/public_with_sidebar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidebar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="public public-with-sidebar">
  <header class="public-header" role="banner">
    Public Header...
  </header>
  <main class="public-page" role="main">
    Public Page Main Content...
  </main>
  <aside class="public-sidebar">
    Public Sidebar...
  </aside>
  <footer class="public-footer" role="contentinfo">
    Public Footer...
  </footer>
</div>
```


## Sidecar and Sidebar Example

<div class="row">
  <div class="col-auto">
    <table style="width: 250px;"> 
      <tr>
        <td colspan="3" style="background-color: #369; height: 15px;"></td>
      </tr>
      <tr>
        <td style="background-color: #336; width: 15px;" rowspan="2"></td>
        <td style="background-color: #ccc; height: 120px;"></td>
        <td style="background-color: #eee; width: 60px;" rowspan="2"></td>
      </tr>
      <tr>
        <td style="background-color: #ddd; height: 5px;"></td>
      </tr>
    </table>
  </div>
  <div class="col">
    <a href="/docs/3.0/layouts/examples/public_with_sidecar_and_sidebar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidecar & Sidebar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="public public-with-sidecar public-with-sidebar">
  <header class="public-header" role="banner">
    Public Header...
  </header>
  <nav class="public-sidecar" role="navigation">
      Public Sidecar Navigation...
  </nav>
  <main class="public-page" role="main">
    Public Page Main Content...
  </main>
  <aside class="public-sidebar">
    Public Sidebar...
  </aside>
  <footer class="public-footer" role="contentinfo">
    Public Footer...
  </footer>
</div>
```

## Sidenav and Sidebar Example

<div class="row">
  <div class="col-auto">
    <table style="width: 250px;"> 
      <tr>
        <td colspan="3" style="background-color: #369; height: 15px;"></td>
      </tr>
      <tr>
        <td style="background-color: #eee; width: 60px;" rowspan="2"></td>
        <td style="background-color: #ccc; height: 120px;"></td>
        <td style="background-color: #eee; width: 60px;" rowspan="2"></td>
      </tr>
      <tr>
        <td style="background-color: #ddd; height: 5px;"></td>
      </tr>
    </table>
  </div>
  <div class="col">
    <a href="/docs/3.0/layouts/examples/public_with_sidenav_and_sidebar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidenav & Sidebar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="public public-with-sidenav public-with-sidebar">
  <header class="public-header" role="banner">
    Public Header...
  </header>
  <nav class="public-sidenav" role="navigation">
      Public Sidenav Navigation...
  </nav>
  <main class="public-page" role="main">
    Public Page Main Content...
  </main>
  <aside class="public-sidebar">
    Public Sidebar...
  </aside>
  <footer class="public-footer" role="contentinfo">
    Public Footer...
  </footer>
</div>
```

## Sidecar, Sidenav, and Sidebar Example

<div class="row">
  <div class="col-auto">
    <table style="width: 250px;"> 
      <tr>
        <td colspan="4" style="background-color: #369; height: 15px;"></td>
      </tr>
      <tr>
        <td style="background-color: #336; width: 15px;" rowspan="2"></td>
        <td style="background-color: #eee; width: 60px;" rowspan="2"></td>
        <td style="background-color: #ccc; height: 120px;"></td>
        <td style="background-color: #eee; width: 60px;" rowspan="2"></td>
      </tr>
      <tr>
        <td style="background-color: #ddd; height: 5px;"></td>
      </tr>
    </table>
  </div>
  <div class="col">
    <a href="/docs/3.0/layouts/examples/public_with_sidecar_and_sidenav_and_sidebar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidecar, Sidenav & Sidebar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="public public-with-sidecar public-with-sidebar">
  <header class="public-header" role="banner">
    Public Header...
  </header>
  <nav class="public-sidecar" role="navigation">
      Public Sidecar Navigation...
  </nav>
  <nav class="public-sidenav" role="navigation">
    Public Sidenav Navigation...
  </nav>
  <main class="public-page" role="main">
    Public Page Main Content...
  </main>
  <aside class="public-sidebar">
    Public Sidebar...
  </aside>
  <footer class="public-footer" role="contentinfo">
    Public Footer...
  </footer>
</div>
```


## Ruby On Rails Support

Most of the time we don't talk about any back-end technology in our front-end framework. With the public layout 
system we have built out a unique system to control page layout, so we are going to explain it here.

### Public Layout Template

At the heart of the layout system is the `public_v3` layout template. To use it place `layout 'public_v3'` 
near the top of your controller. This is typically done right after any actions are called, like the `before_action`. 
This one template handles all public page layouts.

### The `@page` Map

In the application controller we define a map called `@page`. The `@page` variable contains boolean settings which control the 
page layout. These settings are explained in the chart below.

The `@page` hash is set at the top of a view file to control how that view will be presented in the public layout template.

<!-- DEFAULTS
      sidecar: false,
      sidebar: false,
      header: true,
      footer: true,
      flush: false,
      tables: false,
      data_tables: false
-->

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Key Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">sidecar</code></td>
      <td><code class="text-nowrap">false</code></td>
      <td>Controls display the sidecar left side navigation. <em>This feature isn't fully implemented yet.</em></td>
    </tr>
    <tr>
      <td><code class="text-nowrap">sidebar</code></td>
      <td><code class="text-nowrap">false</code></td>
      <td>
        Controls display the sidebar right side navigation. Expects content to be placed into the <code>sidebar</code> 
        yield. e.g. <code>content_for :sidebar, raw(render 'sidebar')</code>
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">header</code></td>
      <td><code class="text-nowrap">true</code></td>
      <td>Page header, which sits right below the header navbar. <em>This feature is deprecated.</em></td>
    </tr>
    <tr>
      <td><code class="text-nowrap">footer</code></td>
      <td><code class="text-nowrap">true</code></td>
      <td>
        Controls display the footer. Expects content to be placed into the <code>footer</code> 
        yield, and will typically contain breadcrumb navigation.
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">flush</code></td>
      <td><code class="text-nowrap">false</code></td>
      <td>Removes padding from the main content area. Usually used for tables to allow them to fill the content area.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">tables</code></td>
      <td><code class="text-nowrap">false</code></td>
      <td>Primes the system to expect the main content section to be filled with a scrollable table.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data_tables</code></td>
      <td><code class="text-nowrap">false</code></td>
      <td>
        Enables special tweaks to support the use of DataTables.js in the main content area. Especially makes 
        scrolling work properly.
      </td>
    </tr>

  </tbody>
</table>

### Edit Page Example

<img src="/assets/images/layout/layout_edit_tracker.png" class="img-fluid" alt="Edit Page">


```html
<%
  @page[:header]  = false
  @page[:sidebar] = true
  
  content_for :sidebar, raw(render 'sidebar')
  content_for :footer, breadcrumbs(
    [
      {title: Tracker.model_name.human.pluralize.titleize, path: retailer_trackers_path(@retailer)},
      {title: :edit, path: edit_retailer_tracker_path(@retailer, @tracker)}
    ]
  )
%>
<div class="card card-readable card-centered card-shadowed">
<div class="card-body">
  <h1 class="card-title">Editing Tracker</h1>
    <%= render 'form', tracker: @tracker %>
  </div>
</div>
```


## Design Patterns

The public system is designed to accommodate the following common layout types.

### Data Tables Index Page

<img src="/assets/images/layout/layout_data_tables_index_page.png" class="img-fluid" alt="Index Page Using Data Tables">

```ruby
@page[:tables]  = true
@page[:flush]   = true
@page[:sidebar] = true
```

### New Resource Form Page

<img src="/assets/images/layout/layout_new_from_page.png" class="img-fluid" alt="New Resource Form Page">

```ruby
@page[:header]  = false
@page[:sidebar] = true
```

### Show Resource Page

<img src="/assets/images/layout/layout_show_page.png" class="img-fluid" alt="Show Resource Page">

```ruby
@page[:header]  = false
@page[:sidebar] = true
```

## Attributes

The `data-ajax-form` & `action` attributes are required. The rest are optional.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">data-ajax-form</code></td>
      <td>The presence of this attribute indicates submitting on this form should trigger an AJAX load.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">action</code></td>
      <td>
        Attribute specifies the URL of the content you want AJAX'd. The AJAX request should return 
        HTML content to display inside the target element. 
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-target</code></td>
      <td>
        The DOM node to load the content into. Uses standard jQuery selectors, usually targets an id attribute 
        (e.g. <code class="text-nowrap">#some-target</code>). Optional, if the <code class="text-nowrap">data-target</code> attribute isn't 
        present the content will replace the ajax form.
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-power-bar</code></td>
      <td>
        When present, completing the ajax call triggers a reload of the Shopping List Power Bar.
      </td>
    </tr>
  </tbody>
</table>
