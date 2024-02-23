---
title: Tags
header: Tags
description: A list of all the tags on my site and their respective RSS link. I'm pretty sure it doesn't work tho LMAO
permalink: /tags/
layout: default
---

## By name

<ul>
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
{% assign t = tag | first %}
{% assign posts = tag | last %}
<li><a href="/tags/{{ tag[0] }}/">{{ tag[0] }}</a> [{{ tag[1] | size }}] <a href="/feeds//{{ tag[0] }}.xml"> RSS</a></li>
{% endfor %}
</ul>

## By quantity

<ul>
{% capture tags %}
{% for tag in site.tags %}
{{ tag[1].size | plus: 1000 }}#{{ tag[0] }}#{{ tag[1].size }}
{% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}
{% for tag in sortedtags reversed %}
{% assign tagitems = tag | split: '#' %}
<li><a href="/tags/{{ tagitems[1] }}/">{{ tagitems[1]}}</a> [{{ tagitems[2] }}] <a href="/feeds//{{ tagitems[1]}}.xml"> RSS</a></li>
{% endfor %}
</ul>