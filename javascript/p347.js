"use strict";

const helper = require("./helper");

const calcMaxNumber = function (p, q, limit) {
  if (p > q) {
    let temp = p;
    p = q;
    p = temp;
  }
  if (p * q > limit) {
    return 0;
  }
  let exp1 = Math.floor(Math.log10(limit) / Math.log10(p));
  let exp2 = Math.floor(Math.log10(limit) / Math.log10(q));
  let max = 0;
  for (let i = 1; i <= exp1; i++) {
    for (let j = 1; j <= exp2; j++) {
      let temp = p ** i * q ** j;
      if (temp > limit) {
        break;
      }
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
};

const p347Solution = function (limit) {
  const primes = helper.getPrimes(limit / 2);
  const len = primes.length;
  let sum = 0n;
  for (let i = 0; i < len; i++) {
    if (primes[i] ** 2 > limit) {
      break;
    }
    for (let j = i + 1; j < len; j++) {
      if (primes[i] * primes[j] > limit) {
        break;
      }
      sum += BigInt(calcMaxNumber(primes[i], primes[j], limit));
    }
  }
  return sum;
};

console.log(p347Solution(10 ** 7));
