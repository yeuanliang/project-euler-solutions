"use strict";

const helper = require("./helper");

const p041Solution = function () {
  let result = 0;
  let start = 7654321;
  while (start >= 1234567) {
    if (start % 3 === 0) {
      start -= 2;
    }
    if (!helper.isPandigital(start + "")) {
      start -= 2;
    } else if (helper.isPrime(start)) {
      result = start;
      break;
    }
    start -= 2;
  }
  return result;
};
console.log(p041Solution());

// find all pandigital primes
const findPandigitalPrimes = function () {
  const primes = helper.getPrimes(7654321).sort((a, b) => b - a);
  const primesCount = primes.length;
  const pandigitalPrimes = [];
  for (let i = 0; i < primesCount; i++) {
    if (helper.isPandigital(primes[i] + "")) {
      pandigitalPrimes.push(primes[i]);
    }
  }
  return pandigitalPrimes;
};

// console.log(findPandigitalPrimes());
