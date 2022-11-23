"use strict";

// time cost: 1h 4m 40s
const helper = require("./helper");

const p132Solution = function () {
  const primes = [3, 7].concat(helper.getPrimes(200000).slice(4));
  const len = primes.length;
  let count = 0;
  const factors = [];
  for (let i = 0; i < len; i++) {
    if (count === 40) {
      break;
    }
    let k = helper.findRepunit(primes[i]);
    if (10 ** 9 % k === 0) {
      factors.push(primes[i]);
      count++;
    }
  }
  return factors.reduce((x, y) => x + y);
};

console.log(p132Solution());

// [
//     11,    17,    41,    73,    101,
//    137,   251,   257,   271,    353,
//    401,   449,   641,   751,   1201,
//   1409,  1601,  3541,  4001,   4801,
//   5051,  9091, 10753, 15361,  16001,
//  19841, 21001, 21401, 24001,  25601,
//  27961, 37501, 40961, 43201,  60101,
//  62501, 69857, 76001, 76801, 160001
// ]