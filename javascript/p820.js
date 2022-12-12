"use strict";

// https://en.wikipedia.org/wiki/Repeating_decimal
// the period of 1/p^2 is p*T(p), except p = 3, 487, and 56598313
// T(3^2)=T(3), T(487^2)=T(487), T(56598313^2)=T(56598313)
// A: the string of digits of the transient; (the preperiod)
// P: the string of repeated digits; (the period)

// time cost: 10h 34min 6s

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
        let periodLen = 1;
        for (let j = 0; j < bases.length; j++) {
          if (bases[j] === 2) {
            exp2 = exponents[j];
          } else if (bases[j] === 5) {
            exp5 = exponents[j];
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
        let preperiodLen = Math.max(exp2, exp5);
        let r = (limit - preperiodLen) % periodLen;
        let d = 0;
        if (r === 0) {
          d = findDigit(i, preperiodLen + periodLen);
        } else {
          d = findDigit(i, preperiodLen + r);
        }
        sum += d;
      }
    }
  }
  return sum;
};

// console.log(p820Solution(10 ** 7));

// the nth digit of x/y is the 1st digit of (10^(n-1)*x mod y)/y
// = floor((10^n*x mod 10*y)/y)
// https://www.xarg.org/puzzle/codesignal/reciprocal/

const modPower = function (a, b, p) {
  let ans = 1;
  let exp = b;
  while (exp) {
    if (exp & 1) {
      ans = (ans * a) % p;
    }
    a = (a * a) % p;
    exp >>= 1;
  }
  return ans;
};

const calcNthDigit = function (n, k) {
  const r = modPower(10, n, 10*k);
  return Math.floor(r/k);
};

// time cost: 5s
const p820Solution2 = function (limit) {
  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    sum += calcNthDigit(limit, i);
  }
  return sum;
};

console.log(p820Solution2(10 ** 7));
