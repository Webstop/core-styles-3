---
layout: docs
title: Ajax Form
description: An easy way to submit form contents & load the response into a section of the page.
group: components
toc: true
source: Webstop
parent: components
menu:
  main:
   
---

  

## Examples

Here are a couple of use examples of the AJAX Form feature.

### Basic Example

This example contains the minimum attributes need. The form contains the `data-ajax-form` attribute 
which triggers the form to submit via ajax instead of a web page reload. The `action` attribute 
specifies the URL to pull the content from, the content is expected to be in HTML format. 

{{< example >}}
<form data-ajax-form action="{{ sinatra_host }}/alert_success">
  <div class="form-group">
    <label for="title-example" class="py-2">Title</label>
    <input type="text" class="form-control p-2" name="title-example" id="title-example" placeholder="Title">
  </div>
  <button class="btn btn-primary mt-3" type="submit">
    Save Title
  </button>
</form>

{{< /example >}}

### Example with All Options

In the following example we enable all of the optional attributes, including `data-target` and 
`data-power-bar`. By default the ajax will replace the form with the ajax content, in this example 
we select a different target using the `data-target` attribute, it accepts standard jQuery selectors. 
The `data-power-bar` attribute triggers a reload of the Shopping List Power Bar after the ajax content 
is returned.

{{< example >}}
<form data-ajax-form action="{{ sinatra_host }}/alert_error" data-target="#target-1" data-power-bar>
  <div class="form-group">
    <label for="title-example" class="py-2">Title</label>
    <input type="text" class="form-control p-2" name="title-example" id="title-example" placeholder="Title">
  </div>
  <button class="btn btn-primary mt-3" type="submit">
    Save Title
  </button>
</form>
<div id="target-1" class="mt-4">
  <div class="alert alert-success">Ajax Content goes here.</div>
</div>
{{< /example >}}

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
