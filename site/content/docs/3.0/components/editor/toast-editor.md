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

Our markdown editor uses the [Toast UI Editor](https://ui.toast.com/tui-editor) to provide 
WYSIWYG style text editing.  The text editor can be applied to any textarea within a web form.

## Examples

The base `data-markdown-editor` attribute defines the markdown editor. It is expected to be 
placed on a `textarea` element, which is nested inside a `form` element. 

The script will find the parent `form` element and place the editor contents inside the `textarea` 
when the form is submitted.

All attributes other than the `data-markdown-editor` attribute are optional.

> <h4 class="mt-0">Developer's Note</h4>
> 
> These feature uses the [Toast UI Editor](https://ui.toast.com/tui-editor). Unfortunately the 
> files for this editor are quite large, with the javascript file coming in at 539kb and the 
> css file coming in at 165kb. Because of this core-styles will dynamically load the editor files 
> if a data-markdown-editor attribute is found on the current web page.


### Simple Example

This is a simple editor using all the defaults. We default to a WYSIWYG style editor, with the standard to. 

Defaults Include:

- WYSIWYG mode
- 300px height 
- Standard toolbar

**This simple example uses a default set of options that should work best for mose use cases.**

{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
</form>
{{< /example >}}

### Display Mode Examples

There are three display modes available `wysiwyg`, `markdown`, or `split-pane`. The 
`data-editor-mode` attribute determines the display mode. Omit the `data-editor-mode` 
attribute to use the standard mode.

### Markdown Display Mode

Markdown display modes defaults the editor to using raw markdown in the editor, with a 
preview tab. Markdown mode is achieved by using the `data-editor-mode="markdown"` attribute.

{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content" data-editor-mode="markdown">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
</form>
{{< /example >}}

### Markdown Display Mode

Split-Pane display modes defaults the editor to using raw markdown in a right column editor, with a
preview in a left column. Split-Pane mode is achieved by using the `data-editor-mode="split-pane"` attribute.

{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content" data-editor-mode="split-pane">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
</form>
{{< /example >}}

### WYSIWYG Display Mode

> <h4 class="mt-0">What is a WYSIWYG?</h4>
> 
> WYSIWYG stands for What You See Is What You Get. Microsoft Word is an example of a 
> WYSIWYG editor.

The WYSIWYG display mode is achieved by not including a `data-editor-mode` attribute, 
or by setting the attribute to `data-editor-mode="wysiwyg"`.

{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
</form>
{{< /example >}}

## Toolbar Examples

There are three toolbar settings available `standard`, `basic` or `full`. Omitting the attribute defaults to the `standard` style.

## Basic Toolbar Example

This toolbar uses only inline style features. It's useful when you want to limit the size 
and complexity of the text content.

Use `data-editor-toolbar="basic"` on the `textarea` to use a basic toolbar.

{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content" data-editor-toolbar="basic">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
</form>
{{< /example >}}

## Standard Toolbar Example

Omitting the `data-editor-toolbar` attribute defaults to the `standard` style.

{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
</form>
{{< /example >}}

## Full Toolbar Example

This toolbar uses developer features, like syntax highlighting. It's useful when you want to use the editor for 
developer focused features.

Use `data-editor-toolbar="full"` on the `textarea` to use a full toolbar.

{{< example >}}
<form action="/ajax/alert_success" method="get">
<textarea data-markdown-editor name="content" data-editor-toolbar="full">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks

A paragraph with **bold** text inside.

</textarea>
</form>
{{< /example >}}

## Attributes

The following attributes are used to enable rich functionality. These are placed on the textarea containing the `data-markdown-editor` attribute.

| Attribute              | Description                                                                                                                                                                                                          |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-markdown-editor` | The attribute `data-markdown-editor` being present on the element makes it into an WYSIWYG text editor.                                                                                                              |
| `data-editor-toolbar`  | Optional attribute that specifies the type of tool bar to use. Accepts the values `standard`, `basic` or `full`. Omitting the attribute defaults to the `standard` style.                                            |
| `rows`                 | Optional attribute sets the height of the editor. Indicates the number of rows of text to have visible without scrolling. The `data-editor-height` attribute will override the `rows` attribute if both are present. |
| `data-editor-height`   | Optional attribute sets the height of the editor. The `data-editor-height` attribute will override the `rows` attribute if both are present.                                                                         |
| `data-editor-mode`     | Optional attribute sets the default behavior of the editor. Accepts the values `wysiwyg`, `markdown`, or `split-pane`. Omitting the attribute defaults to the `wysiwyg` mode.                                        |


