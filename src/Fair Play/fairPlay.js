

function fairPlay(dataSet) {
    const dataSetAsArray = dataSet.split(" ");
    let biljardCount = 0;
    let poolCount = 0;
    for (let index = 1; index < dataSetAsArray.length; index++) {
        if(index % 2 === 0) {
            biljardCount += parseInt(dataSetAsArray[index]);
        } else {
            poolCount += parseInt(dataSetAsArray[index]);
        }
    }

    if(biljardCount % parseInt(dataSetAsArray[0]) === 0 || poolCount % parseInt(dataSetAsArray[0]) === 0) {
        console.log("possible");
        return true;
    }

    console.log("impossible");
    return false;
}

console.log("%c\nFair Play", "color:red; font-size: 1rem");
fairPlay("6 2 1 3 0 3 0 4 2 4 2 5 1");
fairPlay("4 1 0 0 1 -2 0 0 -2");
