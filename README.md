# Jekyll Tipue Search

Full-text search in Jekyll with [Tipue Search](https://github.com/Tipue/Tipue-Search). No plugin necessary. Fully compatible with Github Pages.

The search index at `tipuesearch/tipuesearch_content.js` is generated with Liquid. The [Tipue Search jQuery plugin](http://www.tipue.com/search) uses Javascript to search the index and display a list of results.

View a [live demo running on Github Pages](https://jekylltools.github.io/jekyll-tipue-search/search/). The code and configuration for the demo is in the [gh-pages branch](https://github.com/jekylltools/jekyll-tipue-search/tree/gh-pages).

## Installation

1. Add the `assets/tipuesearch` folder and all contents to your site.

2. Add the Tipue Search scripts & styles to your theme head. Some of these lines are [optional, see the docs for info](http://www.tipue.com/search/docs/?d=1):

  ```
  {% if page.tipue_search_active or layout.tipue_search_active %}
  <link rel="stylesheet" href="{{ "/assets/tipuesearch/css/normalize.css" | relative_url }}">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="{{ "/assets/tipuesearch/tipuesearch_content.js" | relative_url }}"></script>
  <link rel="stylesheet" href="{{ "/assets/tipuesearch/css/tipuesearch.css" | relative_url }}">
  <script src="{{ "/assets/tipuesearch/tipuesearch_set.js" | relative_url }}"></script>
  <script src="{{ "/assets/tipuesearch/tipuesearch.min.js" | relative_url }}"></script>
  {% endif %}
  ```

3. Add the Tipue Search search form, results display and script to your site. Use the example search page `search.html` for reference. Set `tipue_search_active: true` in the front-matter of every page or layout where you want to display search results. See the Tipue Search documentation for configuration of the [search form](http://www.tipue.com/search/docs/?d=1) and [display of search results](http://www.tipue.com/search/docs/?d=3):

  ```
  <form action="{{ page.url | relative_url }}">
    <div class="tipue_search_left"><img src="{{ "/assets/tipuesearch/search.png" | relative_url }}" class="tipue_search_icon"></div>
    <div class="tipue_search_right"><input type="text" name="q" id="tipue_search_input" pattern=".{3,}" title="At least 3 characters" required></div>
    <div style="clear: both;"></div>
  </form>

  <div id="tipue_search_content"></div>

  <script>
  $(document).ready(function() {
    $('#tipue_search_input').tipuesearch();
  });
  </script>
  ```

## Usage

Refer to the [Tipue Search documentation](http://www.tipue.com/search/docs/) and [browse the code](https://github.com/Tipue/Tipue-Search) to understand how Tipue Search works, and how to best integrate it into your site.

### Including pages and collections

By default, only posts are included in the search index. Pages and collections are not included.

Add the following to `_config.yml` to include pages and collections. `collections` is an array containing a list of collections you want to include.

```
tipue_search:
  include:
    pages: true
    collections: [apples, oranges]
```

### Excluding from search index

Exclude single documents from the search index with a front-matter variable:

```
exclude_from_search: true
```

Exclude multiple files, tags or categories using a setting in `_config.yml`. `files` is an array containing a list of file paths to be excluded. `tags` and `categories` are arrays containing lists of tags and categories you want to exclude.

```
tipue_search:
  exclude:
    files: [search.html, _apples/gragg.md, _oranges/valencia.md]
    tags: [tag1, tag2]
    categories: [category1, category2]
```
