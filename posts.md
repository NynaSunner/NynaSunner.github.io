---
layout: default
title: Posts
header: Posts archive
description: This archive contains all of my posts, ordered and divided by date
permalink: /posts/
---

This page is for my full-fledged posts. Doesn't include the [microblog](/microblog)

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

{% for year in postsByYear %}
<h2>{{ year.name }} posts</h2>
{% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}

{% for month in postsByMonth %}
<h3>{{ month.name }}</h3>
<ul>
  {% for post in month.items  %}
<li>{{ post.date | date: "%a %d"}}: <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
{% endfor %}
