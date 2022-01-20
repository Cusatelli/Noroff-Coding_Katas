
console.log("%c\nGame of Thrones:\nCharacter Titles", "color:red; font-size: 1rem");

function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1); // Capitalize
}

function correctTitle(incorrectTitle) {
    const wordList = incorrectTitle.split(' ');
    let correctTitleStr = "";
    
    for(let word of wordList) {
        word = word.toLowerCase(); // Lower case all words
        const hasComma = word.includes(','); // Avoid chacking multiple times.
        if(word !== "and" && word !== "the" && word !== "of" && word !== "in") {
            // In cases where you for some reason would have a comma after and, the, of or in.
            if(hasComma) {
                if(word !== "and," && word !== "the," && word !== "of," && word !== "in,") {
                    word = capitalize(word); // Capitalize
                }
            // For normal cases
            } else {
                word = capitalize(word);
            }
        }
        if(hasComma) {
            word = word.replace(",", ", ");
        }
        correctTitleStr += word + " "; // Space after words (Removed in split).

        // Remove double spaces created by spacing after comma (',').
        if(correctTitleStr.includes("  ")) {
            correctTitleStr = correctTitleStr.replace("  ", " ");
        }
    }

    // Remove last space and replace with .
    correctTitleStr = correctTitleStr.substring(0, correctTitleStr.length - 1);
    if(correctTitleStr.substring(correctTitleStr.length - 1) !== ".") {
        correctTitleStr += ".";
    }

    console.log(correctTitleStr);
    return correctTitleStr;
}

correctTitle("jOn SnoW, kINg IN thE noRth"); // "Jon Snow, King in the North."
correctTitle("sansa stark,lady of winterfell."); // "Sansa Stark, Lady of Winterfell."
correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."); // "Tyrion Lannister, Hand of the Queen."
