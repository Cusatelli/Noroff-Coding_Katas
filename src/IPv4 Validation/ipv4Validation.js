
function isValidIP(string = "") {
    const stringAsArray = asArray(string);
    if (stringAsArray.length !== 4) { return false; }

    const lastCharInString = stringAsArray[stringAsArray.length - 1];
    if (equalsZero(lastCharInString[lastCharInString.length - 1])) {
        return false;
    }

    if (equalsZero(stringAsArray[stringAsArray.length - 1][0])) {
        return false;
    }

    for (let index = 0; index < stringAsArray.length; index++) {
        const octet = stringAsArray[index];
        if(!isInRange(octet)) {
            return false;
        }
        if (equalsZero(octet[0])) {
            return false;
        }
    }

    return true;
}

function equalsZero(input) {
    if(input === '0') { return true; }
    return false;
}

function asArray(input) {
    return input.split('.');
}

function isInRange(input) {
    const inputAsNumber = parseInt(input);
    if(inputAsNumber <= 256 && inputAsNumber >= 0) {
        return true;
    }
    return false;
}

console.log("%c\nIPv4 Validation", "color:green; font-size: 1rem");
console.log(isValidIP("123.456.78.92"));     // ➞ false
console.log(isValidIP("1.2.3.4"));           // ➞ true
console.log(isValidIP("1.2.3"));             // ➞ false
console.log(isValidIP("1.2.3.4.5"));         // ➞ false
console.log(isValidIP("123.45.67.89"));      // ➞ true
console.log(isValidIP("123.456.78.90"));     // ➞ false
console.log(isValidIP("123.045.067.089"));   // ➞ false