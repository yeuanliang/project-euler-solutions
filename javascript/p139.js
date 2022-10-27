"use strict";

const helper = require("./helper");

// time cost: 5s
const p139Solution = function () {
  const limit = 10 ** 8;
  let count = 0;
  for (let i = 1; i < Math.sqrt(limit); i++) {
    for (let j = i + 1; j < Math.sqrt(limit); j++) {
      if (helper.gcd(i, j) === 1) {
        let a = j * j - i * i;
        let b = 2 * i * j;
        let c = j * j + i * i;
        if (c > limit / 2) {
          break;
        }
        let d = Math.abs(a - b);
        if (helper.gcd(a, b) === 1 && (a % d === 0 || b % d === 0)) {
          let k = 1;
          while (k * (a + b + c) < limit) {
            count += 1;
            k++;
          }
        }
      }
    }
  }
  return count;
};

console.log(p139Solution());
