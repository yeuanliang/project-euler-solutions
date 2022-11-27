"use strict";

const helper = require('./helper')

const factorial = function (n) {
  if (n < 0) {
    return [-1];
  }
  if (n === 0 || n === 1) {
    return [1];
  }
  let product = [1];
  for (let i = 2; i <= n; i++) {
    let digits = Array.from(String(i), Number);
    product = helper.bigNumberMultiply(product, digits);
  }
  return product;
};

console.log(factorial(100).reduce((x, y) => x + y));

const factorialNormal = function (n) {
  let result = 1n;
  for (let i = 1; i <= n; i++) {
    result = BigInt(i) * result;
  }
  return result;
};

const factorialRecursive = function (n) {
  if (n < 0) {
    return -1;
  }
  if (n === 1 || n === 0) {
    return 1n;
  }
  return BigInt(n) * factorialRecursive(n - 1);
};
