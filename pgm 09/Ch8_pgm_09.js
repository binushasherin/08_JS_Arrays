var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra", "David", "Eve" ];

showArguments = function (item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);