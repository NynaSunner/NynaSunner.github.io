---
layout: default
title: Posts
header: Posts archive
description: This archive contains all of my posts, ordered and divided by date
permalink: /posts/
---

This page is for my full-fledged posts. Doesn't include the [microblog](/microblog)

<a href="{{ site.url }}/feed.xml">RSS feed</a>

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}

{% for year in postsByYear %}
<h2>{{ year.name }} posts</h2>
{% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}

{% for month in postsByMonth %}
<h3>{{ month.name }}</h3>
  {% for post in month.items  %}
  <div class="yellow-wrapper">
  <span class="post-title"><a href="{{ post.url }}"><b>{{ post.title }}</b></a> </span><small>- {{ post.date | date: "%d/%m/%Y" }} {% for tag in post.tags %}<a class="tag" href="/tags/{{ tag }}">{{ tag }}</a> {% endfor %}</small><br>
  {{ post.description }}
  </div>
  {% endfor %}
{% endfor %}
{% endfor %}
