/*A ternary operator in JavaScript is basically a short,
 compact way of writing an if...else statement.

The syntax looks like this:

condition ? valueIfTrue : valueIfFalse

*/

let age = 26;
let canDrink = age >= 21 ? "Yes, you can drink." : "No, you can't drink.";
console.log(canDrink);


console.log("--------");


let score = 75;
console.log(score >= 50 ? "You passed!" : "You failed!");

console.log("--------");

let temp = 30;
let weather = temp > 35 ? "Too hot"
    : temp < 15 ? "Too cold"
    : "Just right";
console.log(weather);

console.log("--------");


let gotJob = true;
console.log(gotJob ? "Celebration time!" : "Back to job hunting...");

console.log("--------");

let interviewRound = 3;
console.log(`Round ${interviewRound}: ${
    interviewRound === 4 ? "Asked about free snacks." : "Answered seriously."
}`);
