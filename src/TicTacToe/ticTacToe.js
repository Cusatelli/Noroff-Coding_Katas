
function ticTacToe(array) {
    for (let index = 0; index < 3; index++) {
        // Vertical winner check
        if (array[0][index] === array[1][index] && array[0][index] === array[2][index]) {
            console.log("Winner: " + array[0][index]);
            return array[0][index];
        }

        // Horizontal winner check
        if (array[index][0] === array[index][1] && array[index][0] === array[index][2]) {
            console.log("Winner: " + array[index][0]);
            return array[index][0];
        }

        // \ winner check
        if (array[0][0] === array[1][1] && array[0][0] === array[2][2]) {
            console.log("Winner: " + array[0][0]);
            return array[0][0];
        }
        
        // / winner check
        if (array[0][2] === array[1][1] && array[0][2] === array[2][0]) {
            console.log("Winner: " + array[0][2]);
            return array[0][2];
        }
    }

    console.log("Draw");
    return "Draw";
}

console.log("%c\nTic Tac Toe", "color:green; font-size: 1rem");
ticTacToe([
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
]) // X

ticTacToe([
    ["O", "O", "O"],
    ["O", "X", "X"],
    ["E", "X", "X"]
]) // O

ticTacToe([
    ["X", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
]) // Draw
