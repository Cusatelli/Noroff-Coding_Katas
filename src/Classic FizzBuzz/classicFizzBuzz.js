
function fizzBuzz(number) {
    let line = "";

    if(number % 3 === 0 && number % 5 === 0) {
        line = "FizzBuzz";
    } else {
        if(number % 3 === 0) {
            line = "Fizz";
        }
        else if(number % 5 === 0) {
            line = "Buzz";
        }
        else {
            line = number;
        }
    }

    console.log(line);
}

console.log("%c\nClassic FizzBuzz", "color:green; font-size: 1rem");
for (let i = 0; i < 100; i++) {
    fizzBuzz(i); 
}
