"use strict";

const helper = require("./helper");

const p038Solution = function () {
  const pandigitals = [];
  for (let i = 1; i < 10000; i++) {
    let sum = "";
    for (let j = 1; j < 10; j++) {
      sum += i * j;
      if (sum.length === 9 && helper.isPandigital(sum)) {
        pandigitals.push(sum);
      }
      if (sum.length > 9) {
        break;
      }
    }
  }
  return pandigitals;
};

console.log(p038Solution().sort().pop());
