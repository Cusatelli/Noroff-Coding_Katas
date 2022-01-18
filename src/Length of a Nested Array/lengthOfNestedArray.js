let elementsInArray = 0;

function getLength(array) {
    elementsInArray = 0; // Reset global value on each run
    console.log(calculateLength(array));
}

function calculateLength(array, depth = 1) {
    return array.flat(Infinity).length;
}

console.log("%c\nLength of a Nested Array", "color:green; font-size: 1rem");
getLength([1, [2, 3]]); // 3
getLength([1, [2, [3, 4]]]); // 4
getLength([1, [2, [3, [4, [5, 6]]]]]); // 6
getLength([1, [2], 1, [2], 1]); // 5
getLength([]); // 0
