// loops introduction

/*What is a Loop?
A loop is a programming structure that repeats a block of code multiple times until a certain condition is met.
It helps avoid writing the same code over and over again.

Why use Loops?
Saves time – less repetitive typing.

Reduces errors – one change updates all iterations.

Makes code shorter & cleaner.

Basic Idea
Every loop generally has:

Initialization – set a starting point.

Condition – decide when the loop should stop.

Update – move to the next step (increment/decrement).

Types of Loops in JavaScript
For loop – runs for a specific number of times.

While loop – runs while a condition is true.

Do-while loop – runs at least once before checking condition.

For...of – loops over iterable objects like arrays.

For...in – loops over object properties.


Real-Life Example
Checking attendance for each student in a list.
Sending the same email to multiple people.
Printing all numbers from 1 to 100.
*/

// Without loop
console.log("Hello");
console.log("Hello");
console.log("Hello");


console.log("---------");
// With loop
for (let i = 0; i < 3; i++) {
    console.log("Hello");
}
console.log("---------");

for (let i = 0; i < 5; i++) {
    console.log("sarayu the great");
}

console.log("---------");
// loops;-;
let messages = [
    "Test 1: She walked in like a boss.",
    "Test 2: The interviewer is already impressed.",
    "Test 3: Wait... why is she talking about coffee?",
    "Test 4: Oh no, she just said 'bruh' to the HR.",
    "Test 5: She's smiling... or maybe crying?"
];

for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

console.log("Verdict: Ah shit, she didn't.");




