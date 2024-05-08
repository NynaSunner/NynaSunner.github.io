---
title: Extended Zodiac chart
header: Extended Zodiac chart
description: Take the URL of your Extended Zodiac results to see what score you got in all Aspects.
permalink: /tools/extended-zodiac/
layout: default
---
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="/misc/tools/extended-zodiac.js" type="text/javascript"></script>

<label for="testurl">Extended Zodiac results URL:</label><br>
<input id="testurl" type="text" style="width: 25em;">

<button onclick="ball()">Calculate</button>

***

<ul id="results"></ul>

<canvas id="graph" width="0" height="0"></canvas>

### How to use
1. Take the [Extended Zodiac test](http://hs.hiveswap.com/ezodiac/begintest.php) up until it tells you your Aspect (right before showing what Sign you got).
2. Copy the URL of the page, paste it into the textbox and click "Calculate".

<script>
    
</script>

<style>
    canvas{
        background-image: url(/assets/img/hs/aspects.png); /* Stupid ass Hiveswap page is http so my antivirus hates it and deletes the image */
        background-position: center;
        background-size: cover;
    }
</style>