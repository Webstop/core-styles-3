---
layout: docs
title: Admin Layout
description: Website layout for administration pages.
toc: true
source: Webstop
menu: 
  layout:
    parent: Layouts
---

> Prior to Core-Styles v3 administration pages were served in a separate framework called Admin-Styles. We soon realized 
we wanted access to all the things in core-styles from admin pages, and that the thing we found most valuable from 
Admin-Styles was the page layout features. Now the page layout features of Admin-Styles are included as part of Core-Styles.

## Stylesheets & Javascripts

It's important to note that we use different CSS and JS files for admin layouts than we do for public facing layouts.
The code on this page is for admin layouts only, see the [public layouts page](/docs/3.0/layouts/public/) for information 
on public layouts.

### The following belongs in the `<head>` tag of the admin layouts.

This first example is how we apply these to the a Ruby on Rails ERB file. The `CS3_VERSION` and `CS3_ICONS_KIT_KEY` constants 
defined in the `config/initializers/cs3.rb` file. The `CDN_HOST` constant is defined as and environment variable (`.env` file).

#### Ruby on Rails `<head>` Example

If you are using the [Styler Gem](https://github.com/Webstop/styler) this will be found in the 
`app/views/layouts/admin_cs3/_styles.html.erb` file.

```html
<head>
  <link href="<%= ENV['CDN_HOST'] %>/core-repos/core-styles-3/<%= CS3_VERSION %>/dist/css/webstop-admin.css" rel="stylesheet">
  <script src="https://kit.fontawesome.com/<%= CS3_ICONS_KIT_KEY %>.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</head>
```

#### Raw HTML `<head>` Example

Note: _The values for the CS3 version, the Font Awesome kit number, and the CDN Host will likely differ in your application._

```html
<head>
  <link href="https://s3.grocerywebsite.com/core-repos/core-styles-3/{{< version >}}/dist/css/webstop-admin.css" rel="stylesheet">
  <script src="https://kit.fontawesome.com/8bda546f76.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
</head>
```

### The following belongs near the end of the `<body>` tag of admin layouts.

This first example is how we apply these to the a Ruby on Rails ERB file. The `CS3_VERSION` constant is defined in the 
`config/initializers/cs3.rb` file. The `CDN_HOST` constant is defined as and environment variable (`.env` file).

#### Ruby on Rails `<body>` Example

If you are using the [Styler Gem](https://github.com/Webstop/styler) this will be found in the
`app/views/layouts/admin_cs3/_scripts.html.erb` file.

```html
<body>
  
  ...
  
  <%# 3rd party JS libs %>
  <script src="https://code.jquery.com/jquery-<%= CS3_JQUERY_VERSION %>.min.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@<%= CS3_POPPER_VERSION %>/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@<%= CS3_BOOTSTRAP_VERSION %>/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-ujs@<%= CS3_JQUERY_UJS_VERSION %>/src/rails.min.js"></script>
  <%# Core Styles 3 JS %>
  <script src="<%= ENV['CDN_HOST'] %>/core-repos/core-styles-3/<%= CS3_VERSION %>/dist/js/core-styles-admin<%= '.min' if Rails.env.production? -%>.js"></script>
</body>
```

#### Raw HTML `<body>` Example

Note: _The values for the CS3 version and the CDN Host will likely differ in your application. Same with the version of 
the 3rd party libs._

```html
<body>
  
  ...

  <script src="https://code.jquery.com/jquery-3.7.1.min.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-ujs@1.2.3/src/rails.min.js"></script>
  <script src="https://s3.grocerywebsite.com/core-repos/core-styles-3/{{< version >}}/dist/js/core-styles-admin.min.js"></script>
</body>
```

## Default Example

This example shows the default set of options used by Webstop’s products and is installed via the Styler gem.

> <h4 class="mt-0">Site Modal</h4>
> 
> To help keep the concepts easier to understand, we've left out the Site Modal code from the following HTML examples. 
> See the [Site Modal](#site-modal) section at the end of the page for more information.


### Sidebar Example


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
    <a href="/docs/3.0/layouts/examples/admin_with_sidebar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidebar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="admin admin-with-sidebar">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <aside class="admin-sidebar">
    Admin Sidebar...
  </aside>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
</div>
```


## Ruby On Rails Support

Most of the time we don't talk about any back-end technology in our front-end framework. With the admin layout 
system we have built out a unique system to control page layout, so we are going to explain it here.

### Admin Layout Template

At the heart of the layout system is the `admin_v3` layout template. To use it place `layout 'admin_v3'` 
near the top of your controller. This is typically done right after any actions are called, like the `before_action`. 
This one template handles all admin page layouts.

### The `@page` Map

In the application controller we define a map called `@page`. The `@page` variable contains boolean settings which control the 
page layout. These settings are explained in the chart below.

The `@page` hash is set at the top of a view file to control how that view will be presented in the admin layout template.

<!-- DEFAULTS
      sidecar: false,
      sidebar: true,
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
      <td><code class="text-nowrap">true</code></td>
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

[//]: # (    <tr>)

[//]: # (      <td><code class="text-nowrap">data_tables</code></td>)

[//]: # (      <td><code class="text-nowrap">false</code></td>)

[//]: # (      <td>)

[//]: # (        Enables special tweaks to support the use of DataTables.js in the main content area. Especially makes )

[//]: # (        scrolling work properly.)

[//]: # (      </td>)

[//]: # (    </tr>)

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

The admin system is designed to accommodate the following common layout types.

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


## Site Modal

The Site Modal is an empty hidden modal available for use by features such as [AJAX Modal](/docs/3.0/components/ajax/ajax-modal/), 
and other features that rely on having a modal available. The modal is identified by the id attribute with a value of `site-modal`. 
The Site Modal is also available in the [Public Layout](/docs/3.0/layouts/public/).

```html
<div class="admin">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
  <div class="site-modal modal fade" id="site-modal" tabindex="-1" role="dialog" aria-labelledby="site-modal-title" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="site-modal-content modal-content">
        <div class="modal-header">
          <div class="row mx-0 w-100">
            <div class="col ps-0">
              <h4 class="site-modal-title modal-title" id="site-modal-title"></h4>
            </div>
            <div class="col-auto pe-0">
              <button type="button" class="btn btn-light" data-bs-dismiss="modal" aria-label="Close">
                <i class="fak fa-cancel"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="site-modal-body modal-body" id="site-modal-body"></div>
        <div class="site-modal-footer modal-footer" id="site-modal-footer">
          <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Alternate Examples

The following examples are part of the public layout system, but not used by Webstop’s standard products.

### Base Admin Example

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
    <a href="/docs/3.0/layouts/examples/admin_base" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Base Admin Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>


```html
<div class="admin">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
</div>
```

### Sidecar Example

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
    <a href="/docs/3.0/layouts/examples/admin_with_sidecar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidecar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="admin admin-with-sidecar">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <nav class="admin-sidecar" role="navigation">
      Admin Sidecar Navigation...
  </nav>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
</div>
```

### Sidenav Example

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
    <a href="/docs/3.0/layouts/examples/admin_with_sidenav" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidenav Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="admin admin-with-sidenav">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <nav class="admin-sidenav" role="navigation">
      Admin Sidenav Navigation...
  </nav>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
</div>
```

### Sidecar and Sidenav Example

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
    <a href="/docs/3.0/layouts/examples/admin_with_sidecar_and_sidenav" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidecar &amp; Sidenav Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="admin admin-with-sidenav">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <nav class="admin-sidecar" role="navigation">
      Admin Sidecar Navigation...
  </nav>
  <nav class="admin-sidenav" role="navigation">
      Admin Sidenav Navigation...
  </nav>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
</div>
```


### Sidecar and Sidebar Example

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
    <a href="/docs/3.0/layouts/examples/admin_with_sidecar_and_sidebar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidecar & Sidebar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="admin admin-with-sidecar admin-with-sidebar">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <nav class="admin-sidecar" role="navigation">
      Admin Sidecar Navigation...
  </nav>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <aside class="admin-sidebar">
    Admin Sidebar...
  </aside>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
</div>
```

### Sidenav and Sidebar Example

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
    <a href="/docs/3.0/layouts/examples/admin_with_sidenav_and_sidebar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidenav & Sidebar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="admin admin-with-sidenav admin-with-sidebar">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <nav class="admin-sidenav" role="navigation">
      Admin Sidenav Navigation...
  </nav>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <aside class="admin-sidebar">
    Admin Sidebar...
  </aside>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
</div>
```

### Sidecar, Sidenav, and Sidebar Example

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
    <a href="/docs/3.0/layouts/examples/admin_with_sidecar_and_sidenav_and_sidebar" class="btn btn-outline-primary wsg-btn-outline-primary">
      View Sidecar, Sidenav & Sidebar Example Page <i class="fas fa-angle-right"></i>
    </a>
  </div>
</div>

```html
<div class="admin admin-with-sidecar admin-with-sidebar">
  <header class="admin-header" role="banner">
    Admin Header...
  </header>
  <nav class="admin-sidecar" role="navigation">
      Admin Sidecar Navigation...
  </nav>
  <nav class="admin-sidenav" role="navigation">
    Admin Sidenav Navigation...
  </nav>
  <main class="admin-page" role="main">
    Admin Page Main Content...
  </main>
  <aside class="admin-sidebar">
    Admin Sidebar...
  </aside>
  <footer class="admin-footer" role="contentinfo">
    Admin Footer...
  </footer>
</div>
```

