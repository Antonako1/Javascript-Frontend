var global_array1 = [];
var global_yksikko = "";
var suositus;

function funktioSuositus (){//laittaa suositusmäärän lääkkeelle
    suositus = Number(prompt("Kirjoita suositusmäärä"));
    document.getElementById("suositus").innerHTML="Suositus: " + suositus + " " + global_yksikko;
}
function yksikko(){//määrittää mittausyksikön
    var yksikko = String(prompt("Kirjoita mittayksikkö (esim. l, ml, g)"));
    global_yksikko=(yksikko);
}


function lista(){//ottaa annoksen määrän vastaan ja työntää sen listaan
    var idea = Number(prompt("Kirjoita annoksen määrä"));
    global_array1.push(idea);
    tulostaLista();

}
function poista (){//poistaa listasta viimeisimmän asian
    global_array1.pop();
    tulostaLista();
}

function tulostaLista(){//tekee listan 
    annosKoko();
    laakeMaara();
    isoinMaara();
    ylitys();
    var lisaaListaan = document.getElementById("list_items");
    lisaaListaan.innerHTML="";
    for(i=0;i< global_array1.length;i++ ){
        lisaaListaan.innerHTML += "<li>"+ "Annos "+ (i+1) +": " + global_array1[i]+ " " + global_yksikko + " </li>";
    }
    
}

function annosKoko(){//mittaa oliko annos saman suuruinen, pienemp tai isompi
    for(i=0;i<global_array1.length;i++){
        var edellinen=global_array1[i-1];
        var nykyinen=global_array1[i];
    }
    tmp="";
    if(edellinen < nykyinen){
        tmp="Suurempi kuin edellinen annos";
    }else if (edellinen == nykyinen){
        tmp="Saman suuruinen kuin edellinen";
    }else{
        tmp="Pienempi kuin edellinen annos";
    }
    document.getElementById("suurempi").innerHTML=tmp;
}


function ylitys(){//laskee ylittyikö lääkesuositusmäärä
    var ylitys=0;
    for(i=0;i<global_array1.length;i++){
        ylitys= ylitys+global_array1[i];
    }
    tmp="";
    if(ylitys<=suositus){
        tmp="ei ylittynyt";
    }else{
        tmp="ylittyi";
    }
    document.getElementById("ylitys").innerHTML="Lääkesuositusmäärä "+tmp;
}

function laakeMaara(){//laskee kuinka paljon lääkettä on jäljellä
    var jaljella=Number(suositus);
    for(i=0;i<global_array1.length;i++){
        jaljella=jaljella-global_array1[i];
    }
    document.getElementById("laakeMaara").innerHTML= jaljella+" "+global_yksikko +" jäljellä";
}

function isoinMaara(){//laskee isoimman annetun lääkemäärän
    console.log(isoin);
    var isoin=0;
    for(i=0;i<global_array1.length;i++){
        isoin=Math.max.apply(null, global_array1)
    }
    console.log(isoin);
    document.getElementById("isoin").innerHTML="Suurin annoskoko: "+isoin + " "+global_yksikko ; 
}