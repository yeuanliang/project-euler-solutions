"use strict";

const helper = require("./helper");
// gcd(m, n) = 1, m > n
// a = m * m - n * n
// b = 2 * m * n
// c = m * m + n * n
const getPythagoreanTriplet = function (sum) {
  if (sum % 2 === 1) {
    throw "no result";
  }
  let s = sum / 2;
  let k = 0;
  const result = [];
  for (let m = 2; m * m < s; m++) {
    if (s % m === 0) {
      let sm = s / m;
      while (sm % 2 === 0) {
        sm = sm / 2;
      }
      if (m % 2 === 1) {
        k = m + 2;
      } else {
        k = m + 1;
      }
      while (k < 2 * m && k <= sm) {
        if (sm % k === 0 && helper.gcd(k, m) === 1) {
          let d = s / (k * m);
          let n = k - m;
          let a = d * (m * m - n * n);
          let b = 2 * d * m * n;
          let c = d * (m * m + n * n);
          result.push([a, b, c]);
        }
        k += 2;
      }
    }
  }
  return result;
};

console.log(getPythagoreanTriplet(1000)[0].reduce((x, y) => x * y));
