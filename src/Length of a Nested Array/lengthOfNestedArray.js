let elementsInNest = 0;

function getLenght(array) {
    elementsInNest = 0; // Reset global value on each run
    console.log(calculateLenght(array));
}

function calculateLenght(array) {
    if(array.length <= 0) { return 0 }; // Exit and return 0 if array empty

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        elementsInNest += index;
        if(element.length <= 1) {
            index++; // Increment if no nested elements
        } else if(element.length > 1) {
            return calculateLenght(element);
        }
    }
    return elementsInNest + 1; // Add one to count 0
}

console.log("%c\nLength of a Nested Array", "color:green; font-size: 1rem");
getLenght([1, [2, 3]]); // 3
getLenght([1, [2, [3, 4]]]); // 4
getLenght([1, [2, [3, [4, [5, 6]]]]]); // 6
getLenght([1, [2], 1, [2], 1]); // 5
getLenght([]); // 0
