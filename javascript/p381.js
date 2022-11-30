"use strict";

const helper = require("./helper");

// (p-1)! ≡ -1 (mod p)
// (p-1)! + (p-2)! + (p-3)! + (p-4)! + (p-5)! ≡ 9 * (p-5)! (mod p)
// (p-5)! ≡ (-24)^(-1) (mod p)

const calcS = function (p) {
  let r = -3 * helper.extgcd(p, 8 % p)["y"];
  r = r % p;
  if (r < 0) {
    r = r + p;
  }
  return r;
};

const p381Solution = function (limit) {
  const primes = helper.getPrimes(limit);
  const len = primes.length;
  console.log(primes.slice(len - 10));
  let sum = 0;
  for (let i = 2; i < len; i++) {
    sum += calcS(primes[i]);
  }
  return sum;
};

console.log(p381Solution(10 ** 8));
