// while loop

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log("---------");

let u = 5;
while (u >= 0) {
    console.log(u);
    u--;
}

console.log("---------");

let num = 9;
let j = 1;
while (j<=10) {
console.log(`${num} x ${j} = ${num*j}`);
j++;
}

console.log("---------");

let snacks = ["Chocolate", "Cookie", "Popcorn"];
let index = 0;

while (index < snacks.length) {
    console.log(snacks[index]);
    index++;
}

let messages = [
    "1. why",
    "2. ofc yeah",
    "3. idk",
    "4. eh",
    "5. oh... wait... nope. she's gone."
];

for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

