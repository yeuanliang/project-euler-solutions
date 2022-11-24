"use strict";

const helper = require("./helper");

const p808Solution = function () {
  const primes = helper.getPrimes(100000000);
  const len = primes.length;
  const rps = new Set();
  for (let i = 0; i < len; i++) {
    if (primes[i] < 10) {
      continue;
    }
    if (rps.size === 50) {
      break;
    }
    let s = primes[i] ** 2;
    if (helper.isPalindrome(s)) {
      continue;
    } else {
      let t = helper.reverse(s);
      if (helper.isSquare(t)) {
        let r = Math.sqrt(t);
        if (helper.isPrime(r)) {
          rps.add(t);
          rps.add(s);
        }
      }
    }
  }
  return new Array(...rps).reduce((x, y) => x + y);
};

console.log(p808Solution());
