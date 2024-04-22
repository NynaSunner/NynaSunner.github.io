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
<input id="testurl" type="text" onchange="ball()">

<ul id="results"></ul>

<canvas id="graph" width="0" height="0"></canvas>


***

### Notes

The calculations are wrong. I was led to [this Tumblr post](https://kreuz-unlimited.tumblr.com/private/168154366989/tumblr_p0edqyYPpj1rdm00w) for info on how the test works but it's wrong. This is because:
- You shouldn't be able to get a negative score.
- I know for certain that getting points on one Aspect gives a few points to the opposite Aspect.

### Todo
- Figure out how the damn test works myself and fix the math
- Add aspect wheel graph

<script>
    
</script>

<style>
    canvas{
        background-image: url(http://hs.hiveswap.com/ezodiac/images/aspects.png);
        background-position: center;
        background-size: cover;
    }
</style>