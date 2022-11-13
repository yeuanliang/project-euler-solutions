"use strict";

const helper = require("./helper");
const primes = helper.getPrimes(10000);

const primeFactorization = function (n) {
  const bases = [];
  const exponents = [];
  for (let i = 0; primes[i] * primes[i] <= n; i++) {
    if (n % primes[i] == 0) {
      let count = 0;
      while (n % primes[i] == 0) {
        n /= primes[i];
        count += 1;
      }
      bases.push(primes[i]);
      exponents.push(count);
    }
  }
  if (n > 1) {
    bases.push(n);
    exponents.push(1);
  }
  return { bases, exponents };
};

const genDivisors = function (bases, exponents) {
  let i = 0;
  let temp = [];
  let divisors = [1];
  while (i < bases.length) {
    for (let j = 0; j <= exponents[i]; j++) {
      for (let k = 0; k < divisors.length; k++) {
        temp.push(divisors[k] * bases[i] ** j);
      }
    }
    divisors = temp;
    temp = [];
    i++;
  }
  return divisors;
};

const check = function (n) {
  const { bases, exponents } = helper.getDivisors(n);
  const divisors = genDivisors(bases, exponents);
  for (const d of divisors) {
    let t = d + n / d;
    if (!helper.isPrime(t)) {
      return false;
    }
  }
  return true;
};

const p357Solution = function () {
  let sum = 1; // 1 + 1 / 1 = 2
  for (let i = 2; i <= 10 ** 8; i += 2) {
    if (helper.isPrime(i + 1)) {
      if (check(i)) {
        sum += i;
      }
    }
  }
  return sum;
};

console.log(p357Solution());