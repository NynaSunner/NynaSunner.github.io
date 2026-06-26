---
title:
header:
description: My awful homepage
permalink: /
layout: default
---

{% include card.html %}

<div class="center" style="margin-bottom:1em;"><img src="/assets/img/yourmom.gif" alt="your mom sexy i sexed her epic robux" class="freezeframe"></div>

***

# Under renovations

Hello, I've been meaning for a long time to redo my whole site because I don't like it anymore. Also, yes I am still alive (barely).

I'm planning on using 11ty this time instead of Jekyll. Don't worry, I'll try to keep the URLs of my tools like the [Extended Zodiac chart](/tools/extended-zodiac) the same so it won't break if you have it bookmarked.

<a href="https://hillhouse.neocities.org/journal/notes/palestine"><img src="/assets/img/standwith.png" alt="Stand with Palestine" title="Free Palestine!"></a>

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
  <a href="https://duo.dual-weekend.com/index.php" target="_blank" alt="Duo Fanlisting" title="Duo Fanlisting"><img src="/assets/img/diadop.png"></a>
  <a href="https://pkmn.aquarel.nu/" target="_blank" title="I Choose You! :: GARCHOMP"><img src="/assets/img/garchomp.png" alt="I Choose You Pokémon clique" style="margin: auto -15px;"></a>
</div>

<!-- Microformats stuff -->
<div class="h-card" style="display: none;">
  <img class="u-photo" alt="momazos nyna" src="/assets/img/momazos-nyna.png"/>
  <a class="p-name u-url" href="https://nynasunner.space/">Nynasunner</a>
  <p class="p-note">Dumbass junior web developer who rambles occasionally and obsesses over mildly obscure things</p>
  <span class="p-country-name">Spain</span>
</div>