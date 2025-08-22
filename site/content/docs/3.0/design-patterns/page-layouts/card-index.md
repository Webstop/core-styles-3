---
layout: docs
title: Card Index
description: An index style page using a grid of cards to direct the user to subordinate pages.
group: design-patterns
toc: true
source: Webstop
menu:
  design-patterns:
    tags: "card, index"
    parent: Page Layouts
---

A page layout that uses a grid of card to 

## Examples

The base `data-store-picker` attribute defines the store picker.

### Basic Example

The consumer selects a store in a modal and the selection updates a hidden form input element in the form.

{{< example >}}
<input type="hidden" name="store-id" id="store-id" >
<div class="input-group mb-3">
  <div class="form-control" id="store-address" aria-label="Selected Store Address" aria-describedby="store-button">
  Select a Preferred Store...
  </div>
  <button class="btn btn-outline-primary input-group-addon" id="store-button" type="button"
    data-store-form-picker
    data-store-picker-input="#store-id"
    data-store-picker-address="#store-address"
    data-bs-toggle="modal" 
    data-bs-target="#site-modal" 
    data-load="/ajax/store_locator" 
    data-title="Select a Preferred Store"
  >Select a Store</button>
</div>
{{< /example >}}

### Selection States Example

The following shows how the component looks before and after a store selection has been made. The example above is 
fully functional and you can use it to try this effect.

#### Before Store Selection

Before the store is selected we see a prompt to select a store.

<div class="input-group mb-3">
  <div class="form-control" id="store-address-2" aria-label="Selected Store Address" aria-describedby="store-button-2">
    Please select a store.
  </div>
  <button class="btn btn-outline-primary input-group-addon" id="store-button-2" type="button"
    data-store-picker 
    data-store-picker-input="#store-id-2"
    data-store-picker-address="#store-address-2"
  >Select a Store</button>
</div>

#### After Store Selection

After a store is collected we see the location name and store address.

<div class="input-group mb-3">
  <div class="form-control" id="store-address-3" aria-label="Selected Store Address" aria-describedby="store-button-3">
  <strong>Eastlake Woodlands Plaza</strong><br>
  3488 East Lake Rd.<br>
  Palm Harbor, FL 34685
  </div>
  <button class="btn btn-outline-primary input-group-addon" id="store-button-3" type="button"
    data-store-picker 
    data-store-picker-input="#store-id-3"
    data-store-picker-address="#store-address-3"
  >Select a Store</button>
</div>

## Attributes

The following attributes are used by the Form Store Picker to enable rich functionality. These are placed on the button containing the `data-store-picker` attribute.

| Attribute                   | Description                                                                                                                                                         |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-store-picker`         | The attribute `data-store-picker` being present on the Select a Store button element makes it a clickable Store Picker.                                             |
| `data-store-picker-input`   | The attribute `data-store-picker-input` identifies the HTML input form element to place the selected store id. Accepts standard [query selectors][query-selectors]. |
| `data-store-picker-address` | The attribute `data-store-picker-address` identifies the HTML element to place the selected store's address. Accepts standard [query selectors][query-selectors].   |

[query-selectors]: https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors



