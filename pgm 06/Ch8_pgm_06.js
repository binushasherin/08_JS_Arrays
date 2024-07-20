var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

var items1 = ["The Eiffel Tower"];
items1.push("Colosseum");

console.log(items.join(", "));

items[3] = "The Taj Mahal";
console.log(items.join(", "));

items.push("Machu Picchu", "Chirst the Redeemer");
console.log(items.join(", "));