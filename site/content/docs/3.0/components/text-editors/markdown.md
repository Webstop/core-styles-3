---
layout: docs
title: Markdown Editor
description: Interface for the Milkdown text editor, producing clean usable Markdown.
group: components
toc: true
source: Webstop
menu: 
    Components:
      tags: "Markdown, text-editor"
      parent: Components
---

Built for features like a store locator,
the locate functionality uses the web browser's geolocation capabilities to get your latitude and longitude, and use it
to find nearby stores.

## Examples

The base `data-locate` attribute defines the locate button. 





### Basic Example

| Rows | px/row | Pixels |
|-----:|:------:|-------:|
|    5 |  24px  |  120px |
|   10 |  24px  |  240px |
|   15 |  24px  |  360px |
|   20 |  24px  |  480px |



<div class="editor-toolbar btn-toolbar justify-content-between mb-3 px-0" style="margin-left: -1rem; margin-right: -1rem;" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mx-3 mb-3" role="group">
    <button type="button" id="editor-toolbar-h1" class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-h1"></i></button>
    <button type="button" id="editor-toolbar-h2" class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-h2"></i></button>
    <button type="button" id="editor-toolbar-h3" class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-h3"></i></button>
    <button type="button" id="editor-toolbar-h4" class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-h4"></i></button>
    <button type="button" id="editor-toolbar-h5" class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-h5"></i></button>
    <button type="button" id="editor-toolbar-h6" class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-h6"></i></button>
  </div>
  <div class="btn-group mx-3 mb-3" role="group">
    <button type="button" id="editor-toolbar-strong"   class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-bold"></i></button>
    <button type="button" id="editor-toolbar-emphasis" class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-italic"></i></button>
    <button type="button" id="editor-toolbar-strike" class="btn btn-outline-secondary"><i class="fa-sharp fa-solid fa-strikethrough"></i></button>
  </div>
  <div class="btn-group mx-3 mb-3" role="group">
    <button type="button" id="editor-toolbar-table" class="btn btn-outline-secondary"><i class="fa-regular fa-table"></i></button>
    <button type="button" id="editor-toolbar-ul"    class="btn btn-outline-secondary"><i class="fa-solid fa-list"></i></button>
    <button type="button" id="editor-toolbar-ol"    class="btn btn-outline-secondary"><i class="fa-sharp fa-regular fa-list-ol"></i></button>
    <button type="button" id="editor-toolbar-quote" class="btn btn-outline-secondary"><i class="fa-solid fa-quote-right"></i></button>
  </div>
  <div class="btn-group mx-3 mb-3" role="group">
    <button type="button" id="editor-toolbar-image" class="btn btn-outline-secondary"><i class="fa-regular fa-image"></i></button>
    <button type="button" id="editor-toolbar-link"  class="btn btn-outline-secondary"><i class="fa-duotone fa-arrow-up-right-from-square"></i></button>
  </div>
  <div class="btn-group mx-3 mb-3" role="group">
    <button type="button" id="editor-toolbar-undo" class="btn btn-outline-secondary"><i class="fa-solid fa-rotate-left"></i></button>
    <button type="button" id="editor-toolbar-redo" class="btn btn-outline-secondary"><i class="fa-solid fa-rotate-right"></i></button>
  </div>

</div>


{{< example >}}
<label for="markdown-example" class="form-label">Text Editor Example</label>
<textarea data-markdown-editor class="form-control" name="some-name" id="some-id" rows="15">

#### 2 Markdown H4 Heading

You can type `|3x2|<space>` to create a table:

| First Header   |    Second Header   |
| -------------- | :----------------: |
| Content Cell 1 | \`Content\` Cell 1 |
| Content Cell 2 | **Content** Cell 2 |

_Tables like the one above are made available by Github Flavored Markdown (GFM)._

Links: [Webstop](https://webstop.com)

#### Lists

- bullet list
- using dashes

1. Numbered List
2. Using Numbers
</textarea>
{{< /example >}}



<script src="/js/milkdown.js" type="module"></script>


#### Attributes

The following attributes are used by locate to enable rich functionality. These are placed on the button containing the `data-locate` attribute.

| Attribute                  | Description                                                                                                                                                     |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-locate`              | The attribute `data-locate` being present on the element makes it a clickable button.                                                                           |
| `data-locate-target`       | The attribute `data-locate-target` identifies the HTML element to place the search results inside.                                                              |
| `data-locate-message`      | The attribute `data-locate-message` identifies the HTML element to place the status messages inside.                                                            |
| `data-locate-on-load`      | The attribute `data-locate-on-load` tells the code to try geolocation on page load without waiting for a button click.                                          |
| `data-locate-hide-me`      | The attribute `data-locate-hide-me` identifies the HTML elements to hide while the search results are being displayed, and reveal when the search is cancelled. |
| `data-locate-redirect-url` | The `data-locate-redirect-url` attribute identifies the URL to use for the final destination. For example, return to the circular after using a store locator.  |

