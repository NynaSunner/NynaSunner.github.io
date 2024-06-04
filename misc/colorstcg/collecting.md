---
layout: colors
title: Collecting
permalink: /colors/collecting/
---
# Collecting decks & cards
## Higher priority

<div class="flexing">
{% for deckk in site.data.colors.collecting %}
{% assign deck = deckk.name %}
{% assign deckinfo = site.data.colors.database[deck] %}

{% for array in deckinfo %}
    {% if forloop.last == true %}
        {% assign color = array %}
    {% endif %}
{% endfor %}

    <table class="collectingtable bg{{ color }}">
        <thead><tr><th>
            <a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a>
        </th></tr></thead>
        <tbody><tr><td>

            {% for i in (1..20) %}
                {% if i<10 %}
                    {% assign num = i | prepend: '0' %}
                {% else %}
                    {% assign num = i %}
                {% endif %}
                {% capture fullname %}{{ deck }}{{ num }}{% endcapture %}
                {% assign card = site.data.colors.keeping | find: "name", fullname | first | default: "hh" %}

                {% if card != "hh" %}
                    <img src="https://colors-tcg.eu/cards/{{ fullname }}.gif" alt="{{ fullname }}" title="{{ fullname }}">
                {% else %}
                    <img src="https://colors-tcg.eu/cards/{{ deck }}00.gif">
                {% endif %}
            {% endfor %}
        </td></tr></tbody>
    </table>
{% endfor %}
</div>

## Lower priority

{% assign redcol = "" | split: ',' %}
{% assign orangecol = "" | split: ',' %}
{% assign yellowcol = "" | split: ',' %}
{% assign greencol = "" | split: ',' %}
{% assign bluecol = "" | split: ',' %}
{% assign purplecol = "" | split: ',' %}
{% assign browncol = "" | split: ',' %}
{% assign graycol = "" | split: ',' %}
{% assign specialcol = "" | split: ',' %}

{% for deckk in site.data.colors.iso %}
    {% assign deck = deckk.name %}
    {% assign deckinfo = site.data.colors.database[deck] %}

    {% for array in deckinfo %}
        {% if forloop.last == true %}
            {% assign color = array %}
        {% endif %}
    {% endfor %}

    {% case color %}
        {% when "Red" %}
            {% assign redcol = redcol | push: deck %}
        {% when "Orange" %}
            {% assign orangecol = orangecol | push: deck %}
        {% when "Yellow" %}
            {% assign yellowcol = yellowcol | push: deck %}
        {% when "Green" %}
            {% assign greencol = greencol | push: deck %}
        {% when "Blue" %}
            {% assign bluecol = bluecol | push: deck %}
        {% when "Purple" %}
            {% assign purplecol = purplecol | push: deck %}
        {% when "Brown" %}
            {% assign browncol = browncol | push: deck %}
        {% when "Gray" %}
            {% assign graycol = graycol | push: deck %}
        {% when "Special" %}
            {% assign specialcol = specialcol | push: deck %}
        {% else %}
    {% endcase %}

{% endfor %}

<div class="flexing" id="low-decks">

<table class="bgRed" style="height: fit-content;">
    <thead><tr><th>
        Red decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in redcol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

<table class="bgOrange" style="height: fit-content;">
    <thead><tr><th>
        Orange decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in orangecol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

<table class="bgYellow" style="height: fit-content;">
    <thead><tr><th>
        Yellow decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in yellowcol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

<table class="bgGreen" style="height: fit-content;">
    <thead><tr><th>
        Green decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in greencol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

<table class="bgBlue" style="height: fit-content;">
    <thead><tr><th>
        Blue decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in bluecol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

<table class="bgPurple" style="height: fit-content;">
    <thead><tr><th>
        Purple decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in purplecol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

<table class="bgBrown" style="height: fit-content;">
    <thead><tr><th>
        Brown decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in browncol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

<table class="bgGray" style="height: fit-content;">
    <thead><tr><th>
        Gray decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in graycol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

<table class="bgSpecial" style="height: fit-content;">
    <thead><tr><th>
        Special decks
    </th></tr></thead>
    <tbody><tr><td>
        <ul>
        {% for deck in specialcol %}
            <li><a href="https://colors-tcg.eu/viewcards.php?deck={{ deck }}">{{ deck }}</a></li>
        {% endfor %}
        </ul>
    </td></tr></tbody>
</table>

</div>