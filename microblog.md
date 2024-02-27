---
layout: default
title: Microblog
header: Microblog
description: An archive of all my microblogs, including both site and life updates! Wow, wombo combo!
permalink: /microblog/
---

{% for microblog in site.microblog reversed %}
{% assign title = microblog.date | date: "%d/%m/%Y" %}
{% if microblog == site.microblog.last %}
<details open>
<summary class="anchor">{{ title }}</summary>
<div>
<h3 class="noanchor">{{ title }}{% if microblog.code-upd8 %} 🛠{% endif %}</h3>
{{ microblog.content | markdownify }}
</div>
</details>
<h2>Older entries</h2>
{% else %}
<details>
<summary class="anchor">{{ title }}</summary>
<div>
<h3 class="noanchor">{{ title }}{% if microblog.code-upd8 %} 🛠{% endif %}</h3>
{{ microblog.content | markdownify }}
</div>
</details>
{% endif %}
{% endfor %}