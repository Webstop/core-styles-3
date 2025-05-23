---
layout: docs
title: Base HTML
description: Base HTML needed for Core-Styles layouts.
toc: true
source: Webstop
menu: 
  layout:
    parent: Layouts
---

## Example

The base html for all Core Styles 3 layouts is represented below. 

```html
<!doctype html>
<html lang="en" data-bs-theme="light">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" >
    <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
    <title>Core Styles Demo</title>
    <!-- CSS and other head files go here (see admin layout or public layout) -->
  </head>
  <body>
    <!-- Page layout goes here (see admin layout or public layout) -->
    <!-- Javascript end of body files go here (see admin layout or public layout) -->
  </body>
</html>
```

### Ruby on Rails Support

If you are using Ruby on Rails we recommend using the [Styler Gem](https://github.com/Webstop/Styler) which contains two 
layouts for your use. To use these layouts simply install the gem and place the following at the top of your controller.

#### Admin Layout

```ruby
layout 'admin_cs3'
```

#### Public Layout

```ruby
layout 'public_cs3'
```
