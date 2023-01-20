var troll='trololo';console.log(troll.length)
var hah = 'moikka';console.log(hah.charAt(4));


var teksti = 'Jorma meni kauppaan ja osti Hondan';
var osa = teksti.substring(19, 10);

// Tulostaa "kauppaan"
console.log(osa);

var nimi = 'Gradia';

var nimiIsoilla = nimi.toUpperCase();
var nimiPienilla = nimi.toLowerCase();

// Tulostaa GRADIA
console.log(nimiIsoilla);

// Tulostaa gradia
console.log(nimiPienilla);

var teksti = 'Kuu on juustoa ja Pekka on syytön';
var uusiTeksti = teksti.replace("syytön", "syyllinen");

console.log(uusiTeksti);

var teksti = 'Pekka,Jorma,Jussi,Sirpa';
var taulukko = teksti.split(",");

// Tulostaa "Jorma"
console.log(taulukko[1]);