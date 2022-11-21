"use strict";

const helper = require("./helper");

const isSemidivisible = function (n) {
  let root = Math.sqrt(n);
  if (Number.isInteger(root) && helper.isPrime(root)) {
    return false;
  } else {
    let lps = Math.floor(root);
    let ups = Math.ceil(root);
    while (!helper.isPrime(lps)) {
      lps--;
    }
    while (!helper.isPrime(ups)) {
      ups++;
    }
    if (
      (n % lps === 0 && n / lps !== ups) ||
      (n % ups === 0 && n / ups !== lps)
    ) {
      return true;
    } else {
      return false;
    }
  }
};

const p234Solution = function (limit) {
  const r = Math.floor(Math.sqrt(limit));
  const primes = helper.getPrimes(r);
  const lastPrime = primes[primes.length - 1];
  if (lastPrime * (lastPrime + 1) < limit) {
    let t = lastPrime + 1;
    while (!helper.isPrime(t)) {
      t++;
    }
    primes.push(t);
  }
  const len = primes.length;
  let sum = 0n;
  for (let i = 0; i < len - 1; i++) {
    let k = primes[i] + 1;
    let l = primes[i + 1] - 1;
    let upper = primes[i + 1] ** 2;
    if (upper > limit) {
      upper = limit;
    }
    let lower = primes[i] ** 2;
    while (k * primes[i] < upper) {
      if (k !== primes[i + 1]) {
        sum += BigInt(k * primes[i]);
      }
      k++;
    }
    while (l * primes[i + 1] > lower) {
      if (l !== primes[i]) {
        if (l * primes[i + 1] <= limit) {
          sum += BigInt(l * primes[i + 1]);
        }
      }
      l--;
    }
  }
  return sum;
};

console.log(p234Solution(999966663333));
