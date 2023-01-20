var global_sade = -1; //tekee varit globaaleiksi että niitä voi käyttää funktion ulkopuolella
var global_lampo = -1;
var global_aurinko = -1;

function funktioAurinko(aurinko){ // tekee funktion auringon paisteelle
    var tmp = "";   //tmp on tekstille oleva var
    if (aurinko == true) { //jos aurinko on tosi
        global_aurinko = 1;// niin global_aurinko on 1 eli tosi
        tmp = "Aurinko paistaa."; //tekstikohtaan tulee Aurinko paistaa
    } else {    
        global_aurinko = 0; //global_aurinko on o eli epätosi
        tmp = "Aurinko ei paista.";     //teksti kirjoittaa Aurinko ei paista
    }

    document.getElementById("aurinkoVastaus").innerHTML=tmp;    //html kohtaan aurinkoVastaus tulee tmpeessä oleva teksti
}

function funktioSade(sade){
    var tmp = "";
    if (sade == true) {
        global_sade = 1;
        tmp = "Vettä sataa.";
    } else {
        global_sade = 0;
        tmp = "Vettä ei sada.";
    }

    document.getElementById("sadeVastaus").innerHTML=tmp;
}

function funktioLampo(lampo){
    var tmp = "";
    if (lampo == true) {
        global_lampo = 1;
        tmp = "Yli 0 astetta..";
    } else {
        global_lampo = 0;
        tmp = "Alle 0 astetta.";
    }

    document.getElementById("lampoVastaus").innerHTML=tmp;
}
function funktioVastaus(aurinko, sade, lampo) {
    var tmp="";
    if (global_sade != -1 && global_lampo != -1 && global_aurinko != -1) { //jos global on erisuurempi kuin -1 niin se tekee sisällä olevan iffin
        console.log(aurinko + sade + lampo)
        if(aurinko == 1 && sade==1 && lampo==1) { //jos kaikki on 1
            tmp="Aurinko paistaa ja vettä sataa taitaa tulla kesä."; //tmp kirjoittaa tuon htmllään
        } else if(aurinko==0 && sade==1 && lampo==1) {
            tmp = "Syksy saapui lehdet vei tuuli mennessään.";
        }else if((aurinko==0 && sade==0 && lampo==1) || (aurinko==1 && sade==0 && lampo==1)){
            tmp="Jo joutui armas aika ja suvi suloinen.";
        }else if(aurinko==1 && sade==1 && lampo==0){
            tmp="Paras keli ikinä"
        }else if(aurinko==0 && sade==1 && lampo==0){
            tmp="Joulukeli"
        }else if(aurinko==1 && sade==0 && lampo==0){
            tmp="Syysaamu"
        }
    
        else {
            tmp="virhe säätiedotuksessa"
        }
    }
    document.getElementById("vastaus").innerHTML =tmp;
    console.log(tmp);
}

