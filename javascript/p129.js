"use strict";

const helper = require("./helper");

const findK = function (n) {
  if (n === 3) {
    return 3;
  }
  let i = 2n;
  while (true) {
    let r = helper.modPower(10n, i, BigInt(n));
    if (r === 1n) {
      return Number(i);
    }
    i++;
  }
};

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
        let k = findK(bases[i]);
        ks.push(k);
      }
      let found = true;
      for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
          if (helper.gcd(ks[i], ks[j]) === 1) {
            found = found && true;
          } else {
            found = found && false;
          }
        }
      }
      if (found) {
        let num = 1;
        for (let i = 0; i < len; i++) {
          num *= ks[i] ** exponents[i];
        }
        if (num > 1000000) {
          return start;
        }
      }
    } else {
      if (findK(start) > 1000000) {
        console.log(start);
        return;
      }
    }
    start += 2;
  }
};

console.log(p129Solution());
