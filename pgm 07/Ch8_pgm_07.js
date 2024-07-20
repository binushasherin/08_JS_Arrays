var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);


var items1 = ["The Great Wall of China", "The Pyramids of Giza", "The Eiffel Tower"];


items.push("The Colosseum");
items[items.length] = "Machu Picchu";
items.push("Christ the Redeemer");
items[items.length] = "The Taj Mahal";

function showInfo(array) {
    array.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item} (Number of letters: ${item.length})`);
    });
}


showInfo(items);


function getTotalNumberOfLetters(array) {
    let totalLetters = 0;
    array.forEach(item => {
        totalLetters += item.length;
    });
    return totalLetters;
}


console.log(`Total number of letters in the items array: ${getTotalNumberOfLetters(items)}`);