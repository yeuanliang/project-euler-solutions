"use strict";

const helper = require("./helper");

const isAdmissible = function (n) {
  const p = helper.getPrimes(40);
  if (n > Number.MAX_SAFE_INTEGER) {
    return false;
  }
  if (n % 2 === 1) {
    return false;
  }
  let num = n;
  let i = 0;
  while (true) {
    while (num % p[i] === 0) {
      num = num / p[i];
    }
    if (num > 1 && num % p[i + 1] !== 0) {
      return false;
    }
    if (num === 1) {
      return true;
    }
    i++;
  }
};

const nextPrime = function (start) {
  while (true) {
    start = start + 2;
    if (helper.isPrime(start)) {
      return start;
    }
  }
};

const p293Solution = function (limit) {
  const pfn = new Set();
  let sum = 0;
  for (let i = 2; i < limit; i += 2) {
    if (isAdmissible(i)) {
      let p = nextPrime(i + 1);
      let t = p - i;
      if (pfn.has(t)) {
        continue;
      } else {
        pfn.add(t);
      }
      sum += t;
    }
  }
  return sum;
};

console.log(p293Solution(10 ** 9));
