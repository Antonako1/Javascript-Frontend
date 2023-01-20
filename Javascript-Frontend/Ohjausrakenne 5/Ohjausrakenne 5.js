var noppa = {}; //tekee olion "noppa"
const nopanLuvut = [1, 2, 3, 4, 5, 6] ;//nopan luvut arrayssa
const nopanUudetLuvut = [];//nopan uudet luvut yhteenlaskua varten
const isoinKasi = []; //lista suurimman käden laskemiseen ja tallentointiin

noppa.heita = function(){//ensimmäisen napin nopan heitto
    var vastaus=Number();//vastauksesta tehdään number
    var naytaLuku1= Number();//-u-
    var randomi= Math.random();//ehkä turha
    for(i=0;i<randomi;i++){
        vastaus = Math.random();//vastauksesta tehdään math.randomilla satunnainen luku 0.00-1.00 väliltä
        if(vastaus<=0.20 && vastaus>=0){//jos vastaus on pienempi kuin 0.16 ja isompi kuin 0
            naytaLuku1=nopanLuvut[0];//ottaa nopanLuvut arraysta listanumeron 0 eli numeron 1
            console.log(naytaLuku1);
        }else if(vastaus<=0.40 && vastaus>=0.21){
            naytaLuku1=nopanLuvut[1];
            console.log(naytaLuku1);
        }else if(vastaus<=0.60 && vastaus>=0.41){
            naytaLuku1=nopanLuvut[2];
            console.log(naytaLuku1);
        }else if(vastaus<=0.80 && vastaus>=0.61){
            naytaLuku1=nopanLuvut[3];
            console.log(naytaLuku1);
        }else if(vastaus<=0.100 && vastaus>=0.81){
            naytaLuku1=nopanLuvut[4];
            console.log(naytaLuku1);
        }else{
            naytaLuku1=nopanLuvut[5];
            console.log(naytaLuku1);
        }
        nopanUudetLuvut.push(naytaLuku1);//työntää uuteen listaan satunnaiset nopanluvut
    }

    var vastaus1=Number();
    var naytaLuku2 = Number();
    var randomi= Math.random();
    for(i=0;i<randomi;i++){
        vastaus1 = Math.random();
        if(vastaus1<=0.20 && vastaus1>=0.00){
            naytaLuku2=nopanLuvut[0];
            console.log(naytaLuku2);
        }else if(vastaus1<=0.40 && vastaus1>=0.21){
            naytaLuku2=nopanLuvut[1];
            console.log(naytaLuku2);
        }else if(vastaus1<=0.60 && vastaus1>=0.41){
            naytaLuku2=nopanLuvut[2];
            console.log(naytaLuku2);
        }else if(vastaus1<=0.80 && vastaus1>=0.61){
            naytaLuku2=nopanLuvut[3];
            console.log(naytaLuku2);
        }else if(vastaus1<=1 && vastaus1>=0.81){
            naytaLuku2=nopanLuvut[4];
            console.log(naytaLuku2);
        }else{
            naytaLuku2=nopanLuvut[5];
            console.log(naytaLuku2);
        }        
    nopanUudetLuvut.push(naytaLuku2);
    }
    
    document.getElementById("naytaLuku1").innerHTML="Noppa 1: " + naytaLuku1;// kirjoittaa htmllään tekstin'
    document.getElementById("naytaLuku2").innerHTML="Noppa 2: " + naytaLuku2;
};

noppa.laske = function(){//laskee noppien tuottamat luvut yhteensä
    var yhteisLasku = Number();
    for(i=0;i<nopanUudetLuvut.length;i++){
        yhteisLasku=yhteisLasku+nopanUudetLuvut[i];
    }
    

    document.getElementById("yhteensa").innerHTML="Nopat yhteenlaskettuna: "+yhteisLasku; //ja lisää ne htmllään
};

noppa.suurinKasi=function(){//laskee suurimman käden
    for(i=0;i<nopanUudetLuvut.length-1;i++){
        var eka=Number(nopanUudetLuvut[i]);//eka on listan eka
        var toka=Number(nopanUudetLuvut[i+1]);//toka on listan toka
        var arvo1=Number(eka+toka);//arvo1 on eka ja toka plussattuna
    }
    console.log(arvo1 + " arvo");
    isoinKasi.push(arvo1);//isoinKasi listaan työnnetään arvo1 saamat arvot
    console.log(isoinKasi + " isoinKasi");
};

noppa.suurinKasiLasku=function(){//ottaa listasta suurimman käden
    var isoin=0;
    for(i=0;i<isoinKasi.length;i++){
        isoin=Math.max.apply(null, isoinKasi);//isoin on isoinKasi listalta isoin luku
    }
    console.log(isoin + " isoin");
    document.getElementById("suurinKasi").innerHTML="Isoin käsi: "+isoin;
};