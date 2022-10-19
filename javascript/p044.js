"use strict";

const helper = require('./helper')

const pentagonal = function (n) {
  return (n * (3 * n - 1)) / 2;
};

const p044Solution = function () {
  // m > n
  // difference = P(m) - P(n) = P(m-n) + 3 * n * (m - n)=(m - n) * (3 * (m + n) - 1) / 2 = P(p)
  // m - n = l, difference = P(l) + 3 * l * n
  // sum = P(m) + P(n) = 2*P(n) + difference
  let p = 1;
  let difference = 0;
  while (true) {
    difference = pentagonal(p);
    let l = 1;
    let n = 1;
    while (n >= 1) {
      n = (difference - pentagonal(l)) / (3 * l);
      if (n >= 1 && Number.isInteger(n)) {
        let sum = 2 * pentagonal(n) + difference;
        if (helper.isPentagonal(sum)) {
          return difference;
        }
      }
      l = l + 1;
    }
    p = p + 1;
  }
};

console.log(p044Solution());
