
function testJackpot(array) {
    for (let index = 1; index < array.length - 1; index++) {
        const element = array[index];
        if (element !== array[index - 1] || element !== array[index + 1]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

console.log("%c\nHitting the Jackpot", "color:green; font-size: 1rem");
testJackpot(["@", "@", "@", "@"]);          // True
testJackpot(["abc", "abc", "abc", "abc"]);  // True
testJackpot(["SS", "SS", "SS", "SS"]);      // True
testJackpot(["&&", "&", "&&&", "&&&&"]);    // False
testJackpot(["SS", "SS", "SS", "Ss"]);      // False
