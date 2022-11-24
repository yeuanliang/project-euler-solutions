"use strict";

const helper = require("./helper");

const p129Solution = function () {
  let start = 10 ** 6 + 1;
  while (true) {
    if (start % 5 === 0) {
      start += 2;
    }
    if (!helper.isPrime(start)) {
      let { bases, exponents } = helper.primeFactorization(start);
      let len = bases.length;
      let ks = [];
      for (let i = 0; i < len; i++) {
        let k = helper.findRepunit(bases[i]);
        ks.push(k);
      }
      let res = ks[0] * bases[0] ** (exponents[0] - 1);
      for (let i = 1; i < len; i++) {
        let t = ks[i] * bases[i] ** (exponents[i] - 1);
        let gcd = helper.gcd(res, t);
        res = (res * t) / gcd;
      }

      if (res > 1000000) {
        return start;
      }
    }
    start += 2;
  }
};

console.log(p129Solution());
