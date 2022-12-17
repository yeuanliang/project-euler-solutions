"use strict";

// https://en.wikipedia.org/wiki/Repeating_decimal
// the period of 1/p^2 is p*T(p), except p = 3, 487, and 56598313
// T(3^2)=T(3), T(487^2)=T(487), T(56598313^2)=T(56598313)

// time cost: 27min 9s

const helper = require("./helper");

const genPeriods = function (limit) {
  const primes = helper.getPrimes(limit);
  const len = primes.length;
  const periods = new Map();
  periods.set(2, 0);
  periods.set(3, 1);
  periods.set(5, 0);
  for (let i = 3; i < len; i++) {
    let divisors = helper.genDivisors(primes[i] - 1).sort((a, b) => a - b);
    for (let divisor of divisors) {
      let r = helper.modPower(BigInt(10), BigInt(divisor), BigInt(primes[i]));
      if (Number(r) !== 1) {
        continue;
      } else {
        periods.set(primes[i], divisor);
        break;
      }
    }
  }
  return periods;
};

const p417Solution = function (limit) {
  const periods = genPeriods(limit);
  let sum = 0;
  for (let i = 3; i <= limit; i++) {
    if (periods.has(i)) {
      // i is prime
      let t = periods.get(i);
      sum += t;
    } else {
      // i is not prime
      let { bases, exponents } = helper.primeFactorization(i);
      if (bases.length === 1 && (bases[0] === 2 || bases[0] === 5)) {
        continue;
      } else if (bases.length === 2 && bases[0] === 2 && bases[1] === 5) {
        continue;
      } else {
        let periodLen = 1;
        for (let j = 0; j < bases.length; j++) {
          if (bases[j] === 2 || bases[j] === 5) {
            continue;
          } else if (bases[j] === 3 || bases[j] === 487) {
            if (exponents[j] <= 2) {
              periodLen = helper.lcm(periodLen, periods.get(bases[j]));
            } else {
              let t = bases[j] ** (exponents[j] - 2) * periods.get(bases[j]);
              periodLen = helper.lcm(periodLen, t);
            }
          } else {
            let t = bases[j] ** (exponents[j] - 1) * periods.get(bases[j]);
            periodLen = helper.lcm(periodLen, t);
          }
        }
        sum += periodLen;
      }
    }
  }
  return sum;
};

console.log(p417Solution(10 ** 8));
