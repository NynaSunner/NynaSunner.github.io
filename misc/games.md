---
title: Games
header: Games
description: I only play cringe
permalink: /misc/games/
layout: default
---
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
PRIVATE PAGE GO THE FUCK AWAY!!!!

This is a collection of some games I've played

<div class="grid" data-isotope='{ "itemSelector": ".grid-item", "masonry": { "columnWidth": 200 } }'>

{% for game in site.media-logs reversed %}
{% if game.type == "videogame" %}

<div class="grid-item">
    <img src="{{ game.image }}" alt="{{ game.name }}" class="cover">
    {{ game.content | markdownify }}
</div>

{% endif %}
{% endfor %}

</div>



<style>
    .cover{
        width: 10em;
    }
</style>



<script>
    // vanilla JS
    var grid = document.querySelector('.grid');
    var iso = new Isotope( grid, {
      // options...
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 200
      }
    });
</script>

<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
<script defer> // Tooltips in images
    tippy('.cover', {
        content: (reference) => reference.getAttribute('alt'),
        interactive: true,
    });
</script>