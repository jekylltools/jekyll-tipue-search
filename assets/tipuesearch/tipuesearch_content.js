---
# Content index for Tipue Search 5.0
# https://github.com/xHN35RQ/jekyll-tipue-search
---
{% assign index = "" | split: "" %}
{% for post in site.posts %}
  {% unless post.exclude_from_search == true %}
    {% assign index = index | push: post %}
  {% endunless %}
{% endfor %}
{% if site.tipue_search.include.pages == true %}
  {% for page in site.html_pages %}
    {% unless page.exclude_from_search == true %}
      {% assign index = index | push: page %}
    {% endunless %}
  {% endfor %}
{% endif %}
{% unless site.tipue_search.include.collections == empty %}
  {% for collection in site.tipue_search.include.collections %}
    {% assign documents = site.documents | where:"collection",collection %}
    {% for document in documents %}
      {% unless document.exclude_from_search == true %}
        {% assign index = index | push: document %}
      {% endunless %}
    {% endfor %}
  {% endfor %}
{% endunless %}
var tipuesearch = {"pages": [
{% for document in index %}
  {% assign taxonomies = "" | split: "" %}
  {% for tag in document.tags %}
    {% assign taxonomies = taxonomies | push: tag %}
  {% endfor %}
  {% for category in document.categories %}
    {% assign taxonomies = taxonomies | push: category %}
  {% endfor %}
  {
    "title": {{ document.title | smartify | strip_html | normalize_whitespace | jsonify }},
    "text": {{ document.content | strip_html | normalize_whitespace | jsonify }},
    "tags": {% if taxonomies == empty %}"",{% else %}{{ taxonomies | join: ' ' | normalize_whitespace | jsonify }},{% endif %}
    "url": {{ document.url | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]};