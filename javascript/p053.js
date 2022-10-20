"use strict";

const helper = require("./helper");

const calculateCombinations = function (n, r) {
  if (r > n / 2) {
    r = n - r;
  }
  if (r === 0 || r === n) {
    return [1];
  }
  let numerators = [];
  let denominators = [];
  for (let i = 0; i < r; i++) {
    let gcd = helper.gcd(n - i, r - i);
    numerators.push((n - i) / gcd);
    denominators.push((r - i) / gcd);
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < r; j++) {
      if (numerators[i] === 1) {
        continue;
      }
      let gcd = helper.gcd(numerators[i], denominators[j]);
      if (gcd > 1) {
        numerators[i] /= gcd;
        denominators[j] /= gcd;
      }
    }
  }
  return numerators;
};

const p053Solution = function (n) {
  let count = 0;
  for (let i = 10; i <= n; i++) {
    for (let j = 2; j < i - 1; j++) {
      let c = calculateCombinations(i, j);
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
