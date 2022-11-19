"use strict";

const helper = require("./helper");

// n^3 + n^2 * p = m^3, p = (m - n)((m / n + 1/2)^2 + 3/4)
// m = s * n / t, p = n * (s - t) * (s^2 + s * t + t^2) / t^3
// s - t = 1, n = t^3, p = 3 * t^2 + 3 * t + 1

const p131Solution = function (limit) {
  let count = 0;
  let t = 1;
  while (true) {
    let p = 3 * t * t + 3 * t + 1;
    if (p > limit) {
      break;
    }
    if (helper.isPrime(p)) {
      count++;
    }
    t++;
  }
  return count;
};

console.log(p131Solution(10 ** 6));
