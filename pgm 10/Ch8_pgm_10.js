[ "Dax", "Jahver", "Kandra" ].forEach(function (item, index, wholeArray) {
    console.log("Item: " + item);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
  });

  let rectangles = [
    { length: 5, width: 3 },
    { length: 7, width: 4 },
    { length: 6, width: 6 },
    { length: 4, width: 2 }
];


const assignArea = function(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
};


const showInfo = function(rectangle) {
    console.log(`Rectangle - Length: ${rectangle.length}, Width: ${rectangle.width}, Area: ${rectangle.area}`);
};

rectangles.forEach(rectangle => {
    assignArea(rectangle);
    showInfo(rectangle);
});