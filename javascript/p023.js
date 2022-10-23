"use strict";

const helper = require("./helper");

const isAbundantNumber = function (n) {
  return helper.sumOfDivisors(n) - n > n;
};

const allAbundantNumbers = function (n) {
  const abundantNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (isAbundantNumber(i)) {
      abundantNumbers.push(i);
    }
  }
  return abundantNumbers;
};

const p023Solution = function (max) {
  let sum = 0;
  let checked = [];
  for (let i = 0; i < max + 1; i++) {
    checked.push(false);
  }
  const abundantNumbers = allAbundantNumbers(max);
  const count = abundantNumbers.length;
  for (let i = 0; i < count; i++) {
    for (let j = i; j < count; j++) {
      if (abundantNumbers[i] + abundantNumbers[j] <= max) {
        checked[abundantNumbers[i] + abundantNumbers[j]] = true;
      } else {
        break;
      }
    }
  }
  for (let i = 1; i < max + 1; i++) {
    if (!checked[i]) {
      sum += i;
    }
  }
  return sum;
};

console.log(p023Solution(28123));
