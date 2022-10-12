"use strict";

const p028Solution = function (n) {
  let sum = 1;
  for (let i = 1; i <= (n - 1) / 2; i++) {
    sum += 4 * (2 * i + 1) ** 2 - 12 * i;
  }
  return sum;
};

const p028Solution2 = function (n) {
  let sum = 1;
  let diff = 0;
  let start = 1;
  for (let i = 1; i <= (n - 1) / 2; i++) {
    diff += 2;
    for (let j = 0; j <= 3; j++) {
      start += diff;
      sum += start;
    }
  }
  return sum;
};

// console.log(p028Solution(1001))
console.log(p028Solution2(1001));
