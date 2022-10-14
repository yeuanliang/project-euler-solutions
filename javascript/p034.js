"use strict";

const helper = require("./helper");

const p034Solution = function () {
  const limit = helper.factorial(10);
  const factorials = [];
  for (let i = 0; i < 10; i++) {
    factorials.push(helper.factorial(i));
  }
  let i = 11;
  let numbers = [];
  while (i < limit) {
    let n = i;
    let sum = 0;
    while (n > 0) {
      if (factorials[n % 10] > i) {
        break;
      } else {
        sum += factorials[n % 10];
      }
      n = Math.floor(n / 10);
    }
    if (sum === i) {
      numbers.push(i);
    }
    i += 1;
  }
  return numbers;
};

console.log(p034Solution().reduce((x, y) => x + y));
