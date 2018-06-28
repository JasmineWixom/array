const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

document.write(gotCitiesCSV);

document.write("<p>",bestThing, "</p>");

const cities = lotrCitiesArray.join();
document.write(lotrCitiesArray);  

const five = lotrCitiesArray.slice(3,8);
document.write("<p>", five, "</p>");

const lotr = lotrCitiesArray.splice(2, 1);
document.write(lotrCitiesArray);

const disp = bestThing.slice(23, 38)
document.write("<p>" ,disp, "</p>")

const only = bestThing.slice(64, 68)
document.write(only)

const semi = gotCitiesCSV.split(",");
const colin = semi.join(";")
document.write("<p>", colin, "</p>")
