---
title: Extended Zodiac chart
header: Extended Zodiac chart
description: Take the URL of your Extended Zodiac results to see what score you got in all Aspects.
permalink: /misc/tools/extended-zodiac/
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

<script>
    
</script>

<style>
    canvas{
        background-image: url(http://hs.hiveswap.com/ezodiac/images/aspects.png);
        background-position: center;
        background-size: cover;
    }
</style>