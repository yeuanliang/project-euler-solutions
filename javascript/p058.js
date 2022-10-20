"use strict";

const helper = require("./helper");

// similar to problem 28
const p058Solution = function () {
  let numbersCount = 1;
  let primesCount = 0;
  let start = 1;
  for (let i = 1; ; i++) {
    for (let j = 0; j < 4; j++) {
      start += i * 2;
      numbersCount++;
      if (helper.isPrime(start)) {
        primesCount++;
      }
    }
    if (primesCount / numbersCount < 0.1) {
      return 2 * i + 1;
    }
  }
};

console.log(p058Solution());
