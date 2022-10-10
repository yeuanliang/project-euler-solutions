"use strict";

const helper = require("./helper");

const p027Solution = function(){
  let result = {
    maximum: 0,
  };
  let t = 0;
  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      while (helper.isPrime(t * t + a * t + b)) {
        t = t + 1;
      }
      if (t - 1 > result.maximum) {
        result = {
          maximum: t - 1,
          product: a * b,
          a,
          b,
        };
      }
      t = 0;
    }
  }
  return result
}

console.log(p027Solution());
