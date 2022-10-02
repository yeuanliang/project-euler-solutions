"use strict";

const helper = require("./helper");

const sumPrimes = function (n) {
  const primes = helper.getPrimes(n);
  return primes.reduce((x, y) => x + y);
};

console.log(sumPrimes(2000000));
