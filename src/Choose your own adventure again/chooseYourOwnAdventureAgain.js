const FILE_PATH = "./Choose your own adventure again/p022_names.txt";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWQYZ";

/**
 * Read text file from 
 * @param {String} filePath 
 * @returns 
 */
function readTextFile(filePath) {
    let file = null;
    const rawHttpRequestFile = new XMLHttpRequest();
    rawHttpRequestFile.open("GET", filePath, false);
    rawHttpRequestFile.onreadystatechange = function () {
        if (rawHttpRequestFile.readyState !== 4) { return; }

        if (rawHttpRequestFile.status == 200 || rawHttpRequestFile.status == 0) {
            file = rawHttpRequestFile.responseText;
        }
    }
    rawHttpRequestFile.send(null);
    return file;
}

function sortAlphabetically(file) {
    const fileArray = file.replaceAll(/[^A-Za-z\,]/g, "").split(",").sort();
    return fileArray.sort();
}

function makeArrayIntoList(sortedArray) {
    let sortedList = [];
    for (let index = 0; index < sortedArray.length; index++) {
        const name = sortedArray[index];
        const score = calculateAlphabeticalValue(name);
        
        const tempObj = { index: (index + 1), name, score: (score * (index + 1)) };
        sortedList.push(tempObj);
    }
    return sortedList; // { name: "name", position: position, score: score };
}

// COLIN = 3 + 15 + 12 + 9 + 14 = 53
//         C    O   L    I   N
// Position 938 => 53 * 938 = 49714 Score.
function calculateAlphabeticalValue(name) {
    let alphabeticalValue = 0;
    for (let index = 0; index < name.length; index++) {
        const character = name[index];
        for (let index = 0; index < ALPHABET.length; index++) {
            const letter = ALPHABET[index];
            if(character.toUpperCase() === letter) {
                alphabeticalValue += (index + 1);
            }
        }
    }
    return alphabeticalValue;
}

function calculateTotalScore(sortedListFile) {
    let totalScore = 0;
    for (let index = 0; index < sortedListFile.length; index++) {
        totalScore += sortedListFile[index].score;
    }
    console.log("Total Score: %s", totalScore);
    return totalScore;
}

console.log("%c\nChoose your own adventure again:\nNames scores\nProblem 22", "color:green; font-size: 1rem");
const fileContent = readTextFile(FILE_PATH);
const sortedFile = sortAlphabetically(fileContent);
const sortedListFile = makeArrayIntoList(sortedFile);
const totalScore = calculateTotalScore(sortedListFile);
