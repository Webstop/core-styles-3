---
layout: docs
title: Toast Markdown Editor
description: Use the browser's built in geolocation features.
group: components
toc: true
source: Webstop
menu: 
  components:
    tags: "text editor, markdown"
    parent: Components
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
<textarea data-markdown-editor name="content" rows="20">
# Greg Hemphill

- Talented Developer
- Stunning Good Looks
- 
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

## Core-Rails Support

If you are developing in the Webstop Core-Rails app there is a library file which supports using this editor.
The Toast editor will place base64 encoded images into the content of the textarea. The problem is these images 
exceed the size of a MySQL text field. The library file fixes this by looking for these base64 encoded images, 
uploading them to AWS S3, and then replacing the base64 image tags with tags that point to the image on S3.

A little setup is required in the Rails model of the item you'd like to enable this functionality in.

### Core-Rails Model Example 

The following is taken from the `app/models/store.rb` file.

##### Near The Top of The File:

```ruby
before_save :replace_base64_images_with_s3_hosted_images
```

This is pretty straightforward, you tell it to do the processing just before we save the data to the database.

##### Near The Bottom of The File:

<div class="alert alert-danger" role="alert">
  <strong>Follow these directions!</strong> Don't cut-n-paste this code without modifying it to your needs!
</div>

```ruby
def replace_base64_images_with_s3_hosted_images
  resource_name = 'stores'
  resource_id = 'new'
  resource_id = self.id if self.id.present?
  retailer_id = self.retailer_id
  self.description = MarkdownImageUploader.replace_base64_images_with_s3_hosted_images(self.description, resource_name, resource_id, retailer_id) if self.description.present?
  self.details = MarkdownImageUploader.replace_base64_images_with_s3_hosted_images(self.details, resource_name, resource_id, retailer_id) if self.details.present?
end
```

> <h4 class="mt-0">Tech Notes</h4>  
> 
> The `resource_name`, `resource_id`, & `retailer_id` fields are used to organize where the images are placed on S3.  
> i.e. `:CDN_HOST/:Rails.env/markdown_images/retailer_:retailer_id/:resource_name/:resource_id/:date/:unique_hash.jpeg`  
> For an editor with `resource_name` = `stores`, `resource_id` = `4`, & `retailer_id` = `3277` produces the following URL.  
> e.g. `https://s3.grocerywebsite.com/development/markdown_images/retailer_3277/stores/4/2024-12-09/657f3a8e-cd61-496c-a9db-134db8e403c1.jpeg`

This part takes a little manual effort. You need to put the name &amp; ID of your resource in here and make sure the retailer id is set correctly. You also need to list every field in your model that you want to apply this to.

You need to do the following:

1. Rename the `resource_name` variable to the lowercase, snakecase, & plural version of your model or the resource you are uploading.
2. The `resource_id` is often `self.id`, but not always, consider your use case and put the correct value here.
3. Make sure the `retailer_id` is being set properly for your content. This is often `self.retailer_id` or `@retailer.id`. Consider your use case when setting this value. Occasionally `unknown` is used.
4. The last two lines in this model indicate we want to apply this to the `description` and `details` fields. You need to replace these with the fields your model wants this applied to. The example shows two fields, you might have only one, or more than two.
5. Test uploading some images and examine the files paths produced. Make sure items are uploaded where you expect them to be and in sync with how we normally place things.

**Note on Resource ID:** When creating a new resource we often don't know the value of the ID until after the record is created, but by then our image has already been uploaded to S3. For new records the value of `new` is placed in the `resouce_id` field. 


### Core-Rails View Example


#### Form Example

The following is an example of a `details` field with the `data-markdown-editor` attribute in use.

```html
<div class="mb-3">
  <%= form.label :details, class: 'form-label text-capitalize' %>
  <%= form.text_area :details, rows: '20', class: 'form-control-na mb-2', 'data-markdown-editor' => '', 'aria-describedby' => 'details-help' %>
  <small id="details-help" class="form-text"><%= t('store.help.details') %></small>
</div>
```

#### Show File Example

In your show file use the following to display the stored Markdown text as HTML.

```ruby
<%= markdown(@store.details) %>
```


