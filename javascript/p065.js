"use strict";

const helper = require("./helper");

// Similar to Problem 57
// https://en.wikipedia.org/wiki/Continued_fraction
const p065Solution = function (k) {
  const numbers = [2, 1, 2];
  for (let i = 3; i < k; i++) {
    if ((i + 1) % 3 === 0) {
      numbers.push(2 * (Math.floor(i / 3) + 1));
    } else {
      numbers.push(1);
    }
  }
  let a = [2];
  let b = [3];
  const numerators = [[2], [3]];
  for (let i = 2; i < k; i++) {
    let c = helper.bigNumberSum(a, helper.bigNumberMultiply([numbers[i]], b));
    numerators.push(c);
    a = b;
    b = c;
  }
  return numerators[numerators.length - 1];
};

console.log(p065Solution(100).reduce((x, y) => x + y));
