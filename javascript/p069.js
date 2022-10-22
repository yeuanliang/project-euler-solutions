"use strict";

const helper = require("./helper");

// https://en.wikipedia.org/wiki/Euler%27s_totient_function

const p069Solution = function (limit) {
  let i = 2;
  let max = 0;
  let result = 0;
  while (i < limit) {
    let r = i / helper.totient(i);
    if (r > max) {
      max = r;
      result = i;
    }
    i++;
  }
  return result;
};

console.log(p069Solution(1000000));

const p069Solution2 = function (limit) {
  let primes = helper.getPrimes(100);
  let product = 1;
  for (let i = 0; i < primes.length; i++) {
    product *= primes[i];
    if (product * primes[i + 1] > limit) {
      return product;
    }
  }
};

console.log(p069Solution2(1000000));
