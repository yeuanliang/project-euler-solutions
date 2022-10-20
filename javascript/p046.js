"use strict";

const helper = require("./helper");

const isDecomposable = function (odd) {
  const primes = helper.getPrimes(odd).slice(1);
  const primesCount = primes.length;
  let result = false;
  for (let i = 0; i < primesCount; i++) {
    let temp = (odd - primes[i]) / 2;
    let j = 1;
    while (j * j <= temp) {
      if (j * j === temp) {
        result = true;
      }
      j += 1;
    }
  }
  return result;
};

const p046Solution = function () {
  for (let i = 9; ; i += 2) {
    if (helper.isPrime(i)) {
      continue;
    }
    if (!isDecomposable(i)) {
      return i;
    }
  }
};

console.log(p046Solution());
