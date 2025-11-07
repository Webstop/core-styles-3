---
layout: docs
title: Live Search
description: Get search results as you type.
group: components
toc: true
source: Webstop
menu: 
    components:
      tags: "Forms"
      parent: Components
---

  

Live search watches a search field and makes AJAX requests as you type.

## Examples

The base `live-search` class defines the search form. The `live-search-search-text` class identifies the 
text field to watch; the field the consumer types search terms into.

{{< notices/ajax-warning >}}

### Basic Search Example

<div class="toolbar-detached">
{{< example >}}
<form class="live-search" action="/ajax/search_results/" method="post" data-live-search data-target="#search-results" data-hide=".search-hidden">
  <div class="input-group mb-3">
    <input class="live-search-search-text form-control" type="text" name="search" placeholder="Search" aria-label="Enter text to search for.">
    <button class="btn btn-primary" type="submit" aria-label="Search">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</form>

<section id="search-results"></section>
<section class="search-hidden">
  <h4>Some Page Content</h4>
  <p>This section should get replaced by search results when a search is active, and reappear when the search is exited.</p>
</section>

{{< /example >}}
</div>

#### Important Attributes

The following attributes are required for Live Search to function. **They are all placed on the root `form` element**, 
the same form element the `live-search` is placed on.

| Attribute          | Description                                                                                                                                           |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-live-search` | The presence of the attribute `data-live-search` enables Live Search on the form. No value is required.                                               |
| `data-target`      | The attribute `data-target` identifies the HTML element to place the search results inside.                                                           |
| `data-hide`        | The attribute `data-hide` identifies the HTML elements to hide while the search results are being displayed, and reveal when the search is cancelled. |
| `action`           | The `action` attribute identifies the URL to use for the AJAX search request. **The results are expected to be in HTML format.**                      |


<br>

### Two Hide Targets Example

<div class="toolbar-detached">
{{< example >}}
<form class="live-search" action="/ajax/search_results/" method="post" data-live-search data-target="#search-results-two-hides" data-hide=".search-hidden-two-hides">
  <div class="input-group mb-3">
    <input class="live-search-search-text form-control" type="text" name="search" placeholder="Search" aria-label="Enter text to search for.">
    <button class="btn btn-primary" type="submit" aria-label="Search">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</form>

<section id="search-results-two-hides"></section>

<p>Not hidden.</p>

<section class="search-hidden-two-hides">
  <h4>Some Page Content</h4>
  <p>This section should get replaced by search results when a search is active, and reappear when the search is exited.</p>
</section>

<p>Also Not hidden.</p>

<section class="search-hidden-two-hides">
  <h4>Some More Page Content</h4>
  <p>This section should get replaced by search results when a search is active, and reappear when the search is exited.</p>
</section>

{{< /example >}}
</div>

### Search Form in a Toolbar Example

Inline search forms can be placed inside a toolbar. 

Notice the `toolbar-group` class is placed inside the form on the same element containing the `input-group`, trying to 
place the `toolbar-group` class on other elements will likely produce undesirable results.

<div class="toolbar-detached">
{{< example >}}
<nav class="toolbar">
  <form class="live-search" action="/ajax/search_results" method="post" data-live-search data-target="#search-results-toolbar" data-hide=".search-hidden-toolbar">
    <div class="toolbar-group input-group">
      <input class="live-search-search-text form-control" type="text" name="search" placeholder="Search" aria-label="Enter text to search for.">
      <button class="btn btn-primary" type="submit" aria-label="Search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </form>
</nav>

<section id="search-results-toolbar"></section>
<section class="search-hidden-toolbar">
  <h4>Some Page Content</h4>
  <p>This section should get replaced by search results when a search is active, and reappear when the search is exited.</p>
</section>
{{< /example >}}
</div> 


### Complex Search Form Example

Search forms can have any number of fields and the AJAX request will submit them along with the 
`live-search-search-text` field.

<div class="toolbar-detached">
{{< example >}}
<form class="live-search" action="/ajax/search_results" method="post" data-live-search data-target="#search-results-complex" data-hide=".search-hidden-complex">
  <div class="form-group">
    <div class="input-group mb-3">
      <input class="live-search-search-text form-control" type="text" name="search" placeholder="Search" aria-label="Enter text to search for.">
      <button class="btn btn-primary" type="submit" aria-label="Search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>

  <input type="hidden" name="date" value="2018-12-25">

  <div class="form-group">
    <label for="select-1">Example Select</label>
    <select class="form-control" name="select-1" id="select-1">
      <option>Select Option 1</option>
      <option>Select Option 2</option>
      <option>Select Option 3</option>
      <option>Select Option 4</option>
      <option>Select Option 5</option>
    </select>
  </div>

  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="Checkbox Selection 1" name="checkbox-1" id="checkbox-1">
    <label class="form-check-label" for="checkbox-1">
      Example Checkbox Selection 1
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="Checkbox Selection 2" name="checkbox-2" id="checkbox-2">
    <label class="form-check-label" for="checkbox-2">
      Example Checkbox Selection 2
    </label>
  </div>
  <button class="btn btn-primary  mt-2">Search</button>
</form>

<hr>
<section id="search-results-complex"></section>
<section class="search-hidden-complex">
  <h4>Some Page Content</h4>
  <p>This section should get replaced by search results when a search is active, and reappear when the search is exited.</p>
</section>
{{< /example >}}
</div>


