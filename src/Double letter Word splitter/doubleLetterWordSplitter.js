
function splitOnDoubleLetter(str) {
    let prevChar = [null, 0];
    let array = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(prevChar[0] === char) {
            array.push(str.slice(prevChar[1], i));
            prevChar[1] = i;
        }
        prevChar = [char, prevChar[1]];
    }
    if(prevChar[1] != 0) {
        array.push(str.slice(prevChar[1], str.length));
    }
    return array; // Empty if no doubles found
}

console.log("%c\nDouble Letter Word Splitter", "color:green; font-size: 1rem");
console.log(splitOnDoubleLetter("Letter"));
console.log(splitOnDoubleLetter("Really"));
console.log(splitOnDoubleLetter("Happy"));
console.log(splitOnDoubleLetter("Shall"));
console.log(splitOnDoubleLetter("Tool"));
console.log(splitOnDoubleLetter("Mississippi"));
console.log(splitOnDoubleLetter("Easy"));
