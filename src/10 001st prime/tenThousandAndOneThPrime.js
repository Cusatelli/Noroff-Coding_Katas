
function findPrimeNumberAtPosition(primePosition) {
    let lastPrimeFound = 0;
    let numberOfPrimesFound = 0;
    for (let index = 2; numberOfPrimesFound < primePosition; index++) {
        if(isPrimeNumber(index)) {
            numberOfPrimesFound++;
            lastPrimeFound = index;
        }
    }
    console.log('numberOFPrimes: ', numberOfPrimesFound);
    console.log('lastPrime:      ', lastPrimeFound);
    return lastPrimeFound;
}

function isPrimeNumber(number) {
    for (let index = 2, squared = Math.sqrt(number); index <= squared; index++) {
        if(number % index === 0) { return false; } // Index start at 2 because 0 & 1 return false.
    }
    return true;
}

console.log("%c\n10 001st Prime", "color:green; font-size: 1rem");
findPrimeNumberAtPosition(10001);
