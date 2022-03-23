---
layout: docs
title: Max Width
description: Standard maximum widths used for page content.
group: utilities
toc: true
source: Webstop
menu: 
  utilities:
    parent: Utilities
---

The max width utility classes set the maximum with of content areas for the page.

It can be used on body content, headers, footers, & toolbars to get a consistent look 
across the web page. 

<div class="alert alert-info">
  <p>
    We originally built this to place restrictions on the content area of Digital Circular Plus, so all 
    of the sizes we have are geared toward restricting the size on the main content area of a consumer 
    web page. 
  </p>
  
  <p>Some things we should consider adding:</p>
  <ol>
    <li>Sizes that match Bootstrap standard media query sizes like `max-width-sm`, `max-width-lg` & etc.</li>
    <li>
      Sizes for content like cards in a card-deck so we have standard sizes there.
      <ol>
        <li>Sizes so when a card deck is used under a page that's got a max-width we know the size to use to make even columns.</li>
      </ol>
    </li>
    <li>Sizes that work with media queries like `max-width-sm-320`, `max-width-lg-640` & etc.</li>
  </ol>
</div>

## Max-Width for Components

The following max-width classes were designed for use on components within a page layout.

### Readable Max-Width

The `.readable` class can be applied to elements to make them conform to a width that is comfortable for a reader to enjoy. 
Studies have shown that articles of text where the line length is too long are a strain on the eye and readers can have 
difficulty maintaining their place when moving to a new line. 

We use the `$readable` Sass variable to control this width. 
We carefully studies and evaluated this issue to determine the optimum width to use, so caution should be exercised when 
changing the value of that variable. 

We use the`.readable` class on a large variety of content, including body text and forms.

{{< example >}}
<div class="card readable">
  <div class="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
{{< /example >}}

### Max Width 320

The class `max-width-320` will constrain an element to 320 pixels wide.

{{< example >}}
<div class="card max-width-320">
  <div class="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
{{< /example >}}

### Max Width 450

The class `max-width-450` will constrain an element to 450 pixels wide.

{{< example >}}
<div class="card max-width-450">
  <div class="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
{{< /example >}}

## Body Content Examples

We provide three standard sizes for page width, `1140`, `1440`, and `1600` pixels wide. These are 
usually applied to the main body content of a page, with headers and footers remaining unaffected.

### Max Width 1140 Example

{{< example >}}
<div class="max-width-1140">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
{{< /example >}}

### Max Width 1440 Example

{{< example >}}
<div class="max-width-1440">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
{{< /example >}}

### Max Width 1600 Example

{{< example >}}
<div class="max-width-1600">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
{{< /example >}}

## Centering

You'll most likely want the content you are applying the max width to be centered on 
the page. This can easily be accomplished by adding Bootstrap's margin utility class 
`mx-auto` or our `box-center` class.

### Centered Max Width 1140 Example

{{< example >}}
<div class="max-width-1140 mx-auto">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
{{< /example >}}
