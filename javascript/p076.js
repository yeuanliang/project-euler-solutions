"use strict";

// Similar to Problem 31
const p076Solution = function (n) {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  const ways = [];
  for (let i = 0; i <= n; i++) {
    ways[i] = 0;
  }
  ways[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = numbers[i]; j <= n; j++) {
      ways[j] = ways[j] + ways[j - numbers[i]];
    }
  }
  return ways[n]-1;
};

console.log(p076Solution(100))
