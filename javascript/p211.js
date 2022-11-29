"use strict";

// time cost: 7m 32s
const helper = require("./helper");

const sigma2 = function (n) {
  if (n === 1) {
    return 1;
  }
  const { bases, exponents } = helper.primeFactorization(n);
  let sum = 1;
  let len = bases.length;
  for (let i = 0; i < len; i++) {
    sum *= (bases[i] ** (2 * (exponents[i] + 1)) - 1) / (bases[i] ** 2 - 1);
  }
  return sum;
};

const p211Solution = function (limit) {
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    if (helper.isSquare(sigma2(i))) {
      sum += i;
    }
  }
  return sum;
};

console.log(p211Solution(64000000));
