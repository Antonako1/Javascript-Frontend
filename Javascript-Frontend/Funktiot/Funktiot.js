var email={};

email.kirjoita = function(){
    var emaili= String(prompt("Kirjoita Email tunnuksesi"));//2.palauttaa arvon kohta 3.
    return emaili;
}

email.tarkistaEmail = function(emaili){
    var regex = /^([a-zA-Z0-9_äöåÄÅÖ.-])+@([a-zA-Z0-9-]+\.)+([a-zA-Z0-9]{2,4})$/;//4. tarkistaa arvon ja palauttaa kohtaan 5.
    return regex.test(email);
}

email.nappi=function(){
console.log(email.tarkistaEmail(email.kirjoita()));//1.hakee emailiin jonkun arvon kohta 2. |3. vie arvon kohtaan 4.
}                                                   // 5. tulostaa konsoliin true tai false


