"use strict";

const helper = require("./helper");

const p053Solution = function (n) {
  let count = 0;
  for (let i = 10; i <= n; i++) {
    for (let j = 2; j < i - 1; j++) {
      let c = helper.calculateCombinatorial(i, j);
      let product = 1;
      for (let k = 0; k < c.length; k++) {
        product *= c[k];
        if (product > 1000000) {
          count++;
          break;
        }
      }
    }
  }
  return count;
};

console.log(p053Solution(100));
