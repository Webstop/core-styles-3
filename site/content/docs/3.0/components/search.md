---
layout: docs
title: Live Search
description: Get search results as you type.
group: components
toc: true
source: Webstop
menu:
  orphan:
---

  

Live search watches a search field and makes AJAX requests as you type.

## Examples

The base `search-form` class defines the search form. The `search-from-search-text` class identifies the 
text field to watch; the field the consumer types search terms into.

### Basic Search Example

<div class="toolbar-detached">
{{< example >}}
<form class="search-form" action="/ajax/search_results/" method="post" data-search="live" data-target="#search-results" data-hide=".search-hidden">
  <div class="input-group">
    <input class="search-from-search-text form-control" type="text" name="search" placeholder="Search" aria-label="Enter text to search for.">
    <a href="#" class="search-form-clear icon-cancel-circle-solid" aria-label="Clear Search"></a>
    <div class="input-group-append">
      <button class="search-from-submit btn btn-primary" type="submit" aria-label="Submit Search">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</form>

<br>
<section id="search-results"></section>
<section class="search-hidden">
  <h4>Some Page Content</h4>
  <p>This section should get replaced by search results when a search is active, and reappear when the search is exited.</p>
</section>

{{< /example >}}
</div>

#### Important Attributes

The following attributes are required for Live Search to function. **They are all placed on the root `form` element**, 
the same form element the `search-form` is placed on.

| Attribute | Description |
| --- | ----------- |
| 'data-search'  | The attribute 'data-search' with a value of 'live' enables Live Search on the form. |
| 'data-target' | The attribute 'data-target' identifies the HTML element to place the search results inside. |
| 'data-hide' | The attribute 'data-hide' identifies the HTML elements to hide while the search results are being displayed, and reveal when the search is cancelled. |
| 'action' | The 'action' attribute identifies the URL to use for the AJAX search request. **The results are to be in HTML format.** |


<br>

### Search Form in a Toolbar Example

Inline search forms can be placed inside a toolbar. 

Notice the `toolbar-group` class is placed inside the form on the same element containing the `input-group`, trying to 
place the `toolbar-group` class on other elements will likely produce undesirable results.

<div class="toolbar-detached">
{{< example >}}
<nav class="toolbar">
  <form class="search-form" action="/ajax/search_results" method="post" data-search="live" data-target="#search-results-toolbar" data-hide=".search-hidden-toolbar">
    <div class="toolbar-group input-group">
      <input class="search-from-search-text form-control" type="text" name="search" placeholder="Search" aria-label="Enter text to search for.">
      <a href="#" class="search-form-clear icon-cancel-circle-solid" aria-label="Clear Search"></a>
      <div class="input-group-append">
        <button class="search-from-submit btn btn-primary" type="submit" aria-label="Submit Search">
          <i class="fas fa-search"></i>
        </button>
      </div>
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
`search-from-search-text` field.

<div class="toolbar-detached">
{{< example >}}
<form class="search-form" action="/ajax/search_results" method="post" data-search="live" data-target="#search-results-complex" data-hide=".search-hidden-complex">
  <div class="form-group">
    <div class="input-group">
      <input class="search-from-search-text form-control" type="text" name="search" placeholder="Search" aria-label="Enter text to search for.">
      <a href="#" class="search-form-clear icon-cancel-circle-solid" aria-label="Clear Search"></a>
      <div class="input-group-append">
        <button class="search-from-submit btn btn-primary" type="submit" aria-label="Submit Search">
         <i class="fas fa-search"></i>
        </button>
      </div>
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
  <button class="btn btn-primary mt-2">Search</button>
</form>

<hr>
<section id="search-results-complex"></section>
<section class="search-hidden-complex">
  <h4>Some Page Content</h4>
  <p>This section should get replaced by search results when a search is active, and reappear when the search is exited.</p>
</section>
{{< /example >}}
</div>


