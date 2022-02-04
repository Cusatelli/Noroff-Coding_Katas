
/**
 * Find the difference between the sum 
 * of the squares of the first one hundred natural 
 * numbers and the square of the sum.
 */
function sumSquareDifference(range, exponent = 2) {
    let sumOfSquare = 0;
    let squareOfSum = 0;
    for (let index = 1; index < range + 1; index++) {
        const squared = Math.pow(index, exponent);
        squareOfSum += index;
        sumOfSquare += squared;
    }

    squareOfSum = Math.pow(squareOfSum, exponent);
    sum = squareOfSum - sumOfSquare;

    console.log(`Sum of Square (range: ${range}): `, sumOfSquare);
    console.log(`Square of Sum (range: ${range}): `, squareOfSum);
    console.log(`Sum           (range: ${range}): `, sum);
    return sum;
}

console.log("%c\nSum square difference", "color:green; font-size: 1rem");
sumSquareDifference(100);
