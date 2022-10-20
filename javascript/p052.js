"use strict";

const helper = require("./helper");

const p052Solution = function (k) {
  for (let i = 1; i <= k; i++) {
    for (let j = 10 ** i; j < 10 ** i + 7 * 10 ** (i - 1); j++) {
      let m = 2;
      while (true) {
        if (helper.hasSameDigits(j, m * j)) {
          m += 1;
          if (m === 6) {
            return j;
          }
        } else {
          break;
        }
      }
    }
  }
};

console.log(p052Solution(5));
