"use strict";

// time cost: 31s

const helper = require("./helper");

const repunits = new Map();

const findRepunitComposite = function (n) {
  const { bases, exponents } = helper.primeFactorization(n);
  const len = bases.length;
  const ks = [];
  for (let i = 0; i < len; i++) {
    let k = repunits.get(bases[i]);
    ks.push(k);
  }
  let res = ks[0] * bases[0] ** (exponents[0] - 1);
  for (let i = 1; i < len; i++) {
    let t = ks[i] * bases[i] ** (exponents[i] - 1);
    let gcd = helper.gcd(res, t);
    res = (res * t) / gcd;
  }
  return res;
};

const p130Solution = function () {
  const primes = helper.getPrimes(100000);
  const p = [3, 7].concat(primes.slice(4));
  const len = p.length;
  const solutions = [];
  let count = 0;
  for (let i = 0; i < len; i++) {
    let k = helper.findRepunit(p[i]);
    repunits.set(p[i], k);
    let diff = p[i + 1] - p[i];
    if (diff >= 4) {
      let c = p[i] + 2;
      if (c % 5 === 0) {
        c += 2;
      }
      while (c < p[i + 1]) {
        let ck = findRepunitComposite(c);
        if ((c - 1) % ck === 0) {
          solutions.push(c);
          count++;
          if (count === 25) {
            return solutions.reduce((x, y) => x + y);
          }
        }
        c += 2;
        if (c % 5 === 0) {
          c += 2;
        }
      }
    } else {
      continue;
    }
  }
};

console.log(p130Solution());
