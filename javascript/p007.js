"use strict";

const helper = require("./helper");

const nthPrime = function (num) {
  let count = 1;
  let i = 3;
  while (count < num) {
    if (helper.isPrime(i)) {
      count += 1;
    }
    i += 2;
  }
  return i - 2;
};

console.log(nthPrime(10001));
