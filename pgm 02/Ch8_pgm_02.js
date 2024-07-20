var place1 = { name : "The Pyramids", country : "Egypt" };
var place2 = { name : "The Grand Canyon", country : "USA" };
var place3 = { name : "Bondi Beach", country : "Australia" };

var thisYear = [ place1, place2 ];
var nextYear = [ place3 ];

console.log(thisYear);
console.log(nextYear);


var place4 = { name: "Paris", country: "France" };

var thisYear = [place4];
var nextYear = [];

nextYear.push(place4);

console.log("This Year:", thisYear);
console.log("Next Year:", nextYear);

place2.name = "London";

console.log("This Year after modification:", thisYear);
console.log("Next Year after modification:", nextYear);