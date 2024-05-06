---
title: Games
header: Games
description: I only play cringe
permalink: /misc/games/
layout: default
---
PRIVATE PAGE GO THE FUCK AWAY!!!!

This is a collection of some games I've played

<div class="f-wrapper">

{% for game in site.media-logs %}
{% if game.type == "videogame" %}

<div class="grid-item" onclick="document.querySelector('#{{ game.short-name }}').showModal();">
{% capture pic %}{{ game.image }}{% endcapture %}
    <img src="{{ game.image }}" alt="{{ game.name }}" title="{{ game.name }}" class="cover tooltip">
    <dialog id="{{ game.short-name }}">
        <b style="font-size:2em">{{ game.name }}</b>
        {% include img.html image=pic class="l-float center" style="width:40%;max-width:20em;" %}
        {{ game.content | markdownify }}
        <br>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
</div>

{% endif %}
{% endfor %}

</div>



<style>
    .f-wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
    }
    .cover{
        width: 10em;
        cursor: pointer;
    }
    .grid-item dialog{
      width: 100%;
      max-width: 40em;
    }
</style>