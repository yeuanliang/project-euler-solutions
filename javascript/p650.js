"use strict";

// time cost: 3min26sec
const helper = require("./helper");

// https://en.wikipedia.org/wiki/Binomial_coefficient
const p = 10n ** 9n + 7n;

const productBCFormula = function (n) {
  const bases = [];
  const exponents = [];
  // i**(2*i-n-1)
  for (let i = 2; i <= n; i++) {
    if (helper.isPrime(i)) {
      bases.push(i);
      exponents.push(2 * i - n - 1);
    } else {
      let { bases: b, exponents: exp } = helper.primeFactorization(i);
      for (let j = 0; j < b.length; j++) {
        let idx = bases.indexOf(b[j]);
        exponents[idx] += exp[j] * (2 * i - n - 1);
      }
    }
  }
  return { bases, exponents };
};

const sumD = function (n) {
  let sum = 0n;
  for (let i = 1; i <= n; i++) {
    let { bases, exponents } = productBCFormula(i);
    let s = 1n;
    for (let i = 0; i < bases.length; i++) {
      let inv = helper.extgcd(Number(p), bases[i] - 1).y;
      if (inv < 0) {
        inv += Number(p);
      }
      s *=
        (BigInt(inv) *
          (helper.modPower(BigInt(bases[i]), BigInt(exponents[i] + 1), p) -
            1n)) %
        p;
    }
    sum += s;
  }
  return sum % p;
};

console.log(sumD(20000));
