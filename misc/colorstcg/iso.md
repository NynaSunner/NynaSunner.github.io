---
layout: colors
title: ISO
permalink: /colors/iso/
---
<script type="text/javascript" src="/assets/js/filter.js"></script>
# In Search Of

**Mass collecting:**
- Gintama
- Fire Emblem Jugdral
- Fire Emblem Elibe
- Yu-gi-oh!
- Pokémon

<textarea name="searchbar" id="searchbar" placeholder="Search by card name" cols="30" rows="5"></textarea>

***

<div id="card-names">
{% assign isos = site.data.colors.iso %}
{% assign collecting = site.data.colors.collecting %}

{% assign decks = isos | concat: collecting | sort: "name" %}

{% for deck in decks %}

    {% for i in (1..20) %}
        {% if i<10 %}
            {% assign num = i | prepend: '0' %}
        {% else %}
            {% assign num = i %}
        {% endif %}
        {% capture fullname %}{{ deck.name }}{{ num }}{% endcapture %}
        {% assign card = site.data.colors.keeping | find: "name", fullname | first | default: "hh" %}

        {% if card != "hh" %}
        {% else %}
            <span class="{{ fullname }}">{{ fullname }}, </span>
        {% endif %}
    {% endfor %}

{% endfor %}
</div>

<style>
    .hidden-two{ /* They have to be two different classes */
        display:none;
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        filterText();
    });
</script>