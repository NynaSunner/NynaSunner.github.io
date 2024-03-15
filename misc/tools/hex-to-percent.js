function toHex(valNum) {
    var decimalValue = Math.round(valNum*255/100);
    
    if (valNum < 7) {
        var hexValue = "0"+decimalValue.toString(16).toUpperCase();
    }
    else {
        var hexValue = decimalValue.toString(16).toUpperCase();
    }
    
    return hexValue;
}

function percentToHex(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;

    var hex = "";
    hex = hex.concat(toHex(red), toHex(green), toHex(blue));

    document.getElementById("hex").value = hex;
    document.getElementById("color").style.backgroundColor = "#" + hex;
}

function toPercent(valNum) {
    var hexValue = parseInt(valNum, 16)/255*100; // I prefer not to round the percentages for accuracy
    return hexValue;
}

function hexToPercent(){
    var hex = document.getElementById("hex").value;

    var red = hex.substring(0, 2);
    var green = hex.substring(2, 4);
    var blue = hex.substring(4, 6);

    document.getElementById("red").value = toPercent(red);
    document.getElementById("green").value = toPercent(green);
    document.getElementById("blue").value = toPercent(blue);

    document.getElementById("color").style.backgroundColor = "#" + hex;
}