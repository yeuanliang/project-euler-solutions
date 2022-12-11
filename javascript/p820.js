"use strict";

// https://en.wikipedia.org/wiki/Repeating_decimal
// time cost: 

const helper = require("./helper");

const genPeriods = function (limit) {
  const primes = helper.getPrimes(limit);
  const len = primes.length;
  const periods = new Map();
  periods.set(2, 0);
  periods.set(3, 1);
  periods.set(5, 0);
  for (let i = 3; i < len; i++) {
    let r = 10;
    let exp = 1;
    while (true) {
      r = r % primes[i];
      if (r === 1) {
        periods.set(primes[i], exp);
        break;
      }
      exp += 1;
      r = 10 * r;
    }
  }
  return periods;
};

const findDigit = function (n, k) {
  let count = 0;
  let divisor = 1;
  while (true) {
    divisor *= 10;
    let remainder = divisor % n;
    let quotient = Math.floor(divisor / n);
    divisor = remainder;
    count++;
    if (count === k) {
      return quotient;
    }
  }
};

const p820Solution = function (limit) {
  const st = Date.now();
  const periods = genPeriods(limit);
  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    if (periods.has(i)) {
      // i is prime
      let t = periods.get(i);
      let d = 0;
      if (t !== 0) {
        if (limit % t === 0) {
          d = findDigit(i, t);
        } else {
          d = findDigit(i, limit % t);
        }
        sum += d;
      }
    } else {
      // i is not prime
      let { bases, exponents } = helper.primeFactorization(i);
      if (bases.length === 1 && (bases[0] === 2 || bases[0] === 5)) {
        continue;
      } else if (bases.length === 2 && bases[0] === 2 && bases[1] === 5) {
        continue;
      } else {
        let exp2 = 0;
        let exp5 = 0;
        let repeatLen = 1;
        for (let j = 0; j < bases.length; j++) {
          if (bases[j] === 2) {
            exp2 = exponents[j];
          } else if (bases[j] === 5) {
            exp5 = exponents[j];
          } else {
            let t = bases[j] ** (exponents[j] - 1) * periods.get(bases[j]);
            repeatLen = helper.lcm(repeatLen, t);
          }
        }
        let nonRepeatLen = Math.max(exp2, exp5);
        let r = (limit - nonRepeatLen) % repeatLen;
        let d = 0;
        if (r === 0) {
          d = findDigit(i, nonRepeatLen + repeatLen);
        } else {
          d = findDigit(i, nonRepeatLen + r);
        }
        sum += d;
      }
    }
  }
  return sum;
};

console.log(p820Solution(10 ** 7));
