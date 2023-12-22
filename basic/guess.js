let prompt = require('prompt-sync')();
console.log("|||WELCOM TO GUESSING GAME|||")
let a = Math.round(Math.random() * 1000);
let guess = -10;
let count = 0;
while(guess != a){
    guess = parseInt(prompt("Enter the Guess number between 1 and 1000: "));
    if(guess>a){
        console.log("The Guess number Greater then the Actuall Number!.");
    }
    else if(guess<a){
        console.log("The guess number as smaller then the actuall Number!.");
    }
    count++;
}
console.log("Congratulation you win the Game in "+count+" try.");