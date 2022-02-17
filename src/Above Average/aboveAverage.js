
function aboveAverage(dataSet) {
    const inputAsArray = dataSet.split(" ");
    for (let index = 0; index < inputAsArray.length; index++) {
        inputAsArray[index] = parseInt(inputAsArray[index]); // Mutate
    }

    const average = calculateAverage(inputAsArray);
    const aboveAverage = findAboveAverage(inputAsArray, average);

    const percentage = (100 / inputAsArray[0]) * aboveAverage;
    if(percentage !== 0) {
        console.log(percentage.toFixed(3) + "%");
        return percentage.toFixed(3);
    }
}

function calculateAverage(dataSet) {
    let average = 0;

    // Skip first.
    for (let index = 1; index < dataSet.length; index++) {
        average += dataSet[index];
    }

    return average / dataSet[0];
}

function findAboveAverage(dataSet, average) {
    let aboveCount = 0;
    
    // Skip first.
    for (let index = 1; index < dataSet.length; index++) {
        if(dataSet[index] > average) {
            aboveCount++;
        }
    }

    return aboveCount;
}

console.log("%c\nAbove Average", "color:green; font-size: 1rem");
aboveAverage("5");
aboveAverage("5 50 50 70 80 100");
aboveAverage("7 100 95 90 80 70 60 50");
aboveAverage("3 70 90 80");
aboveAverage("3 70 90 81");
aboveAverage("9 100 99 98 97 96 95 94 93 91");
