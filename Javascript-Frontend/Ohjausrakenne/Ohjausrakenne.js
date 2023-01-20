function funktio() { //funktion alku
    let ika = prompt("Kirjoita ikäsi");
    if (ika >= 18) { // jos laitettu ikä on suurempi tai yhtäsuuri kuin 18 
      console.log("Olet täysi-ikäinen") // olet täysi-ikäinen
      alert("Olet täysi-ikäinen")
    } else { //jos se on pienempi kuin 18
      console.log("Olet alaikäinen") // olet alaikäinen
      alert("Olet alaikäinen")
    }
} //funktion loppu