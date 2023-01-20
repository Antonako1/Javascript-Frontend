var noppa = {};
const nopanLuvut=[1,2,3,4,5,6];

noppa.heitto=function(){
    var nopanArvo1=0;
    var nopanArvo2=0;
    var yhteenlaskettuArvoNoppa1=0;
    var yhteenlaskettuArvoNoppa2=0;
    var noppaLuku1 = document.getElementById("noppa1");
    noppaLuku1.innerHTML="";
    var noppaLuku2 = document.getElementById("noppa2");
    noppaLuku2.innerHTML="";
    //1. nopan loop
    for(i=0;i<5;i++){
        var randomLuku=Math.random();
        console.log(randomLuku);
        if(randomLuku<=0.2 && randomLuku>=0){
            nopanArvo1=nopanLuvut[0];
        }else if(randomLuku<=0.4 && randomLuku>=0.21){
            nopanArvo1=nopanLuvut[1];
        }else if(randomLuku<=0.6 && randomLuku>=0.41){
            nopanArvo1=nopanLuvut[2];
        }else if(randomLuku<=0.80 && randomLuku>=0.61){
            nopanArvo1=nopanLuvut[3];
        }else if(randomLuku<=1 && randomLuku>=81){
            nopanArvo1=nopanLuvut[4];
        }else{
            nopanArvo1=nopanLuvut[5];
        }
        //Noppa 1. yhteenlaskettu arvo
        yhteenlaskettuArvoNoppa1 += nopanArvo1;
        console.log(nopanArvo1);
        document.getElementById("noppa1Arvo").innerHTML="1. Nopan arvo yhteensä "+yhteenlaskettuArvoNoppa1;

        console.log(nopanArvo1);
        noppaLuku1.innerHTML += "<li>"+ "Heitto "+ (i+1)+" " + nopanArvo1+" </li>";
    };
    //2. nopan loop
    for(i=0;i<5;i++){
        var randomLuku2=Math.random();
        console.log(randomLuku2);
        if(randomLuku2<=0.2 && randomLuku2>=0){
            nopanArvo2=nopanLuvut[0];
        }else if(randomLuku2<=0.4 && randomLuku2>=0.21){
            nopanArvo2=nopanLuvut[1];
        }else if(randomLuku2<=0.6 && randomLuku2>=0.41){
            nopanArvo2=nopanLuvut[2];
        }else if(randomLuku2<=0.80 && randomLuku2>=0.61){
            nopanArvo2=nopanLuvut[3];
        }else if(randomLuku2<=1 && randomLuku2>=81){
            nopanArvo2=nopanLuvut[4];
        }else{
            nopanArvo2=nopanLuvut[5];
        }
        //Noppa 2. yhteenlaskettu arvo
        yhteenlaskettuArvoNoppa2 += nopanArvo2;
        console.log(nopanArvo2);
        document.getElementById("noppa2Arvo").innerHTML="2. Nopan arvo yhteensä "+yhteenlaskettuArvoNoppa2;
        noppaLuku2.innerHTML += "<li>"+ "Heitto "+ (i+1)+" " + nopanArvo2+" </li>";
};

}

