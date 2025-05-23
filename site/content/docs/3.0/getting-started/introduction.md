---
layout: docs
title: Introduction
description: This guide will help you get your website up and running with our modern framework in short order.
toc: true
source: Webstop
menu:
  getstart:
    parent: Getting Started
    weight: 1
---

Webstop's front-end framework contains finely crafted HTML, CSS & JavaScript designed to produce compelling web experiences for grocery retailer websites. Our framework takes advantage of modern tools to create mobile-first responsive websites.

This guide will help you get your website up and running with our modern framework in short order.

## Quick start

There are 3 parts needed to get Core-Styles 3 installed in a project.

1. **CSS**, this is usually accomplished by linking to the retailer's CSS file. This will include Bootstrap 5, Core-Styles 3 and the retailer's customizations.
2. **JavaScripts**, for this we include a series of javascript files, we hope to concatenate them into one file soon.
3. **HTML Layouts**, for this we have admin and public facing layouts.

To get started you'll need a layout page, that pulls the proper files and has the proper HMTL structure, see the guides here:

- [Base HTML](/docs/3.0/layouts/base-html/)
- [Public Layout](/docs/3.0/layouts/public/)
- [Admin Layout](/docs/3.0/layouts/admin/)

### Ruby on Rails Support

We have a [Styler Gem](https://github.com/Webstop/Styler) that contains pre-made layouts, file installers, and generators.
