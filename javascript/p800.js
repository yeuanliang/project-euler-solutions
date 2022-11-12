"use strict";

const helper = require("./helper");
const p800Solution = function () {
  const limit = 800800 * Math.log10(800800);
  const n = Math.ceil(limit / Math.log10(2));
  const primes = helper.getPrimes(n);
  const len = primes.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let product =
        primes[j] * Math.log10(primes[i]) + primes[i] * Math.log10(primes[j]);
      if (product > limit) {
        break;
      } else {
        count++;
      }
    }
  }
  return count;
};
console.log(p800Solution());
