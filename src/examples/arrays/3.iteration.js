// 1. Basic for loop
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// 2. for...of loop
for (let num of nums) {
  console.log(num * 2);
}

// 3. forEach method
nums.forEach((num, index) => {
  console.log(`Index ${index} has value ${num}`);
});

// 4. Nested iteration (2D array)
let grid = [[1, 2], [3, 4]];
for (let row of grid) {
  for (let col of row) {
    console.log(col);
  }
}
