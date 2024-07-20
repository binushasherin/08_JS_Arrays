
var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

console.log("Dream destinations:");

items.forEach(function (item) {
	console.log(" – " + item);
});



let items1 = ["The Great Wall of China", "The Pyramids of Giza", "The Eiffel Tower", "The Colosseum", "Machu Picchu", "Christ the Redeemer", "The Taj Mahal"];


function showInfo(array) {
    console.log(`Number of places to visit: ${array.length}`);
    array.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item} (Number of letters: ${item.length})`);
    });
}


const showItems = function() {
    showInfo(items);
};



function getTotalNumberOfLetters(array) {
    let totalLetters = 0;
    array.forEach(item => {
        totalLetters += item.length;
    });
    return totalLetters;
}


console.log(`Total number of letters in the items array: ${getTotalNumberOfLetters(items)}`);


showItems();