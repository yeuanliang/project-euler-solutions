"use strict";

const helper = require("./helper");

const p055Solution = function () {
  const lychrelNumbers = [];
  let iterationsCount = 0;
  let sum = 0;
  for (let i = 1; i < 10000; i++) {
    sum = i + helper.reverse(i);
    while (true) {
      if (iterationsCount > 50) {
        lychrelNumbers.push(i);
        break;
      }
      if (helper.isPalindrome(sum)) {
        break;
      } else {
        sum += helper.reverse(sum);
      }
      iterationsCount++;
    }
    iterationsCount = 0;
  }
  return lychrelNumbers;
};

console.log(p055Solution().length);
