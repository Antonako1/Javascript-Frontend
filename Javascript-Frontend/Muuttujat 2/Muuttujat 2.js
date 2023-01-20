/*
let ei toimi vanhoissa selaimissa, mutta var toimii.
Syynä on että var let lisättiin vasta vuonna 2015, var lisättiin 1995.
let:iä ei voi   

let:n ei voi viitata aaltosulkujen{} ulkopuolella, toisinkuin var:iin, johon voi
*/

document.write("let ei toimi vanhoissa selaimissa, mutta var toimii. " +"Syynä on että var let lisättiin vasta vuonna 2015, var lisättiin 1995. "+"let:iä ei voi "+"let:n ei voi viitata aaltosulkujen{} ulkopuolella, toisinkuin var:iin, johon voi." + "<br>")





{
    var y=2;
    document.write(y);
}
document.write(y); // voidaan viitata


{   
    let x=5;
    document.write(x);
}

document.write(x); // ei voi viitata