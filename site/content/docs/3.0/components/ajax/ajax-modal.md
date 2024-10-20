---
layout: docs
title: Ajax Modal
description: A modal available site-wide for AJAX content.
toc: true
source: Webstop
menu: 
  components:
      tags: "Ajax"
      parent: Components
---

This feature allows to to create a button or link that opens a modal and loads HTML content into the modal from a remote URL. 

> <h4 class="mt-0">Site Modal</h4>
> 
> This feature relies on hidden modal with the id `site-model` which is included on every CS3 page. The code is found on both the [Public](/docs/3.0/layouts/public/) and [Admin](/docs/3.0/layouts/admin/) layouts.

## Example

When you set the `data-bs-target` of a modal trigger to `#site-modal`, then you are indicating you want to use the site wide 
modal, which enables remote content loading via AJAX. The `data-load` attribute specifies the URL to pull the body 
content from, it is expected to be in HTML format. You should also include the `data-title` to set the text for the title of the modal.

{{< example >}}
<button data-bs-toggle="modal" data-bs-target="#site-modal" data-load="/ajax/alert_success" data-title="New Shopping List" data-footer="hide" class="btn btn-primary ">
  New Shopping List
</button>
{{< /example >}}

## Attributes

The Site Modal inherits all the abilities of a standard modal, and is extended with the following options.

| Attribute        | Validation | Description                                                                                                                                                |
|------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-bs-toggle` | Required   | Set to `modal` to enable the modal to trigger when the element is clicked on.                                                                              |
| `data-bs-target` | Required   | Set to `#site-modal` to use the modal included on all CS3 pages.                                                                                           |
| `data-title`     | Required   | The value of this attribute will be used as the text in the title of the modal.                                                                            |
| `data-load`      | Required   | Specifies the URL of the content you want AJAX'd into the modal body. The AJAX request should return HTML formatted content to display inside the modal.   |
| `data-footer`    | Optional   | Present and given the value `hide`, it will hide the footer in the modal. Omitting this attribute will include the modal footer including a close button.  |
