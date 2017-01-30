---
# Content index for Tipue Search 5.0
# https://github.com/xHN35RQ/jekyll-tipue-search
---
var tipuesearch = {"pages": [
{% for post in site.posts %}
{% unless post.exclude_from_search == true %}
	{
		"title": {{ post.title | smartify | strip_html | normalize_whitespace | jsonify }},
		"text": {{ post.content | strip_html | normalize_whitespace | jsonify }},
		"tags": {% if post.tags == empty %}"",{% else %}{{ post.tags | join: ' ' | normalize_whitespace | jsonify }},{% endif %}
		"url": {{ post.url | jsonify }}
	}{% unless forloop.last %},{% endunless %}
{% endunless %}
{% endfor %}
]};