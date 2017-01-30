---
# Content index for Tipue Search 5.0
# https://github.com/xHN35RQ/jekyll-tipue-search
---
{% assign documents = "" | split: "" %}
{% for post in site.posts %}
  {% unless post.exclude_from_search == true %}
    {% assign documents = documents | push: post %}
  {% endunless %}
{% endfor %}
{% for page in site.pages %}
  {% if page.include_in_search == true %}
    {% assign documents = documents | push: page %}
  {% endif %}
{% endfor %}
var tipuesearch = {"pages": [
{% for document in documents %}
  {% assign taxonomy = "" | split: "" %}
  {% for tag in document.tags %}
    {% assign taxonomy = taxonomy | push: tag %}
  {% endfor %}
  {% for category in document.categories %}
    {% assign taxonomy = taxonomy | push: category %}
  {% endfor %}
  {
    "title": {{ document.title | smartify | strip_html | normalize_whitespace | jsonify }},
    "text": {{ document.content | strip_html | normalize_whitespace | jsonify }},
    "tags": {% if taxonomy == empty %}"",{% else %}{{ taxonomy | join: ' ' | normalize_whitespace | jsonify }},{% endif %}
    "url": {{ document.url | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]};