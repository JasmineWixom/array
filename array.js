const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

const got = gotCitiesCSV.split(",")
document.write(got)

const best = bestThing.split(" ")
document.write("<p>",best, "</p>");

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

const matcity = []
const newarr = gotCitiesCSV.split(",")
for (let i = 0; i < newarr.length; i++) {
    let city = newarr[i];
    if (city.includes("aa") || city.includes("ee") || city.includes("ii") || city.includes("oo") || city.includes("uu")){
        matcity.push(city);
        
    };
}
document.write("<p>", matcity, "</p>");

const sort = lotrCitiesArray.sort(function(a, b){
    return b.length - a.length;
  });
document.write(sort)