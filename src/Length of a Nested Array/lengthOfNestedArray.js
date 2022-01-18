
function getLength(array) {
    const length = array.flat(Infinity).length;
    console.log(length);
    return length;
}

console.log("%c\nLength of a Nested Array", "color:green; font-size: 1rem");
getLength([1, [2, 3]]); // 3
getLength([1, [2, [3, 4]]]); // 4
getLength([1, [2, [3, [4, [5, 6]]]]]); // 6
getLength([1, [2], 1, [2], 1]); // 5
getLength([]); // 0
