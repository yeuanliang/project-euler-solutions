"use strict";

// time cost: 40s
const helper = require("./helper");

const p179Solution = function (limit) {
  let count = 0;
  let count1 = helper.countDivisors(2);
  for (let n = 2; n < limit - 1; n++) {
    let count2 = helper.countDivisors(n + 1);
    if (count1 === count2) {
      count++;
    }
    count1 = count2;
  }
  return count;
};

console.log(p179Solution(10 ** 7));
