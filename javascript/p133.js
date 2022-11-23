"use strict";

const helper = require("./helper");

const p133Solution = function () {
  const primes = [3, 7].concat(helper.getPrimes(100000).slice(4));
  const len = primes.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    let k = helper.findRepunit(primes[i]);
    let t = k;
    while (t % 2 === 0) {
      t = t / 2;
    }
    while (t % 5 === 0) {
      t = t / 5;
    }
    if (t !== 1) {
      sum += primes[i];
    }
  }
  return sum + 7;
};

console.log(p133Solution());
