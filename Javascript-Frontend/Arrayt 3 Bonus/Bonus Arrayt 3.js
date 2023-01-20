var viikonPaivat = {};
var viikonSaaLista = [];


//Maanantain sää
viikonPaivat.maanantai = function() {
    let maanantai = Number(prompt("Anna maanantain sää"));
    viikonSaaLista.push(maanantai);
    console.log(viikonSaaLista);
    let pyoristysMaanantai = maanantai.toFixed(1) //Pyöristää yhden desimaalin kohdalle
    if(pyoristysMaanantai<=15) {
        document.getElementById("vastausMaanantai").style.color = "blue";
        console.log("sin")
        document.getElementById("vastausMaanantai").innerHTML= pyoristysMaanantai+ "°C";
    }
    else if(pyoristysMaanantai>=25) {
        document.getElementById("vastausMaanantai").style.color = "red";
        document.getElementById("vastausMaanantai").innerHTML= pyoristysMaanantai+ "°C";
    }
    else {
        document.getElementById("vastausMaanantai").innerHTML= pyoristysMaanantai+ "°C";
    }
    document.getElementById("vastausMaanantai").innerHTML = "Maanantain sää "+ pyoristysMaanantai + "°C" + "<br>"; //Kirjoittaa sivulle annetun tekstin
}

