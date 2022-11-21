"use strict";

const helper = require("./helper");

const calculateCombinatorial = function (n, r) {
  const primes = helper.getPrimes(n);
  const primesCount = primes.length;
  if (r > n / 2) {
    r = n - r;
  }
  if (r === 0 || r === n) {
    return [1];
  }
  const check = Array.from({ length: r + 1 }, () => 0);

  let result = new Map();
  let k = primesCount - 1;
  while (primes[k] > n - r) {
    check[primes[k] - (n - r)] = 1;
    result.set(primes[k], 1);
    k--;
  }
  let start = Math.floor(n / r);
  let i = r;
  while (i > 0) {
    while (start * i > n - r && start * i <= n) {
      if (check[start * i - (n - r)] === 0) {
        let { bases, exponents } = helper.primeFactorization(start);
        let len = bases.length;
        check[start * i - (n - r)] = 1;
        for (let i = 0; i < len; i++) {
          if (result.has(bases[i])) {
            result.set(bases[i], result.get(bases[i]) + exponents[i]);
          } else {
            result.set(bases[i], exponents[i]);
          }
        }
      } else {
        let { bases, exponents } = helper.primeFactorization(i);
        let len = bases.length;
        for (let i = 0; i < len; i++) {
          if (result.has(bases[i])) {
            result.set(bases[i], result.get(bases[i]) - exponents[i]);
          } else {
            result.set(bases[i], 0 - exponents[i]);
          }
        }
      }
      i--;
    }
    start++;
  }
  for (let i = 1; i < r; i++) {
    if (check[i] === 0) {
      let { bases, exponents } = helper.primeFactorization(n - r + i);
      let len = bases.length;
      for (let i = 0; i < len; i++) {
        if (result.has(bases[i])) {
          result.set(bases[i], result.get(bases[i]) + exponents[i]);
        } else {
          result.set(bases[i], exponents[i]);
        }
      }
    }
  }
  return result
};

const p231Solution = function (n,r) {
  let sum = 0;
  const result = calculateCombinatorial(n,r)
  for (const [key, value] of result) {
    sum += key * value;
  }
  return sum
};

console.log(p231Solution(20000000, 15000000));
