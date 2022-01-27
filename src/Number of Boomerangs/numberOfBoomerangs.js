
function countBoomerangs(array) {
    let results = [];
    for (let index = 2; index < array.length; index++) {
        const first = array[index - 2];
        const second = array[index - 1];
        const third = array[index];
        if(first === third && first !== second) {
            results.push([first, second, third]);
        }
    }
    console.log(results);
    return results;
}

console.log("%c\nNumber of Boomerangs", "color:green; font-size: 1rem");
countBoomerangs([9, 5, 9, 5, 1, 1, 1]); // 2
countBoomerangs([5, 6, 6, 7, 6, 3, 9]); // 1
countBoomerangs([4, 4, 4, 9, 9, 9, 9]); // 0
countBoomerangs([1, 7, 1, 7, 1, 7, 1]); // 5