//Tiistain sää
viikonPaivat.tiistai = function() {
    let tiistai = Number(prompt("Anna tiistain sää"));
    viikonSaaLista.push(tiistai);
    console.log(viikonSaaLista);
    let pyoristyTiistai = tiistai.toFixed(1) //Pyöristää yhden desimaalin kohdalle
    if(pyoristyTiistai<=15) {
        document.getElementById("vastausTiistai").style.color = "blue";
        console.log("sin")
        document.getElementById("vastausTiistai").innerHTML= pyoristyTiistai+ "°C";
    }
    else if(pyoristyTiistai>=25) {
        document.getElementById("vastausTiistai").style.color = "red";
        document.getElementById("vastausTiistai").innerHTML= pyoristyTiistai+ "°C";
    }
    else {
        document.getElementById("vastausTiistai").innerHTML= pyoristyTiistai+ "°C";
    }
    document.getElementById("vastausTiistai").innerHTML = "Tiistain sää "+ pyoristyTiistai + "°C" + "<br>"; //Kirjoittaa sivulle annetun tekstin
}
//Keskiviikon sää
viikonPaivat.keskiviikko = function() {
    let keskiviikko = Number(prompt("Anna keskiviikon sää"));
    viikonSaaLista.push(keskiviikko);
    let pyoristyKeskiviikko = keskiviikko.toFixed(1) //Pyöristää yhden desimaalin kohdalle
    if(pyoristyKeskiviikko<=15) {
        document.getElementById("vastausKeskiviikko").style.color = "blue";
        console.log("sin")
        document.getElementById("vastausKeskiviikko").innerHTML= pyoristyKeskiviikko+ "°C";
    }
    else if(pyoristyKeskiviikko>=25) {
        document.getElementById("vastausKeskiviikko").style.color = "red";
        document.getElementById("vastausKeskiviikko").innerHTML= pyoristyKeskiviikko+ "°C";
    }
    else {
        document.getElementById("vastausKeskiviikko").innerHTML= pyoristyKeskiviikko+ "°C";
    }
    document.getElementById("vastausKeskiviikko").innerHTML = "Keskiviikon sää "+ pyoristyKeskiviikko + "°C" + "<br>"; //Kirjoittaa sivulle annetun tekstin
}
//Torstain sää
viikonPaivat.torstai = function() {
    let torstai = Number(prompt("Anna torstain sää"));
    viikonSaaLista.push(torstai);
    let pyoristyTorstai = torstai.toFixed(1) //Pyöristää yhden desimaalin kohdalle
    if(pyoristyTorstai<=15) {
        document.getElementById("vastausTorstai").style.color = "blue";
        console.log("sin")
        document.getElementById("vastausTorstai").innerHTML= pyoristyTorstai+ "°C";
    }
    else if(pyoristyTorstai>=25) {
        document.getElementById("vastausTorstai").style.color = "red";
        document.getElementById("vastausTorstai").innerHTML= pyoristyTorstai+ "°C";
    }
    else {
        document.getElementById("vastausTorstai").innerHTML= pyoristyTorstai+ "°C";
    }
    document.getElementById("vastausTorstai").innerHTML = "Torstain sää "+ pyoristyTorstai + "°C" + "<br>"; //Kirjoittaa sivulle annetun tekstin
}
//Perjantain sää
viikonPaivat.perjantai = function() {
    let perjantai = Number(prompt("Anna perjantai sää"));
    viikonSaaLista.push(perjantai);
    let pyoristyPerjantai = perjantai.toFixed(1) //Pyöristää yhden desimaalin kohdalle
    if(pyoristyPerjantai<=15) {
        document.getElementById("vastausPerjantai").style.color = "blue";
        document.getElementById("vastausPerjantai").innerHTML= pyoristyPerjantai+ "°C";
    }
    else if(pyoristyPerjantai>=25) {
        document.getElementById("vastausPerjantai").style.color = "red";
        document.getElementById("vastausPerjantai").innerHTML= pyoristyPerjantai+ "°C";
    }
    else {
        document.getElementById("vastausPerjantai").innerHTML= pyoristyPerjantai+ "°C";
    }
    document.getElementById("vastausPerjantai").innerHTML = "Perjantai sää "+ pyoristyPerjantai + "°C" + "<br>"; //Kirjoittaa sivulle annetun tekstin
}
//Lauantain sää
viikonPaivat.lauantai = function() {
    let lauantai = Number(prompt("Anna lauantain sää"));
    viikonSaaLista.push(lauantai);
    let pyoristyLauantai = lauantai.toFixed(1) //Pyöristää yhden desimaalin kohdalle
    if(pyoristyLauantai<=15) {
        document.getElementById("vastausLauantai").style.color = "blue";
        document.getElementById("vastausLauantai").innerHTML= pyoristyLauantai+ "°C";
    }
    else if(pyoristyLauantai>=25) {
        document.getElementById("vastausLauantai").style.color = "red";
        document.getElementById("vastausLauantai").innerHTML= pyoristyLauantai+ "°C";
    }
    else {
        document.getElementById("vastausLauantai").innerHTML= pyoristyLauantai+ "°C";
    }
    document.getElementById("vastausLauantai").innerHTML = "Lauantain sää "+ pyoristyLauantai + "°C" + "<br>"; //Kirjoittaa sivulle annetun tekstin
}
//Sunnuntain sää
viikonPaivat.sunnuntai = function() {
    let sunnuntai = Number(prompt("Anna sunnuntain sää"));
    viikonSaaLista.push(sunnuntai);
    let pyoristySunnuntai = sunnuntai.toFixed(1) //Pyöristää yhden desimaalin kohdalle
    if(pyoristySunnuntai<=15) {
        document.getElementById("vastausSunnuntai").style.color = "blue";
        document.getElementById("vastausSunnuntai").innerHTML= pyoristySunnuntai+ "°C";
    }
    else if(pyoristySunnuntai>=25) {
        document.getElementById("vastausSunnuntai").style.color = "red";
        document.getElementById("vastausSunnuntai").innerHTML= pyoristySunnuntai+ "°C";
    }
    else {
        document.getElementById("vastausSunnuntai").innerHTML= pyoristySunnuntai+ "°C";
    }
    document.getElementById("vastausSunnuntai").innerHTML = "Sunnuntain sää "+ pyoristySunnuntai + "°C" + "<br>"; //Kirjoittaa sivulle annetun tekstin
}
//Kokoviikon sää
viikonPaivat.kokoviikko = function () {
    var laske = 0;
    var pyoristaa = 0;
    for(i=0;i<viikonSaaLista.length;i++){
        laske = laske + viikonSaaLista[i];
        pyoristaa = laske / viikonSaaLista.length;
        pyoristyViikko = pyoristaa.toFixed(1);
    }
    if(pyoristyViikko<=15) {
        document.getElementById("vastausViikko").style.color = "blue";
        document.getElementById("vastausViikko").innerHTML= pyoristyViikko+ "°C";
    }
    else if(pyoristyViikko>=25) {
        document.getElementById("vastausViikko").style.color = "red";
        document.getElementById("vastausViikko").innerHTML= pyoristyViikko+ "°C";
    }
    else {
        document.getElementById("vastausViikko").innerHTML= pyoristyViikko+ "°C";
    }
    document.getElementById("vastausViikko").innerHTML = "Kokoviikon sää "+ pyoristyViikko + "°C" + "<br>";
}