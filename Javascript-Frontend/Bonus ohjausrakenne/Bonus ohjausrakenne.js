lukuPyramidi ={};
lukuPyramidi.loop=function(){
var syoteLukU=Number(prompt("Syötä luku"));
var vastaus= "";
for(i=1;i<=syoteLukU;i++){
    for(o=1;o<=i;o++){
        vastaus = vastaus + o + " ";
        document.getElementById("vastaus").innerHTML=   vastaus + "<br>";
    }
    console.log(vastaus);

}
};
