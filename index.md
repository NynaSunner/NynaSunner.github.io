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

This site was coded by hand using <img class="svg" src="https://cdn.simpleicons.org/jekyll/black"/>Jekyll, and it's mobile-friendly! It's a WIP, so please message me if something is wrong or if you have a suggestion ^^

<a href="https://hillhouse.neocities.org/journal/notes/palestine"><img src="/assets/img/standwith.png" alt="88x31 button with the flag of Palestine and the text 'Stand with Palestine'" title="Free Palestine!"></a>

***
## Status & updates

<div class="flex-wrapper">
  <div id="statuscafe" class="yellow-wrapper"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div><script src="https://status.cafe/current-status.js?name=nynasunner" defer></script>

  <div class="yellow-wrapper">
{% assign update = site.updates.last %}
    <b><a href="/updates/">{{ update.date | date: "%d/%m/%Y" }}</a>{% if update.code-upd8 %} 🛠{% endif %}</b>
{{ update.content | markdownify | strip_html | truncate: 145 }} <!-- truncatewords: 25 -->
  </div>
</div>

***
## To do

- Make a soft brown theme 🤎
- Revamp about page?
- Finish videogames page
- Better organize links page by categories
- Give the site credits links their own page
- **Switch to PHP! Maybe with Twig?**
- Remember this:


{% include img.html image="https://i.kym-cdn.com/photos/images/original/001/939/802/cb2.jpg" class="pic center" alt="The first rule of Fight Club is to have fun and be yourself :)" %}

***

<div class="center">
  <div id="bisexualism" style="display: inline-flex">
    <script type="text/javascript" src="https://emeowly.github.io/bi/onionring-variables.js" defer></script>
    <script type="text/javascript" src="https://emeowly.github.io/bi/onionring-img-widget.js" defer></script>
  </div>
  <a href="https://fire.norvrandt.org/fan" target="_blank" alt="Fire Emblem Fanlisting" title="Pick A God And Pray fanlisting"><img src="/assets/img/pagap.png"></a>
  <a href="https://kalechips.net/responsive" target="_blank" alt="Responsive Web Directory" title="Responsive Web Directory"><img src="/assets/img/rwd.png"></a>
  <a href="http://pkmn.caelestis.nu" target="_blank" rel="noopener noreferrer" style="border: 0px none; background: transparent;" title="I Choose You! :: GARCHOMP"><img src="/assets/img/garchomp.png" alt="I Choose You Pokémon clique" style="margin: auto -15px;"></a>
</div>

<!-- Microformats stuff -->
<div class="h-card" style="display: none;">
  <img class="u-photo" alt="the garlic from Plants Vs Zombies with a trollface and the text 'momazos nyna'" src="/assets/img/momazos-nyna.png"/>
  <a class="p-name u-url" href="https://nynasunner.space/">Nynasunner</a>
  <p class="p-note">Dumbass junior web developer who rambles occasionally and obsesses over mildly obscure things</p>
  <span class="p-country-name">Spain</span>
</div>