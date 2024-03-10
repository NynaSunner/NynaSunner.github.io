---
title: Home
header:
description: My awful homepage
permalink: /
layout: default
---

{% include card.html %}

<div class="center" style="margin-bottom:1em;"><img src="/assets/img/yourmom.gif" alt="your mom sexy i sexed her epic robux" class="freezeframe"></div>

***

# Welcome to my mess of a site

- Do you come from nynasunner.**github.io**? My new URL is nynasunner.**space**!

Heya! Welcome to my site!

This is the place where I plan to share and post stuff I come across while sailing the internet, along with any projects I might work in. If you find something that might interest me don't hesitate to message me! 💜

This site was coded by hand using <img class="svg" src="https://cdn.simpleicons.org/jekyll/black"/>Jekyll, and it's mobile-friendly! It's a WIP, so please message me if something is wrong or if you have a suggestion

***
## Status & updates

<div class="flex-wrapper">
  <div id="statuscafe" class="yellow-wrapper"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div><script src="https://status.cafe/current-status.js?name=nynasunner" defer></script>

  <div class="yellow-wrapper">
{% assign microblog = site.microblog.last %}
    <b><a href="/microblog/">{{ microblog.date | date: "%d/%m/%Y" }}</a>{% if microblog.code-upd8 %} 🛠{% endif %}</b>
{{ microblog.content | markdownify | strip_html | truncate: 145 }} <!-- truncatewords: 25 -->
  </div>
</div>

***
## To do

- Add a higher contrast dark theme for accessibility
- Fix current tooltips overflowing to the right
- Let the user enable or disable gifs altogether, with the current play-on-hover being the default setting. Take `prefers-reduced-motion` into account
- Have gifs (at least dangerous ones) stop without javascript with `prefers-reduced-motion`
- Add a font picker maybe?
- Better organize links page by categories
- **Switch to PHP! Maybe with Twig?**
- Remember this:

<div class="center">
{% include img.html image="https://i.kym-cdn.com/photos/images/original/001/939/802/cb2.jpg" alt="The first rule of Fight Club is to have fun and be yourself :)" %}
</div>

***

<div class="center">
  <a href="https://fire.norvrandt.org/fan" target="_blank" alt="Fire Emblem Fanlisting" title="Pick A God And Pray fanlisting"><img src="/assets/img/pagap.png"></a>
  <a href="https://kalechips.net/responsive" target="_blank" alt="Responsive Web Directory" title="Responsive Web Directory"><img src="/assets/img/rwd.png"></a>
  <a href="http://pkmn.caelestis.nu" target="_blank" rel="noopener noreferrer" style="border: 0px none; background: transparent;" title="I Choose You! :: GARCHOMP"><img src="/assets/img/garchomp.png" alt="I Choose You Pokémon clique" style="margin: auto -15px;"></a>
</div>