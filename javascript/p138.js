"use strict";
const helper = require("./helper");
// x^2 - 20*y^2 = -4
// x = 5 * b ± 4 , y = L
// x = 76 , y = 17

const p138Solution = function () {
  const a = helper.findContinuedFraction(20); //[ 4, [ 2, 8 ] ]
  const h = [4n, 9n];
  const k = [1n, 2n];
  let i = 1;
  let count = 1;
  let sum = 17n; // first L is 17
  while (true) {
    if (i >= 2) {
      h[i] = BigInt(a[1][(i - 1) % 2]) * h[i - 1] + h[i - 2];
      k[i] = BigInt(a[1][(i - 1) % 2]) * k[i - 1] + k[i - 2];
    }
    if (h[i] * h[i] - 20n * k[i] * k[i] === 1n) {
      sum += 76n * k[i] + 17n * h[i];
      count++;
    }
    if (count === 12) {
      break;
    }
    i++;
  }
  return sum;
};

console.log(p138Solution());

// 17
// 305
// 5473
// 98209
// 1762289
// 31622993
// 567451585
// 10182505537
// 182717648081
// 3278735159921
// 58834515230497
// 1055742538989025
