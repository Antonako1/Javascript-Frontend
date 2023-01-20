//Maanantain sää
const maanantai=["29","19","17"]
let yht =""; //Antaa YHT arvon nolla
    for (var i=0; i<maanantai.length; i++){ //for loop
        yht -=maanantai[i];//Laskee viikonpäivän Arrayn sisällä olevat arvot yhteensä.
    }
    let avg = -yht / maanantai.length; //Laskee keskiarvon
    let pyor = avg.toFixed(1) //Pyöristää yhden desimaalin kohdalle
    document.write("Maanantai "+ pyor + "°C" + '<br>') //Kirjoittaa sivulle annetun tekstin
//Tiistain sää

const tiistai=["18","12","11"]
    let yht1="";
    for (var i=0; i<tiistai.length; i++){
        yht1 -=tiistai[i];
    }
    let avg1 = -yht1 / tiistai.length;
    let pyor1 = avg1.toFixed(1)
    document.write("Tiistai "+ pyor1 + "°C" + '<br>')
//Keskiviikon sää

const keskiviikko=["28","16","20"]
let yht2 ="";
    for (var i=0; i<keskiviikko.length; i++){
        yht2 -=keskiviikko[i];
    }
    let avg2 = -yht2 / keskiviikko.length;
    let pyor2 = avg2.toFixed(1)
    document.write("Keskiviikko "+ pyor2 + "°C" + '<br>')

//Torstain sää
const torstai=["23","29","30"]
let yht3 ="";
    for (var i=0; i<torstai.length; i++){
        yht3 -=torstai[i];
    }
    let avg3 = -yht3 / torstai.length;
    let pyor3 = avg3.toFixed(1)
    document.write("Torstai "+ pyor3 + "°C" + '<br>')

//Perjantain sää
const perjantai=["9","8","1"]
let yht4 ="";
    for (var i=0; i<perjantai.length; i++){
        yht4 -=perjantai[i];
    }
    let avg4 = -yht4 / perjantai.length;
    let pyor4 = avg4.toFixed(1)
    document.write("Perjantai "+ pyor4 + "°C" + '<br>')

//Lauantain sää
const lauantai=["-4","-6","0"]
let yht5 ="";
    for (var i=0; i<lauantai.length; i++){
        yht5 -=lauantai[i];
    }
    let avg5 = -yht5 / lauantai.length;
    let pyor5 = avg5.toFixed(1)
    document.write("Lauantai "+ pyor5 + "°C" + '<br>')

//Sunnuntain sää
const sunnuntai=["1","8","5"]
let yht6 ="";
    for (var i=0; i<sunnuntai.length; i++){
        yht6 -=sunnuntai[i];
    }
    let avg6 = -yht6 / sunnuntai.length;
    let pyor6 = avg6.toFixed(1)
    document.write("Sunnuntai "+ pyor6 + "°C" + '<br>')

    const viikko=[pyor, pyor1, pyor2, pyor3, pyor4, pyor5, pyor6]
let yht7 ="";
    for (var i=0; i<viikko.length; i++){
        yht7 -=viikko[i];
    }
    let avg7 = -yht7 / viikko.length;
    let pyor7 = avg7.toFixed(1)
    document.write("viikko "+ pyor7 + "°C" + '<br>')
    console.log(pyor7)