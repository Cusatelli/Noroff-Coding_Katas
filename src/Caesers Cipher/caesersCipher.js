const alphabeth = "abcdefghijklmnopqrstuvwxyz";
const regex = /[aA-zZ]/g; // All alphabetical characters
const lowercaseRegex = /[a-z]/g; // only lowercase characters

/**
 * Does not handle double spaces...
 * Then the next character WILL be uppercase.
 * @param {Number} input 
 * @param {Number} rotationFactor 
 * @returns 
 */
function caesarCipher(input, rotationFactor) {
    let output = ''; // Output
    let isLowercase = false; // Saved value for laters

    for (let index = 0; index < input.length; index++) {
        let character = input[index];
        
        // Go to next character
        const next = () => {
            index++;
            output += character;
            character = input[index];
        }

        // Check if whitespace or non-alphabetical character
        const check = () => {
            if(character === " " || !character.match(regex)) { next(); }
        }

        check(); // Check if whitespace

        // Check if upper or lower case character
        if(character.match(lowercaseRegex)) { isLowercase = true; }
        else { isLowercase = false; }

        check(); // Check if alphabetical character

        // Go through alphabet (26 characters):
        for (let alphabetIndex = 0; alphabetIndex < alphabeth.length + rotationFactor; alphabetIndex++) {
            const letter = alphabeth[alphabetIndex] + ""; // Current character
            let nextLetter = alphabeth[alphabetIndex + rotationFactor]; // Next character
            
            // Account for looping rotation factor
            if(!alphabeth[alphabetIndex + rotationFactor]) {
                let subtractFactor = rotationFactor; // Account for how much overflow.
                for (let kIndex = 1; kIndex < rotationFactor; kIndex++) {
                    if(alphabeth[alphabetIndex + rotationFactor - kIndex]) {
                        subtractFactor = kIndex; // Total overflow from 26 -> 0
                        break; // break to stop looping
                    }
                }
                alphabethIndex = subtractFactor - 1;
                nextLetter = alphabeth[alphabethIndex];
            }
            
            // Compare character to letter and if they match add them to output.
            if(character.toLowerCase() === letter.toLowerCase()) {
                // Set to lowercase or uppercase depending on saved value at start.
                if(isLowercase) {
                    output += nextLetter.toLowerCase();
                } else {
                    output += nextLetter.toUpperCase();
                }
                break; // break to stop looping
            }
        }
    }

    console.log(output);
    return output;
}

console.log("%c\nCaeser's Cipher", "color:green; font-size: 1rem");
caesarCipher("middle-Outz", 2); // ➞ "okffng-Qwvb"
caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5); // ➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
caesarCipher("A friend in need is a friend indeed", 20); // ➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"