function kertoma() {
    var kysy = Number(prompt("Anna luku"));//Kysyy luvun
    var vastaus = 1; //antaa arvon 1
    var vastausHTML = document.getElementById("vastausHTML");//linkittää vastaushtmllän htmlään
    var vastausHTML2 = document.getElementById("vastausHTML2");
    vastausHTML2.innerHTML="";
    vastausHTML.innerHTML="";//Laittaa htmllän tyhjäksi
    
    if(kysy==0){
        vastausHTML.innerHTML += "<li> "+"1"+" </li>"; // 0! = 1
        console.log("1");
    }else{//171

    for(i=1;i<kysy+1;i++){
        vastaus = vastaus*i;// vastaus on vastaus(edellinen) + vastaus * nykyinen
        // console.log(vastaus);
        vastausHTML2.innerHTML= "Luvun "+ kysy + " kertoma" + " = " + vastaus;
        vastausHTML.innerHTML += "<li>"+vastaus+" </li>"; // tekee uuden lista elementin htmllään
        }
    }
}