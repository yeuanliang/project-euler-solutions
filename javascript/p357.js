"use strict";

const helper = require("./helper");

const check = function (n) {
  const divisors = helper.genDivisors(n);
  for (const d of divisors) {
    let t = d + n / d;
    if (!helper.isPrime(t)) {
      return false;
    }
  }
  return true;
};

const p357Solution = function () {
  let sum = 1; // 1 + 1 / 1 = 2
  for (let i = 2; i <= 10 ** 8; i += 2) {
    if (helper.isPrime(i + 1)) {
      if (check(i)) {
        sum += i;
      }
    }
  }
  return sum;
};

console.log(p357Solution());
