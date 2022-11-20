"use strict";

const helper = require("./helper");

const p123Solution = function () {
  const primes = helper.getPrimes(10 ** 6);
  let start = 7037;
  let r = 0;
  while (true) {
    let d = BigInt(primes[start] * primes[start]);
    let exp = BigInt(start + 1);
    let r1 = helper.modPower(BigInt(primes[start] - 1), exp, d);
    let r2 = helper.modPower(BigInt(primes[start] + 1), exp, d);
    r = Number((r1 + r2) % d);
    if (r > 10 ** 10) {
      return start + 1;
    }
    start++;
  }
};

console.log(p123Solution());
