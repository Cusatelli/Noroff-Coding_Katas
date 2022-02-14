
/**
 * Convert a normal string to Pig Latin.
 * Read more: https://en.wikipedia.org/wiki/Pig_Latin
 * @param {String} normalText 
 * @returns converted / fixed string.
 */
function pigLatinSentence(normalText) {
    let output = "";
    const words = normalText.toLowerCase().split(" ");
    let firstVowelFound = false;

    // Iterate over all words in split array
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        let word = words[wordIndex];

        if(containsVowel(word[0])) {
            word += "way"; // "Fix" word.
        } else { // Otherwise, move all letters before the first vowel to the end and add "ay".
            // Iterate over all letters in word
            for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
                const letter = word[letterIndex];
                
                // Find first vowel to shift elements from
                if(containsVowel(letter)) {
                    if(!firstVowelFound) {
                        const rearrangeWord = word.slice(0, letterIndex);
                        word = word.slice(letterIndex, word.length) + rearrangeWord + "ay"; // "Fix" word.
                        firstVowelFound = true; // Set flag to true to avoid double vowels found.
                    }
                }
            }
            firstVowelFound = false; // Reset after each word
        }
        output += word + " "; // Add words & whitespace
    }
    console.log(output); // Print
    return output;
}

/**
 * Use regex to find any lowercase vowels in a string.
 * @param {String} contains 
 * @returns true if string contains vowel.
 */
function containsVowel(contains) {
    const regex = /([a,e,i,o,u])+/g;
    if(contains.match(regex)) {
        return true;
    }
    return false;
}

console.log("%c\nPig Latin 3.0", "color:green; font-size: 1rem");
pigLatinSentence("this is pig latin"); // ➞ "isthay isway igpay atinlay"
pigLatinSentence("wall street journal"); // ➞ "allway eetstray ournaljay"
pigLatinSentence("raise the bridge"); // ➞ "aiseray ethay idgebray"
pigLatinSentence("all pigs oink"); // ➞ "allway igspay oinkway"
