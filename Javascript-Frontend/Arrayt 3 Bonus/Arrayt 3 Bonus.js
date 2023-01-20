function funktioMaanantai(){
    var yht = 0; //Antaa YHT arvon nolla
    var pyor = 0;
    var avg=0;
    var oikea=0;
    let maanantaiNappi = prompt("Kirjoita maanantain lämpötila");
    const maanantai=[maanantaiNappi]
    for (var i=0; i<maanantai.length; i++){ //for loop
        yht -=Number(maanantai[i]);//Laskee viikonpäivän Arrayn sisällä olevat arvot yhteensä.
    }

    var avg = -yht / maanantai.length; //Laskee keskiarvon
    var pyor = avg.toFixed(1); //Pyöristää yhden desimaalin kohdalle

    if(pyor<=15)
    {
        var oikea = pyor.fontcolor("blue");
        console.log("Maanantai "+ oikea + "°C" + '<br>');
        document.getElementById("vastausMaanantai").innerHTML= oikea+ "°C";
    }
    else if(pyor>=25)
    {
        var oikea =pyor.fontcolor("red");
        console.log("Maanantai "+ oikea + "°C" + '<br>');
        document.getElementById("vastausMaanantai").innerHTML= oikea+ "°C";
    }
    else
    {
        console.log("Maanantai "+ pyor + "°C" + '<br>');
        document.getElementById("vastausMaanantai").innerHTML= pyor+ "°C";
    }
    return pyor
}
    //Tiistain lämpötila
document.getElementById("tiistaiNappi");
function funktioTiistai(){
    var yht1=0;
    var pyor1=0;
    var avg1=0;
    var oikea1=0;
    let tiistaiNappi = prompt("Kirjoita tiistain lämpötila");
    const tiistai=[tiistaiNappi];
       
    for (var i=0; i<tiistai.length; i++){
        yht1 -=Number(tiistai[i]);
    }

    var avg1 = -yht1 / tiistai.length;
    var pyor1 = avg1.toFixed(1);
    if(pyor1<=15)
    {
        var oikea1 = pyor1.fontcolor("blue");
        console.log("Tiistai "+ oikea1 + "°C" + '<br>');
        document.getElementById("vastausTiistai").innerHTML= oikea1+ "°C";
    }
    else if(pyor1>=25)
    {
        var oikea1 =pyor1.fontcolor("red");
        console.log("Tiistai "+ oikea1 + "°C" + '<br>');
        document.getElementById("vastausTiistai").innerHTML= oikea1+ "°C";
    }
    else
    {
        console.log("Tiistai "+ pyor1 + "°C" + '<br>');
        document.getElementById("vastausTiistai").innerHTML= pyor1+ "°C";
    }
}
//Keskiviikon lämpötila
document.getElementById("keskiviikkoNappi");
function funktioKeskiviikko(){
    var yht2 =0;
    var pyor2 =0;
    var avg2 = 0;
    var oikea2=0;
    let keskiviikkoNappi = prompt("Kirjoita keskiviikon lämpötila");
    const keskiviikko=[keskiviikkoNappi];
    for (var i=0; i<keskiviikko.length; i++){
        yht2 -=Number(keskiviikko[i]);
    }

    var avg2 = -yht2 / keskiviikko.length;
    var pyor2 = avg2.toFixed(1);

    if(pyor2<=15)
    {
        var oikea2 = pyor2.fontcolor("blue");
        console.log("Keskiviikko "+ oikea2 + "°C" + '<br>');
        document.getElementById("vastausKeskiviikko").innerHTML= oikea2+ "°C";
    }
    else if(pyor2>=25)
    {
        var oikea2 =pyor2.fontcolor("red");
        console.log("Keskiviikko "+ oikea2 + "°C" + '<br>');
        document.getElementById("vastausKeskiviikko").innerHTML= oikea2+ "°C";
    }
    else
    {
        console.log("Keskiviikko "+ pyor2 + "°C" + '<br>');
        document.getElementById("vastausKeskiviikko").innerHTML= pyor2+ "°C";
    }
}
//Torstain lämpötila
document.getElementById("torstaiNappi");
function funktioTorstai(){
    var yht3 =0;
    var avg3=0;
    var pyor3=0;
    var oikea3=0;
    let torstaiNappi = prompt("Kirjoita torstain lämpötila");
    const torstai=[torstaiNappi];
    for (var i=0; i<torstai.length; i++){
        yht3 -=Number(torstai[i]);
    }

    var avg3 = -yht3 / torstai.length;
    var pyor3 = avg3.toFixed(1);

    if(pyor3<=15)
    {
        var oikea3 = pyor3.fontcolor("blue");
        console.log("Torstai "+ oikea3 + "°C" + '<br>');
        document.getElementById("vastausTorstai").innerHTML= oikea3+ "°C";
    }
    else if(pyor3>=25)
    {
        var oikea3 =pyor3.fontcolor("red");;
        console.log("Torstai "+ oikea3 + "°C" + '<br>');
        document.getElementById("vastausTorstai").innerHTML= oikea3+ "°C";
    }
    else
    {
        console.log("Torstai "+ pyor3 + "°C" + '<br>');
        document.getElementById("vastausTorstai").innerHTML= pyor3+ "°C";
    }
}
//Perjantain lämpötila
document.getElementById("perjantaiNappi");
function funktioPerjantai(){
    var yht4 =0;
    var avg4=0;
    var pyor4=0;
    var oikea4=0;
    let perjantaiNappi = prompt("Kirjoita perjantain lämpötila");
    const perjantai=[perjantaiNappi];
    
    for (var i=0; i<perjantai.length; i++){
        yht4 -=Number(perjantai[i]);
    }

    var avg4 = -yht4 / perjantai.length;;
    var pyor4 = avg4.toFixed(1);

    if(pyor4<=15)
    {
        var oikea4 = pyor4.fontcolor("blue");
        console.log("Perjantai "+ oikea4 + "°C" + '<br>');
        document.getElementById("vastausPerjantai").innerHTML=oikea4+ "°C";
    }
    else if(pyor4>=25)
    {
        var oikea4 =pyor4.fontcolor("red");
        console.log("Perjantai "+ oikea4 + "°C" + '<br>');
        document.getElementById("vastausPerjantai").innerHTML=oikea4+ "°C";
    }
    else
    {
        console.log("Perjantai "+ pyor4+ "°C" + '<br>');
        document.getElementById("vastausPerjantai").innerHTML=pyor4+ "°C";
    }
}
console.log(pyor3)
//Lauantain lämpötila
document.getElementById("lauantaiNappi");
function funktioLauantai(){
    var yht5 = 0;
    var avg5=0;
    var pyor5=0;
    var oikea5=0;
    let lauantaiNappi = prompt("Kirjoita lauantain lämpötila");
    const lauantai=[lauantaiNappi];

    for (var i=0; i<lauantai.length; i++){
        yht5 -=Number(lauantai[i]);
    }

    var avg5 = -yht5 / lauantai.length;
    var pyor5 = avg5.toFixed(1);

    if(pyor5<=15)
    {
        var oikea5 = pyor5.fontcolor("blue");
        console.log("Lauantai "+ oikea5 + "°C" + '<br>');
        document.getElementById("vastausLauantai").innerHTML= oikea5+ "°C";
    }
    else if(pyor5>=25)
    {
        var oikea5 =pyor5.fontcolor("red");
        console.log("Lauantai "+ oikea5 + "°C" + '<br>');
        document.getElementById("vastausLauantai").innerHTML= oikea5+ "°C";
    }
    else
    {
        console.log("Lauantai "+ pyor5 + "°C" + '<br>');
        document.getElementById("vastausLauantai").innerHTML= pyor5+ "°C";
    }
}

