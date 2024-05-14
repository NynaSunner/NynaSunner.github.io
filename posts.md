---
layout: default
title: Posts
header: Posts archive
description: This archive contains all of my posts, ordered and divided by date
permalink: /posts/
---

## Sections

<div class="flex-wrapper">
  <div class="yellow-wrapper">
    <a href="/journal" style="font-size: 1.2em"><b>Journal</b></a> 🔞<br>
    My (new!) personal little space for my rambles, thoughts, and ideas.
  </div>
  <div class="yellow-wrapper">
    <a href="/updates" style="font-size: 1.2em"><b>Updates</b></a><br>
    Where I post about site updates, and sometimes small life updates as well.
  </div>
</div>

## Full-fledged posts

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
