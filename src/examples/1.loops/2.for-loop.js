// for loop

//examples

// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("---------");

for (let i = 5; i >= 1; i--) {
    console.log(i);

}

console.log("---------");

// Print the multiplication table of 3
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}

console.log("---------");


let fruits = ["Apple", "Banana", "Grapes", "Pineapple"];

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}
console.log("---------");


let fruitss = ["ugh", "ughhgh", "rhbdsjr" , "yurdr"];
for (let i =0; i<fruitss.length; i++){
    console.log(fruitss[i]);
}

console.log("---------");

let messages = [
    "1. why",
    "2. ofc yeah",
    "3. idk",
    "4. eh",
    "5. nvm"
];
for (let i=0; i<messages.length; i++){
    console.log(messages[i]);
}