//Sunnuntain lämpötila
document.getElementById("sunnuntaiNappi");
function funktioSunnuntai(){
    var yht6 = 0;
    var avg6=0;
    var pyor6=0;
    var oikea6=0;
    let sunnuntaiNappi = prompt("Kirjoita sunnuntai lämpötila");
    const sunnuntai=[sunnuntaiNappi];

    for (var i=0; i<sunnuntai.length; i++){
        yht6 -=Number(sunnuntai[i]);
    }
    var avg6 = -yht6 / sunnuntai.length;
    var pyor6 = avg6.toFixed(1);

    if(pyor6<=15)
    {
        var oikea6 = pyor6.fontcolor("blue");
        console.log("Sunnuntai "+ oikea6 + "°C" + '<br>');
        document.getElementById("vastausSunnuntai").innerHTML= oikea6+ "°C";
    }
    else if(pyor6>=25)
    {
        var oikea6 =pyor6.fontcolor("red");
        console.log("Sunnuntai "+ oikea6 + "°C" + '<br>');
        document.getElementById("vastausSunnuntai").innerHTML= oikea6+ "°C";
    }
    else
    {   
        console.log("Sunnuntai "+ pyor6 + "°C" + '<br>');
        document.getElementById("vastausSunnuntai").innerHTML= pyor6+ "°C";
    }
}



//Kokoviikon lämpötila
document.getElementById("viikkoNappi");
function funktioViikko() {
    var yht7 = 0;
    var avg7=0;
    var pyor7=0;
    var oikea7=0;
    var viikonSaa=[pyor];
    for (var i=0; i<viikonSaa.length; i++) {
        yht7 -= Number(viikonSaa[i]);
    }
    console.log(pyor2)
    var avg7 = Number(-yht7) / viikonSaa.length;
    var pyor7 = Number(avg7).toFixed(1);

    if (pyor7<=15) {
        var oikea7 = pyor7.fontcolor("blue");
        console.log("Viikon lämpötila "+ oikea7 + "°C" + '<br>');
        document.getElementById("vastausViikko").innerHTML=oikea7+ "°C";
    } else if(pyor7>=25) {
        var oikea7 =pyor7.fontcolor("red");
        console.log("Viikon lämpötila "+ oikea7 + "°C" + '<br>');
        document.getElementById("vastausViikko").innerHTML=oikea7+ "°C";
    } else  {
        console.log("Viikon lämpötila "+ pyor7 + "°C" + '<br>');
        document.getElementById("vastausViikko").innerHTML=pyor7+ "°C";
    }
}