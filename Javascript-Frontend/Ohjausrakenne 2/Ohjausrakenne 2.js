var aika= new Date();
var tunti= aika.getHours();

if(tunti>=0, tunti<=6)
{
    console.log("Hyvää yötä")
}
else if(tunti >= 7, tunti<=11)
{
    console.log("Hyvää huomenta");
}

else if(tunti >=12, tunti <=18)
{
    console.log("Hyvää päivää");
}

else if(tunti >=19, tunti <=22){
    console.log("Hyvää iltaa");
}

else if(tunti>=23, tunti<=24)
{
    console.log("Hyvää yötä");
}
