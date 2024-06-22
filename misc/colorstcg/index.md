---
layout: colors
title: Home
permalink: /colors/
---

<!-- Some liquid stuff -->
{% assign keeping = site.data.colors.keeping | size %}
{% assign trading = site.data.colors.trading | size %}
{% assign totalcards = keeping | plus: trading %}

{% assign curr = site.data.colors.currencies %}
<!-- End liquid stuff -->


<div class="flexing">
<div markdown="1" class="flexing" style="border: 3px dotted; padding: 0 1em; margin-bottom:1em">
<img src="https://i.imgur.com/aYVApfm.png" alt="icon" id="pfp">
- **Player:** Nyna ([NynaSunner](https://nynasunner.dreamwidth.org/))
- **Level:** Yellow ({{ totalcards }}/300)
- **Birthday:** August
- **Join date:** 2024/05/24
- **Last updated:** {{ "now" | date: "%Y/%m/%d" }}
- **Trade post:** [here](https://nynasunner.dreamwidth.org/442.html)
</div>
</div>
<div class="center">
    <img src="https://colors-tcg.eu/banners/level_january04_03.gif" alt="level yellow">
</div>

***

<div id="crayonscontainer">
    <h3>Crayons</h3>
    <br>
    <span><img src="/assets/img/colors/currency/redcrayon.gif">x {{ curr[0].amount }}</span>
    <span><img src="/assets/img/colors/currency/orangecrayon.gif">x {{ curr[1].amount }}</span>
    <span><img src="/assets/img/colors/currency/yellowcrayon.gif">x {{ curr[2].amount }}</span>
    <span><img src="/assets/img/colors/currency/greencrayon.gif">x {{ curr[3].amount }}</span>
    <span><img src="/assets/img/colors/currency/bluecrayon.gif">x {{ curr[4].amount }}</span>
    <span><img src="/assets/img/colors/currency/purplecrayon.gif">x {{ curr[5].amount }}</span>
    <span><img src="/assets/img/colors/currency/browncrayon.gif">x {{ curr[6].amount }}</span>
    <span><img src="/assets/img/colors/currency/graycrayon.gif">x {{ curr[7].amount }}</span>
</div>

<div class="flexing">
    <div id="sketchpads">
        <h3>Sketchpads</h3>
        <div class="flexing">
            <div>
                <b>Current</b><br>
                <img src="/assets/img/colors/sketchpads/sketchpad{{ curr[8].amount | modulo: 20 }}.gif" alt="{{ curr[8].amount | modulo: 20 }}" title="{{ curr[8].amount | modulo: 20 }}/20">
            </div>
            <div>
                <b>Completed</b><br>
                <img src="/assets/img/colors/sketchpads/sketchpad20.gif">x {{ curr[8].amount | divided_by: 20 | floor }}
            </div>
            <div>
                <p><b>Turned in:</b> 0</p>
            </div>
        </div>
    </div>
</div>

***
### Pending trades

None!