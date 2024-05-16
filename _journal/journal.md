---
layout: default
title: Journal
header: Journal
description: World is a fuck
permalink: /journal/
nsfw: true
---

I don't know how to make this properly with Jekyll collections so it'll be a bit wonky, sorry about that.

This is my journal, and as such I want to speak as freely as possible so there might be some mature/NSFW content and there **will** be very crude language in here.

## Misc journals
- [Dream journal](dreams)

## Diary
{% assign entriesByYear = site.journal | group_by_exp:"journal", "journal.date | date: '%Y'" %}
{% for year in entriesByYear %}
<h3>{{ year.name }}</h3>
<ul>
{% for month in year.items %}
{% if month.type == "diary" %}
<li><a href="{{ month.url }}">{{ month.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
{% endfor %}