---
layout: docs
title: Toast Markdown Editor
description: Use the browser's built in geolocation features.
group: components
toc: true
source: Webstop
menu: 
    Components:
      tags: "text editor, markdown"
      parent: editor
---

Built for features like a store locator,
the locate functionality uses the web browser's geolocation capabilities to get your latitude and longitude, and use it
to find nearby stores.

## Examples

The base `data-locate` attribute defines the locate button. 

### Basic Example


{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content" rows="10">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
<button type="submit" class="btn btn-primary">Submit Form</button>
</form>
{{< /example >}}


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


toast.js = 539 kb
toast.css = 165 kb

# Editor Example:

<div id="editor"></div>

<link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.min.css" />
<script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>

<script>
// let content = '# Awesome Heading';
// window.onload = function() {
//   const Editor = toastui.Editor;
//   const editor = new Editor({
//     el: document.querySelector('#editor'),
//     height: '500px',
//     initialValue: content,
//     initialEditType: 'wysiwyg',
//     toolbarItems: [
//               ['heading', 'bold', 'italic'],
//               ['ul', 'ol', 'indent', 'outdent'],
//               ['hr', 'table', 'image', 'link']
//     ]
//   });
//
//   editor.getMarkdown();
// };
//
// const matches = container.querySelectorAll("[data-editor]");
</script>

### Example Editor from Script:


<textarea rows="10">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

</textarea>
<form action="/ajax/alert_success">
<textarea data-markdown-editorX rows="10">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
<button type="submit" class="btn btn-primary">Submit Form</button>
</form>

<textarea rows="10">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

</textarea>
