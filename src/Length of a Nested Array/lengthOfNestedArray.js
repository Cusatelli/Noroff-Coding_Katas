
// 'One-Liner' solution
// function getLength(array) {
//     const length = array.flat(Infinity).length;
//     console.log(length);
//     return length;
// }

function getLength(array) {
    const length = getDepth(array, Infinity).length;
    console.log(length);
    return length;
}

function getDepth(array, depth = 1) {
    if(depth > 0) {
        return array.reduce((accumulator, value) => accumulator.concat(myReducer(value, depth - 1)), []);
    }
    return array.slice();
}

function myReducer(value, depth) {
    if(Array.isArray(value)) {
        return getDepth(value, depth);
    }
    return value;
}

console.log("%c\nLength of a Nested Array", "color:green; font-size: 1rem");
getLength([1, [2, 3]]);                 // 3
getLength([1, [2, [3, 4]]]);            // 4
getLength([1, [2, [3, [4, [5, 6]]]]]);  // 6
getLength([1, [2], 1, [2], 1]);         // 5
getLength([]);                          // 0
