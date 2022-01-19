/**
 * @link https://projecteuler.net/problem=10
 * @description The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

function summationOfPrimes(length) {
    let sum = 0;
    for (let index = 2; index < length; index++) {
        if(isPrimeNumber(index)) {
            sum += index;
        }
    }
    console.log("Sum: " + sum);
    return sum;
}

function isPrimeNumber(number) {
    for (let index = 2, squared = Math.sqrt(number); index <= squared; index++) {
        if(number % index === 0) { return false; } // Index start at 2 because 0 & 1 return false.
    }
    return true;
}

console.log("%c\nChoose your own adventure:\nSummation of Primes\nProblem 10", "color:green; font-size: 1rem");
summationOfPrimes(2000000);
