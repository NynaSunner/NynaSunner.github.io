async function cargarSelects() {
    let obj;
  
    const res = await fetch('/misc/tools/bayas.json')
  
    obj = await res.json();

    // The rest~

    let drop1 = document.getElementById('baya1');
    let drop2 = document.getElementById('baya2');
    let drop3 = document.getElementById('baya3');
    let drop4 = document.getElementById('baya4');
    
    obj.forEach(baya => {
        drop1.innerHTML += '<option value="' + baya.nombre + '">' + baya.nombre + '</option>';
        drop2.innerHTML += '<option value="' + baya.nombre + '">' + baya.nombre + '</option>';
        drop3.innerHTML += '<option value="' + baya.nombre + '">' + baya.nombre + '</option>';
        drop4.innerHTML += '<option value="' + baya.nombre + '">' + baya.nombre + '</option>';
    });
}
  
cargarSelects();

async function calculo(){
    let obj;
  
    const res = await fetch('/misc/tools/bayas.json')
  
    obj = await res.json();

    // Moarrr~

    let baya1 = document.getElementById('baya1').value;
    let baya2 = document.getElementById('baya2').value;
    let baya3 = document.getElementById('baya3').value;
    let baya4 = document.getElementById('baya4').value;

    let spanPicante = document.getElementById('picante');
    let spanSeco = document.getElementById('seco');
    let spanDulce = document.getElementById('dulce');
    let spanAmargo = document.getElementById('amargo');
    let spanAcido = document.getElementById('acido');
    let spanTersura = document.getElementById('tersura');

    let arrBayas = [];
    if(baya1 != "ninguna"){arrBayas.push(baya1)}
    if(baya2 != "ninguna"){arrBayas.push(baya2)}
    if(baya3 != "ninguna"){arrBayas.push(baya3)}
    if(baya4 != "ninguna"){arrBayas.push(baya4)}

    let aux;

    let arrScore = [0, 0, 0, 0, 0, 0];

    arrBayas.forEach(baya => {
        aux = obj.find(o => o.nombre === baya);

        if(aux != null){
            arrScore[0] += aux.picante;
            arrScore[1] += aux.seco;
            arrScore[2] += aux.dulce;
            arrScore[3] += aux.amargo;
            arrScore[4] += aux.acido;
            arrScore[5] += aux.tersura;
        }
    });

    // EXTRA CALCULATION BS BECAUSE IT ISN'T AS EASY AS THAT, NOOOO IT HAD TO DO WEIRD SHIT

    let picante = arrScore[0];
    let seco = arrScore[1];
    let dulce = arrScore[2];
    let amargo = arrScore[3];
    let acido = arrScore[4];

    arrScore[0] -= seco;
    arrScore[1] -= dulce;
    arrScore[2] -= amargo;
    arrScore[3] -= acido;
    arrScore[4] -= picante;

    let decrease = 0;

    for (let i = 0; i < arrScore.length; i++) {
        if(arrScore[i] < 0){
            decrease++;
            arrScore[i] = 0;
        }
    }

    if(decrease > 0){
        for (let i = 0; i < arrScore.length - 1; i++) {
            arrScore[i] -= decrease;
            if(arrScore[i] < 0){
                arrScore[i] = 0;
            }
            else if(arrScore[i] > 99){
                arrScore[i] = 99;
            }
        }
    }

    // VI LA FÓRMULA DE LA TERSURA EN BULBAPEDIA Y CAGUÉ PA DENTRO, PERO ES SOLO LA MEDIA - LA CANTIDAD DE BAYAS

    arrScore[5] = Math.floor(arrScore[5]/arrBayas.length) - arrBayas.length;

    spanPicante.innerHTML = arrScore[0];
    spanSeco.innerHTML = arrScore[1];
    spanDulce.innerHTML = arrScore[2];
    spanAmargo.innerHTML = arrScore[3];
    spanAcido.innerHTML = arrScore[4];
    spanTersura.innerHTML = arrScore[5];
}