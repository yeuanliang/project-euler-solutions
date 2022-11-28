"use strict";

const helper = require("./helper");

const p050Solution = function () {
  const primes = helper.getPrimes(1000000);
  const primesCount = primes.length;
  const result = { maxLength: 0 };

  for (let i = 0; i < primesCount; i++) {
    let sum = 0;
    for (let j = i; j < primesCount; j++) {
      sum += primes[j];
      if (sum % 2 === 1 && helper.isPrime(sum)) {
        if (sum < 1000000) {
          if (result.maxLength < j - i + 1) {
            result.maxLength = j - i + 1;
            result.firstPrime = primes[i];
            result.sum = sum;
          }
        } else {
          break;
        }
      }
    }
  }
  return result;
};

console.log(p050Solution());
