// do while loop

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

console.log("---------");

let count = 5;
do {
    console.log(count);
    count--;
} while (count > 0);


console.log("---------");

let num = 4;
let j = 1;
do {
    console.log(`${num} x ${j} = ${num * j}`);
    j++;
} while (j <= 10);

console.log("---------");

let snacks = ["Chocolate", "Cookie", "popcorn"];
let index = 0;
do {
    console.log(snacks[index]);
    index++;
} while (index < snacks.length);


console.log("---------");  

let sarayuspatience = 1;
do { 
    console.log(`limit ${sarayuspatience}:` + [
        "shes trying",
        "slowly chipping off",
        "at her breaking point",
        "ok shes done"
    ][sarayuspatience-1]);
    sarayuspatience++;
} while (sarayuspatience <= 4);

console.log("dont test her");