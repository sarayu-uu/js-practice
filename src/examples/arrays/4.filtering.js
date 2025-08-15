// 1. Filter even numbers
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// 2. Filter strings only
let mixed = [1, "hello", true, "world"];
let strings = mixed.filter(item => typeof item === "string");
console.log(strings);

// 3. Filter by condition from objects
let users = [
  { name: "noone", age: 25 },
  { name: "someone", age: 17 },
  { name: "everyone", age: 30 }
];
let adults = users.filter(user => user.age >= 18);
console.log(adults);

// 4. Complex filtering (2 conditions)
let food = [
  { name: "ebi tempura sushi", price: 1000, available: true },
  { name: "tempura uramaki", price: 500, available: false },
  { name: "boa buns", price: 300, available: true }
];
let availableHere = food.filter(
  p => p.price <= 500 && p.available
);
console.log(availableHere);
