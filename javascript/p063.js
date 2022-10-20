"use strict";

const findPower = function (n) {
  let count = 0;
  let start = 1;
  while (start ** n < 10 ** n) {
    if (start ** n >= 10 ** (n - 1)) {
      count += 1;
    }
    start++;
  }
  return count;
};

const p063Solution = function () {
  let count = 0;
  let start = 1;
  while (true) {
    count += findPower(start);
    if (findPower(start) === 0) {
      break;
    }
    start++;
  }
  return count;
};

console.log(p063Solution());
