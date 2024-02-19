---
title: Hex to percent converter
header: Hex to percent converter
description: A tool to convert a hexadecimal color to a percentual one, and vice-versa.
permalink: /misc/hex-to-percent/
layout: default
---
(and vice-versa)

<script src="/misc/hex_to_percent.js" type="text/javascript"></script>

<label for="color">Output color</label>
<div id="color" style="height:100px; width:100px; background-color:black; border:2px solid gray;"></div>

<label for="hex">Hex [000000 - FFFFFF]</label><br>
<input id="hex" type="text" maxlength="6" placeholder="000000" pattern="/^#?([a-f0-9]{6}|[a-f0-9]{3})$/" autocomplete="off" oninput="hexToPercent()" onchange="hexToPercent()"><br><br>

<label for="red">Red [0 - 100]</label><br>
<input id="red" type="number" min="0" max="100" maxlength="4" placeholder="0" step=".1" autocomplete="off" oninput="percentToHex()" onchange="percentToHex()"><br><br>

<label for="green">Green [0 - 100]</label><br>
<input id="green" type="number" min="0" max="100" maxlength="4" placeholder="0" step=".1" autocomplete="off" oninput="percentToHex()" onchange="percentToHex()"><br><br>

<label for="blue">Blue [0 - 100]</label><br>
<input id="blue" type="number" min="0" max="100" maxlength="4" placeholder="0" step=".1" autocomplete="off" oninput="percentToHex()" onchange="percentToHex()"><br><br>

