---
layout: docs
title: Ajax Form
description: An easy way to submit form contents & load the response into a section of the page.
toc: true
source: Webstop
menu: 
  Components:
      tags: "Ajax"
      parent: Components
---
 

## Examples

Here are a couple of use examples of the AJAX Form feature.

### Basic Example

This example contains the minimum attributes need. The form contains the `data-ajax-form` attribute 
which triggers the form to submit via ajax instead of a web page reload. The `action` attribute 
specifies the URL to pull the content from, the content is expected to be in HTML format. 

{{< example >}}
<form data-ajax-form action="/ajax/alert_success">
  <div class="form-group">
    <label for="title-example" class="py-2">Title</label>
    <input type="text" class="form-control p-2" name="title-example" id="title-example" placeholder="Title">
  </div>
  <button class="btn btn-primary  mt-3" type="submit">
    Save Title
  </button>
</form>

{{< /example >}}

### On Complete Example

This examples show the use of the On Complete functionality to load additional content after the initial ajax request 
completes. We use the attribute `data-on-complete-load` to define the URL to load after the form completes and the 
`data-on-complete-target` attribute to identify the DOM node to load the on complete content. This is useful for things 
like a shopping list loading into a sidebar.

{{< example >}}
<form data-ajax-form action="/ajax/alert_success" data-on-complete-load="/ajax/alert_success" data-on-complete-target="#on-complete-target-1">
  <div class="form-group">
    <label for="title-example" class="py-2">Title</label>
    <input type="text" class="form-control p-2" name="title-example" id="title-example" placeholder="Title">
  </div>
  <button class="btn btn-primary  my-3" type="submit">
    Save Title
  </button>
</form>

<div id="on-complete-target-1">On Complete Target</div>

{{< /example >}}

### Example with All Options

In the following example we enable all of the optional attributes, including `data-target` and 
`data-power-bar`. By default the ajax will replace the form with the ajax content, in this example 
we select a different target using the `data-target` attribute, it accepts standard jQuery selectors. 
The `data-power-bar` attribute triggers a reload of the Shopping List Power Bar after the ajax content 
is returned.

{{< example >}}
<form data-ajax-form action="/ajax/alert_error" data-target="#target-1" data-power-bar  data-on-complete-load="/ajax/alert_success" data-on-complete-target="#on-complete-target-2">
  <div class="form-group">
    <label for="title-example" class="py-2">Title</label>
    <input type="text" class="form-control p-2" name="title-example" id="title-example" placeholder="Title">
  </div>
  <button class="btn btn-primary  mt-3" type="submit">
    Save Title
  </button>
</form>
<div id="target-1" class="my-4">
  <div class="alert alert-success">Ajax Content goes here.</div>
</div>
<div id="on-complete-target-2">On Complete Target</div>
{{< /example >}}

### Repeating Example

This example returns a result which contains another `data-ajax-form` form. This is useful for error responses or other 
instances where you want to results to contain another Ajax Form. This example takes you through 3 forms that are all 
brought onto the page via Ajax until finally arriving at the final success message.

{{< example >}}
<form data-ajax-form action="/ajax/ajax_form">
  <div class="form-group">
    <label for="title-example" class="py-2">Title for Ajax Form 0 of 3</label>
    <input type="text" class="form-control p-2" name="title-example" id="title-example" placeholder="Title">
  </div>
  <button class="btn btn-primary  mt-3" type="submit">
    Save Title
  </button>
</form>
{{< /example >}}

## Attributes

The `data-ajax-form` & `action` attributes are required. The rest are optional.

<table class="table table-bordered">
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
    <tr>
      <td><code class="text-nowrap">data-on-complete-load</code></td>
      <td>
        When present, completing the ajax call triggers a second ajax call to the url specified in this attribute. 
       The results are to be HTML and will be loaded into the elements defined in the 
       <code class="text-nowrap">data-on-complete-target</code> attribute.
      </td>
    </tr>
    <tr>
      <td><code class="text-nowrap">data-on-complete-target</code></td>
      <td>
        The DOM node to load the on complete content into. Uses standard query selectors, usually targets an id attribute 
        (e.g. <code class="text-nowrap">#some-target</code>). Only used when the 
        <code class="text-nowrap">data-on-complete-load</code> attribute is present.
      </td>
    </tr>
  </tbody>
</table>
