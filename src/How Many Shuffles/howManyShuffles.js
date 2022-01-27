
/**
 * Init shuffle deck and count number of shuffles.
 * @param { Number } deckSize 
 * @returns Number of shuffles needed to rearrange order back to original state.
 */
const shuffleCount = deckSize => {
    // Remove 1 Card since it makes more sense in a real world scenario
    // that you would not have an extra card if you supply an uneven number.
    if(deckSize % 2 !== 0) { deckSize--; } // Clamp to even number
    if(deckSize <= 1) { return 0 } // return 0 if not enough cards in deck.
    
    return firstCycle(shuffleDeck, Array.from({ length: Math.floor(deckSize - 1) + 1 }, (_, i) => 1 + i)).all.length;
}

/**
 * [a] -> [a]
 * @param {Array} array 
 * @returns 
 */
const shuffleDeck = array => {
    const halfLength = Math.floor(array.length / 2);
    const arrays = [array.slice(0, halfLength), array.slice(halfLength)]
    return concat(zip.apply(null, arrays));
}

/**
 * Eq a => (a -> a) -> a -> [a]
 * @param {function} fun 
 * @param {Number} index 
 * @returns 
 */
const firstCycle = (fun, index) => {
    return until(
        isEqual => EqualsArray(index, isEqual.current),
        m => {
            const func = fun(m.current);
            return {
                current: func,
                all: m.all.concat([func])
            };
        },
        {
            current: fun(index),
            all: [index]
        }
    );
}

/**
 * Check if two arrays are equal to eachother
 * @param {Array} arrayA 
 * @param {Array} arrayB 
 * @returns 
 */
const EqualsArray = (arrayA, arrayB) => {
    const [arrayLengthA, arrayLengthB] = [arrayA.length, arrayB.length];
    if(arrayLengthA === arrayLengthB) {
        if(arrayLengthA > 0) {
            return (arrayA[0] === arrayB[0] && EqualsArray(arrayA.slice(1), arrayB.slice(1)));
        }
        return true;
    }
    return false;
}

/**
 * Convert two arrays into one.
 * I.e: [a, b, c] -> [d, e, f] -> [(a, b, c, d, e, f)]
 * or: [a] -> [b] -> [(a,b)]
 * @param {Array} arrayA 
 * @param {Array} arrayB 
 * @returns Combined array
 */
const zip = (arrayA, arrayB) => {
    return arrayA.slice(0, Math.min(arrayA.length, arrayB.length)).map((pos, index) => [pos, arrayB[index]]);
}

/**
 * [[a]] -> [a]
 * @param {Array} array 
 * @returns 
 */
const concat = array => { return [].concat.apply([], array); }

/**
 * (a -> Bool) -> (a -> a) -> a -> a
 * @param {boolean} bool 
 * @param {Function} fun 
 * @param {object} obj 
 * @returns 
 */
const until = (bool, fun, obj) => {
    const go = index => bool(index) ? index : go(fun(index));
    return go(obj);
}

console.log("%c\nHow Many Shuffles?", "color:green; font-size: 1rem");
console.log(shuffleCount(8));
console.log(shuffleCount(14));
console.log(shuffleCount(52));
