"use strict";

const helper = require("./helper");

const isReversible = function (n) {
  if (n % 10 === 0) {
    return false;
  }
  let sum = n + helper.reverse(n);
  while (sum > 0) {
    if ((sum % 10) % 2 === 0) {
      return false;
    }
    sum = (sum - (sum % 10)) / 10;
  }
  return true;
};

const p145Solution = function (limit) {
  let count = 0;
  for (let i = 1; i <= limit; i++) {
    if (isReversible(i)) {
      count++;
    }
  }
  return count;
};

console.log(p145Solution(10 ** 9));
