var kayttajanimi = {};

var etunimi = "";
var sukunimi = "";

kayttajanimi.kysy = function() {
    // Ottaa html:stä etu ja sukunimen
    etunimi = document.getElementsByClassName("etunimi")[0].value;
    sukunimi = document.getElementsByClassName("sukunimi")[0].value;

    kayttajanimi.luo(); // sanoo luo funktiolle että pyörii
  };

kayttajanimi.luo = function(){
    // Muuttaa isot kirjaimet pieniksi
    var etunimiPienilla = etunimi.toLowerCase();
    var sukunimiPienilla = sukunimi.toLowerCase();
    // Vaihtaa ääkköset aakkosiksi
    var etunimiIlmanAakkosia = etunimiPienilla
    .replaceAll('ä', 'a')
    .replaceAll('ö', 'o')
    .replaceAll('å', 'o')
    var sukunimiIlmanAakkosia =sukunimiPienilla
    .replaceAll('ä', 'a')
    .replaceAll('ö', 'o')
    .replaceAll('å', 'o')
    // Ottaa etu- ja sukunimestä 3 ensimmäistä kirjainta
    var etunimiOsa = etunimiIlmanAakkosia.substring(0,3);
    var sukunimiOsa = sukunimiIlmanAakkosia.substring(0,3);
    // Tekee käyttäjätunnukset
    var kayttajatunnus= "gradia"+etunimiOsa+sukunimiOsa;
    // Kirjoittaa kokonimen ja käyttäjätunnuksen html:ään
    var kokonimi = etunimi +" "+ sukunimi;
    document.getElementById("kokonimiJaKayttajatunnus").innerHTML="Nimi: "+kokonimi+"."+" Käyttäjätunnus: "+ kayttajatunnus;
    console.log("Nimi: "+kokonimi+"."+" Käyttäjätunnus: "+ kayttajatunnus);
  }