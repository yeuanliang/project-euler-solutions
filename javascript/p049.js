"use strict";

const helper = require("./helper");

const p048Solution = function () {
  const primes = helper.getPrimes(10000);
  const primesCount = primes.length;
  const result = [];
  const sequence = [];
  let primePermutations = [];
  for (let i = primesCount - 1; primes[i] > 1000; i--) {
    if (primePermutations.includes(primes[i])) {
      continue;
    }
    let temp = [];
    let p = primes[i];
    temp.push(p);
    for (let j = i - 1; primes[j] > 1000; j--) {
      if (helper.hasSameDigits(primes[j], primes[i])) {
        temp.push(primes[j]);
      }
    }
    if (temp.length >= 3) {
      primePermutations = primePermutations.concat(temp);
      result.push(temp);
    }
  }
  for (let i = 0; i < result.length; i++) {
    let s = result[i];
    if (s.length === 3 && 2 * s[1] === s[0] + s[2]) {
      sequence.push(s);
    } else {
      for (let j = 0; j < s.length - 2; j++) {
        for (let k = j + 1; k < s.length - 1; k++) {
          if (s.includes(2 * s[k] - s[j])) {
            sequence.push([s[j], s[k], 2 * s[k] - s[j]]);
          }
        }
      }
    }
  }
  return sequence;
};

console.log(p048Solution());
