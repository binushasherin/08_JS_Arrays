var getTotalBill = function (itemCosts, itemCounts) {
	var total = 0;

	itemCosts.forEach(function (cost, i) {
		total += cost * itemCounts[i];
	});

	return total;
};

var costs = [ 1.99, 4.95, 2.50, 9.87 ];
var numOfEach = [ 2, 1, 5, 2 ];

console.log("The total cost is $" + getTotalBill(costs, numOfEach));



let itemNames = ["Apple", "Banana", "Orange", "Mango"];
let itemCounts = [5, 3, 4, 2];

function addItem(name, count) {
    itemNames.push(name);
    itemCounts.push(count);
}

addItem("Pineapple", 1)



function getTotalBill(itemNames, itemCounts) {
    let total = 0;
    itemCounts.forEach((count, index) => {
        let cost = getCost(itemNames[index]);
        total += cost * count;
    });
    return total.toFixed(2);
}


function getCost(itemName) {
    switch (itemName) {
        case "Apple":
            return 0.99;
        case "Banana":
            return 0.59;
        case "Orange":
            return 0.79;
        case "Mango":
            return 1.50;
        case "Pineapple":
            return 2.99;
        default:
            return 0;
    }
}

console.log("Using itemCounts:");
console.log('Total bill: $${getTotalBill(itemNames, itemCounts)}');


let items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 }
];


function getTotalBillFromItems(items) {
    let total = 0;
    items.forEach(item => {
        total += item.cost * item.numberBought;
    });
    return total.toFixed(2);
}




console.log("\nUsing items array:");
console.log(`Total bill: $${getTotalBillFromItems(items)}`);