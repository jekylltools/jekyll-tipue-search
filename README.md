# Jekyll Tipue Search

Full text search in Jekyll using Tipue Search. No plugin necessary.

## Installation

1. Add the `assets/tipuesearch` folder and all contents to your Jekyll assets folder. This is usually `assets`.

2. Add the following to your head template, usually `_includes/head.html`:

	```
	{% if page.title == "Search" %}
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script type="text/javascript" src="{{ "/assets/tipuesearch/tipuesearch_content.js" | relative_url }}"></script>
	<link rel="stylesheet" type="text/css" href="{{ "/assets/tipuesearch/tipuesearch.css" | relative_url }}">
	<script type="text/javascript" src="{{ "/assets/tipuesearch/tipuesearch_set.js" | relative_url }}"></script>
	<script type="text/javascript" src="{{ "/assets/tipuesearch/tipuesearch.min.js" | relative_url }}"></script>
	{% endif %}
	```

3. Add the example search page `search.html` to your site.

## Usage

Jekyll will use the Liquid code in `tipuesearch/tipuesearch_content.js` to generate a search index. The search form in `search.html` uses Javascript to search the index and display a list of results.

Refer to the [Tipue Search documentation](http://www.tipue.com/search/docs/) for available configuration options.

### Excluding single items from search index

You can exclude specific items from the search index with a front-matter variable:

```
exclude_from_search: true
```

### Indexing pages and collections

By default, only posts are included in the search index. Pages and collections are not included.

Include pages in the search index by adding this `_config.yml` setting:

```
tipue_search:
  index_pages: true
```

Include collections in the search index by adding an array to `_config.yml` containing a list of collections:

```
tipue_search:
  index_collections: [apples, oranges]
```

## Support

[Open an issue](https://github.com/xHN35RQ/jekyll-tipue-search/issues) if you have any problems, questions or suggestions for improvement.