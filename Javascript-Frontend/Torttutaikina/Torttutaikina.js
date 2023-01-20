var torttutaikina ={};
var kysymys=Number();
var rasva=200;//g
var jauhot=3; //dl

torttutaikina.kysy=function(){
    kysymys = Number(prompt("Kuinka paljon sokeria? (dl)"));
    console.log(kysymys);

    torttutaikina.vastaus();
}
torttutaikina.vastaus=function(){
    var rasvaVastaus=rasva*kysymys;
    var jauhotVastaus=jauhot*kysymys;
    console.log(rasvaVastaus);
    console.log(jauhotVastaus);
    document.getElementById("sokeria").innerHTML= "Sokeria " +kysymys + "dl";
    document.getElementById("jauhoa").innerHTML= "Jauhoja "+jauhotVastaus + "dl";
    document.getElementById("rasvaa").innerHTML= "Rasvaa " +rasvaVastaus + "g";
    document.getElementById("teksti").innerHTML= "Paloittele rasva kulhoon. Nypi rasva ja jauhot keskenään murumaiseksi. Lisää maitorahka nopeasti sekoittaen joukkoon. Muotoile taikina litteäksi levyksi ja laita viileään noin tunniksi. Sirottele leivinpöydälle vehnäjauhoja ja taputtele taikina litteämmäksi. Kauli taikina jauhotetulla kaulimella, suorakaiteen muotoiseksi ja taita se kolmeen osaan. Kauli taikina uudelleen levyksi ja taita taas kolmeen osaan. Voit kaulia samaan tapaan vielä kolmannen kerran, jos haluat taikinaan lehtevyyttä. Pidä taikinaa viileässä noin 30 minuuttia kaulimisen jälkeen.";
    alert("Sokeria " +kysymys + "dl. " + "Jauhoja "+jauhotVastaus + "dl. " + "Rasvaa " +rasvaVastaus + "g. "+"Paloittele rasva kulhoon. Nypi rasva ja jauhot keskenään murumaiseksi. Lisää maitorahka nopeasti sekoittaen joukkoon. Muotoile taikina litteäksi levyksi ja laita viileään noin tunniksi. Sirottele leivinpöydälle vehnäjauhoja ja taputtele taikina litteämmäksi. Kauli taikina jauhotetulla kaulimella, suorakaiteen muotoiseksi ja taita se kolmeen osaan. Kauli taikina uudelleen levyksi ja taita taas kolmeen osaan. Voit kaulia samaan tapaan vielä kolmannen kerran, jos haluat taikinaan lehtevyyttä. Pidä taikinaa viileässä noin 30 minuuttia kaulimisen jälkeen.")
}