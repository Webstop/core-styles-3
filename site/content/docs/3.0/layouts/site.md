---
layout: docs
title: Site Structure
description: The basic template for laying out a site's structure.
group: layout
toc: true
menu: 
  layout:
    parent: Layouts
---

## Basic Example

The `site` class resides on the root element of a website. It should sit inside the body of  

{{< example >}}

<div class="site site-fluid">
  <div class="site-row row">
    <div class="site-main-col col">
      <header class="site-header" role="banner">
        Site Header...
      </header>
      <main class="site-content" role="main">
        Site Main Content...
      </main>
      <footer class="site-footer" role="contentinfo">
        Site Footer...
        <div class="site-debug-toggle" aria-hidden="true">🐞</div>
      </footer>
      <div class="site-debug" aria-hidden="true">
        <h4 class="site-debug-title">🐞 Website Debug Code</h4>
        <p>
          Please ignore this section. This section is for the website developers to help
          them debug problems &amp; check the current status of web pages. This was opened
          by clicking or tapping the debug (🐞) icon in the lower right of the page. You can
          close this debug section by clicking the icon again.
        </p>
        Site Debug Code...
      </div>
    </div>
    <aside class="site-aside col-auto" id="site-aside">
      <div class="site-aside-slider" id="site-aside-slider">
        Shopping List...
      </div>
    </aside>
  </div>

  <div class="site-modal modal fade" id="site-modal" tabindex="-1" role="dialog" aria-labelledby="site-modal-title" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="site-modal-content modal-content">
        <div class="modal-header">
          <h4 class="site-modal-title modal-title" id="site-modal-title"></h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="site-modal-body modal-body" id="site-modal-body"></div>
        <div class="site-modal-footer modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


</div>
{{< /example>}}



## Options



We can customize our site by adding a subclass to our site object. 


<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Options</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="text-nowrap">.site-fluid</code></td>
      <td>For a responsive website utilizing 100% of the brower’s width. Use this in place of Bootstrap's `container-fluid` class.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">.site-fixed</code></td>
      <td>For a website constrained to a maximum 1024 pixels wide. Use this in place of Bootstrap's `container` class.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">.site-content-only</code></td>
      <td>Hides the header, footer, and site navigation. Useful for hosting the site in an iframe or for AJAX requests.</td>
    </tr>
    <tr>
      <td><code class="text-nowrap">.site-debug-on</code></td>
      <td>This shows the debug section of our template (below the footer). Useful for fixing bugs.</td>
    </tr>
  </tbody>
</table>




### Options Examples

Here we find examples of each of our options. Notice they are applied to the same root element as the 
`site` class. 

{{< example >}}
<div class="site site-fluid">
  <div class="site-header">
    Site Header...
  </div>
  <div class="site-navigation">
    Site Navigation...
  </div>
  <div class="site-content">
    Site Main Content...
  </div>
  <div class="site-footer">
    Site Footer...
  </div>
  <div class="site-debug">
    Site Debug Code...
  </div>
</div>

<hr>

<div class="site site-fixed">
  <div class="site-header">
    Site Header...
  </div>
  <div class="site-navigation">
    Site Navigation...
  </div>
  <div class="site-content">
    Site Main Content...
  </div>
  <div class="site-footer">
    Site Footer...
  </div>
  <div class="site-debug">
    Site Debug Code...
  </div>
</div>

<hr>

<div class="site site-fluid site-content-only">
  <div class="site-header">
    Site Header...
  </div>
  <div class="site-navigation">
    Site Navigation...
  </div>
  <div class="site-content">
    Site Main Content...
  </div>
  <div class="site-footer">
    Site Footer...
  </div>
  <div class="site-debug">
    Site Debug Code...
  </div>
</div>

<hr>

<div class="site site-fluid site-debug-on">
  <div class="site-header">
    Site Header...
  </div>
  <div class="site-navigation">
    Site Navigation...
  </div>
  <div class="site-content">
    Site Main Content...
  </div>
  <div class="site-footer">
    Site Footer...
  </div>
  <div class="site-debug">
    Site Debug Code...
  </div>
</div>
{{< /example >}}
