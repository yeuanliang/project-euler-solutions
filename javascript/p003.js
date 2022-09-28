"use strict";

const n = 600851475143;
const largestPrimeFactor = function (m) {
  while (m % 2 === 0) {
    m = m / 2;
  }
  let i = 3;
  while (m > i) {
    while (m % i === 0) {
      m = m / i;
    }
    i = i + 2;
  }
  return m;
};

console.log(largestPrimeFactor(n));
