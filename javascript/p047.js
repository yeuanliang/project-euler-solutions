"use strict";

const helper = require("./helper");

const p047Solution = function () {
  for (let i = 647; ; i++) {
    if (helper.primeFactorization(i).bases.length === 4) {
      if (helper.primeFactorization(i + 1).bases.length === 4) {
        if (helper.primeFactorization(i + 2).bases.length === 4) {
          if (helper.primeFactorization(i + 3).bases.length === 4) {
            return i;
          }
        }
      }
    }
  }
};

console.log(p047Solution());
