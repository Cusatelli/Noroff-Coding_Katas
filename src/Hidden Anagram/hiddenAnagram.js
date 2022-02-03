const regEx = /[^A-Za-z]/g; // Global regEx for ignoring alphabetical characters.

/**
 * Compare the substring of the original sentence to word & return the substring
 * once an apt comparison has been made.
 * @param {String} sentence 
 * @param {String} word 
 * @returns Substring of Sentence or 'noutfond' = anagram of NotFound.
 */
function hiddenAnagram(sentence, word) {
    const regSentence = sentence.replace(regEx, '').toLowerCase(); // Remove all unwanted characters.
    const sortedWord = word.replace(regEx, '').toLowerCase().split("").sort();
    const regWord = sortedWord.join("");

    for (index = 0; index <= regSentence.length - regWord.length; index++) {
        const substringSentence = regSentence.substring(index, index + regWord.length); // start, end
        const sortedSubstring = substringSentence.split('').sort();

        if (sortedSubstring.join("") == regWord) {
            return substringSentence;
        }
    }
    
    return "noutfond"; // Not Found.
}

console.log("%c\nHidden Anagram", "color:green; font-size: 1rem");
// The sequence "n old west actio" is a perfect anagram of "Clint Eastwood".
let word = "Clint Eastwood";
let anagram = hiddenAnagram("An old west action hero actor", word); // ➞ "noldwestactio"
console.log(`${word}\t=>\t${anagram}`);

// The sequence "Mr. Mojo Risin" ignoring the full stop, is a perfect
// anagram of "Jim Morrison".
word = "Jim Morrison";
anagram = hiddenAnagram("Mr. Mojo Rising could be a song title", word); // ➞ "mrmojorisin"
console.log(`${word}\t=>\t${anagram}`);

// The sequence "ana? marg" ignoring "?" is a perfect anagram of "Anagram".
word = "ANAGRAM";
anagram = hiddenAnagram("Banana? margaritas", word); // ➞ "anamarg"
console.log(`${word} \t\t=>\t${anagram}`);

// When all spaces, numbers and puntuation marks are removed
// from the whole phrase, the remaining characters form the sequence
// "Debitcard" which is a perfect anagram of "bad credit".
word = "bad credit";
anagram = hiddenAnagram("D e b90it->?$ (c)a r...d,,#~", word); // ➞ "debitcard"
console.log(`${word}\t\t=>\t${anagram}`);

// The words "Bright moon" are an anagram of "bongo mirth" but they are
// not a continuous alphabetical sequence because the words "is the" are in
// between. Hence the negative result, "noutfond" is returned.
word = "Bongo mirth";
anagram = hiddenAnagram("Bright is the moon", word); // ➞ "noutfond"
console.log(`${word}\t\t=>\t${anagram}`);
