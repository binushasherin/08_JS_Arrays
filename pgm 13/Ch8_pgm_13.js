
let player = {
    name: "Alice",
    items: ["Sword", "Shield", "Potion"]
};


console.log("Initial items:", player.items);

player.items.push("Helmet");
console.log("After push:", player.items);


let removedItem = player.items.pop();
console.log("After pop:", player.items);
console.log("Removed item:", removedItem);


player.items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});


function showItem(player, itemNumber) {
    if (itemNumber >= 1 && itemNumber <= player.items.length) {
        console.log(`${player.name}'s Item ${itemNumber}: ${player.items[itemNumber - 1]}`);
    } else {
        console.log(`Item ${itemNumber} does not exist for ${player.name}.`);
    }
}


console.log("\nTesting showItem:");
showItem(player, 2); 


function addItem(player, itemTitle) {
    player.items.push(itemTitle);
    console.log(`${itemTitle} added to ${player.name}'s items.`);
}


console.log("\nTesting addItem:");
addItem(player, "Boots");
console.log("Updated items:", player.items);