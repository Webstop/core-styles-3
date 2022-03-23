---
layout: docs
title: Box Utilities
description: Common styling for block components.
group: utilities
toc: true
source: Webstop
menu: 
  utilities:
    parent: Utilities
---

These utility classes can be applied to items with display block and other similar box elements.

## Examples

### Box Center Example

Use the `.box-center` class to center your boxes. Here we demonstrate it applied to a card. You can alternatively use the 
Bootstrap utility class `.mx-auto` to product the same effect.

{{< example >}}
<div class="card box-center max-width-320">
  <div class="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
{{< /example >}}

> *Note:* If you want to center text use the Bootstrap utility `.text-center`.

### Box Stackable Example

Use the `.box-stackable` class to give your boxes a nice bottom margin so they don't butt against each other when stacked. 
Here we demonstrate it applied to a card.

{{< example >}}
<div class="card box-stackable">
  <div class="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
<div class="card box-stackable">
  <div class="card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</div>
{{< /example >}}

## Change Notes

### Box Shadow

Previous iterations of Core Styles had classes for box shadows, box level shadows were added to Bootstrap with version 5, 
so we no longer provide `.box-shadow` or `.card-shadowed` classes. 

Documentation can be found here: [Bootstrap Shadows](https://getbootstrap.com/docs/5.1/utilities/shadows/)

### Box Readable

Previous iterations of Core Styles had classes for readable width elements here, the `.readable` class has been added to 
the max-width section, so we no longer provide `.box-readable` or `.card-readable` classes.

Documentation can be found here: [Readable at Max Width Utilities](/docs/3.0/utilities/max-width#readable-example)
