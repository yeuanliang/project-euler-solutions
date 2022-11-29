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

// console.log(p211Solution(64000000));

// time cost: 21s
const p211Solution2 = function (limit) {
  const divSum = Array.from({ length: limit }, (v, i) => {
    if (i < 2) {
      return i;
    } else {
      return 1 + i * i;
    }
  });
  for (let i = 2; i * i < limit; i++) {
    for (let m = i, j = i * m; j < limit; j += i, m++) {
      divSum[j] += i === m ? i * i : i * i + m * m;
    }
  }
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    if (helper.isSquare(divSum[i])) {
      sum += i;
    }
  }
  return sum;
};

console.log(p211Solution2(64000000));
