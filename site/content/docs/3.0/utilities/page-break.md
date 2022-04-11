---
layout: docs
title: Page Break
description: Force page breaks when printing pages.
group: utilities
toc: true
source: Webstop
menu: 
  utilities:
    parent: Utilities
---

The Page Break utility allows you to specify a new physical page when printing a web page. It doesn't affect the view in a web browser.


## Example

Use the `page-break` class on an empty element to create a block element that forces a page break after the element on printed pages. When the element is empty it hides the element on non-print contexts (web browers).

{{< example >}}
<p>Printed page 1 ends here.</p>
<div class="page-break"></div>
<p>Printed page 2 starts here.</p>
{{< /example >}}

It can also be used on any block level element. 

{{< example >}}
<p class="page-break">Printed page 1 ends here.</p>
<p>Printed page 2 starts here.</p>
{{< /example >}}

Warning about doing this, it adds `display: block;` and `clear: both;` to the element when printed, which can sometimes cause unexpected results, and results different than the web view. We therefore recommend using `page-break` on an empty `div` like the first example.