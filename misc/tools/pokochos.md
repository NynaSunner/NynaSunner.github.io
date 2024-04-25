---
title: Calculadora de pokochos
header: Calculadora de pokochos
description:
permalink: /tools/pokochos/
layout: default
---
<script src="/misc/tools/pokochos.js" type="text/javascript"></script>

<label for="baya1">Baya 1</label>
<select name="baya1" id="baya1">
    <option value="ninguna">Ninguna</option>
</select>

<label for="baya2">Baya 2</label>
<select name="baya2" id="baya2">
    <option value="ninguna">Ninguna</option>
</select>

<label for="baya3">Baya 3</label>
<select name="baya3" id="baya3">
    <option value="ninguna">Ninguna</option>
</select>

<label for="baya4">Baya 4</label>
<select name="baya4" id="baya4">
    <option value="ninguna">Ninguna</option>
</select>

<button onclick="calculo()">CALCULAR</button>

***

- Picante: <span id="picante"></span>
- Seco: <span id="seco"></span>
- Dulce: <span id="dulce"></span>
- Amargo: <span id="amargo"></span>
- Ácido: <span id="acido"></span>
- Tersura: <span id="tersura"></span>

***
## Notas

- El nivel del pokocho se determina por la potencia del sabor más fuerte.
    - Si un pokocho tiene 2 sabores se nombrará con el sabor más potente primero. Si ambos tienen la misma potencia se le da prioridad al que esté más arriba de la lista (osea picante > seco > dulce > amargo > ácido).
- Mezclar la misma baya dos o más veces o tener una puntuación de 0 en todos los sabores resultará en un pokocho chungo.
    - Un pokocho chungo siempre tendrá nivel 2 y 3 sabores al azar.
- Un pokocho de 3 sabores es un pokocho pastoso.
- Un pokocho de 4 sabores es un pokocho sustancioso.
- Un pokocho de nivel 50 o más es un pokocho suave.
    - El pokocho suave aumenta las 5 características.
    - En BDSP un pokocho de nivel 95 o más hecho perfectamente es un pokocho arcoiris. No tiene ninguna cualidad distinta al pokocho suave normal.

<style>
    #picante{
        background-color: #ff3c006b;
        padding: 0 .2em;
    }
    #seco{
        background-color: #0058ff78;
        padding: 0 .2em;
    }
    #dulce{
        background-color: #dd2a8682;
        padding: 0 .2em;
    }
    #amargo{
        background-color: #06d90675;
        padding: 0 .2em;
    }
    #acido{
        background-color: #ffff005e;
        padding: 0 .2em;
    }
</style>