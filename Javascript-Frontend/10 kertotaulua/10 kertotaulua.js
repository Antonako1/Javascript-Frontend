var kysyLuku=prompt("Anna kerrottava luku");
kertoja=Number();
kerroin = document.getElementById("kertotaulu");
for(i=1;i<11;i++){
    for(j=0;j<1;j++){
    var kertoja=kysyLuku*[i] + '<br />';
    var vastaus = kysyLuku +"*"+ "10" + "="+kertoja + '<br />'
    console.log(kertoja)
    kerroin.innerHTML += vastaus;
    }
}





//Saman voi tehdä myös yhdellä for loopilla
// for(i=1;i<=10;i++){
    //     var kertoja=kysyLuku*[i] + '<br />';
    //     var vastaus = kysyLuku +"*"+ "10" + "="+kertoja + '<br />'
    //     console.log(kertoja)
    //     kerroin.innerHTML += vastaus;
    // }