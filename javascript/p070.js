"use strict";

const helper = require("./helper");

const p070Solution = function () {
  let minRate = null;
  let result = {};
  for (let i = 2; i < 10 ** 7; i++) {
    let t = helper.totient(i);
    if (helper.hasSameDigits(t, i)) {
      let r = i / t;
      if (!minRate) {
        minRate = r;
        result.n = i;
        result.totient = t;
      } else if (r < minRate) {
        minRate = r;
        result.n = i;
        result.totient = t;
      }
    }
  }
  console.log(minRate);
  return result;
};

console.log(p070Solution());
