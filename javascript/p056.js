"use strict";

const helper = require("./helper");

const p056Solution = function (a, b) {
  let maxDigitSum = 0;
  for (let i = 2; i < a; i++) {
    for (let j = 2; j < b; j++) {
      let sum = helper.customPower(i, j).reduce((x, y) => x + y);
      if (sum > maxDigitSum) {
        maxDigitSum = sum;
      }
    }
  }
  return maxDigitSum;
};

console.log(p056Solution(100, 100));
