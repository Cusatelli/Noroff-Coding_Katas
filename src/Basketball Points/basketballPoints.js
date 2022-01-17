
function points(twoPointers, threePointers) {
    const twos = twoPointers * 2 || 0;
    const threes = threePointers * 3 || 0;

    return twos + threes;
}

console.log("%c\nBasketball Points", "color:green; font-size: 1rem");
console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));
console.log(points(0, 1));
console.log(points(0, 0));
