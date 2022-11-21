"use strict";

const helper = require("./helper");

const p187Solution = function (limit) {
  const primes = helper.getPrimes(Math.floor(limit / 2));
  const len = primes.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (primes[i] * primes[j] < limit) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

console.log(p187Solution(10 ** 8));
