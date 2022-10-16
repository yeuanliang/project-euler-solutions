"use strict";

const helper = require("./helper");

const isTruncatablePrime = function (p) {
  let truncatbale = true;
  let s = p + "";
  while (s.length > 1) {
    s = s.slice(1);
    truncatbale = truncatbale && helper.isPrime(+s);
    if (!truncatbale) {
      return false;
    }
  }
  s = p + "";
  while (s.length > 1) {
    s = s.slice(0, -1);
    truncatbale = truncatbale && helper.isPrime(+s);
    if (!truncatbale) {
      return false;
    }
  }
  return truncatbale;
};

const p037Solution = function () {
  const truncatbalePrimes = [];
  const primes = helper.getPrimes(1000000);
  const primesCount = primes.length;
  for (let i = 5; i < primesCount; i++) {
    if (isTruncatablePrime(primes[i])) {
      truncatbalePrimes.push(primes[i]);
    }
    if (truncatbalePrimes.length === 11) {
      break;
    }
  }
  return truncatbalePrimes;
};

console.log(p037Solution().reduce((x, y) => x + y));
