"use strict";

const nthDigit = function (n) {
  let s = "";
  let i = 1;
  while (s.length <= n) {
    s = s + i;
    i += 1;
  }
  return s.charAt(n - 1);
};

const p040Solution = function () {
  let product = 1;
  for (let i = 0; i <= 6; i++) {
    product *= +nthDigit(10 ** i);
  }
  return product;
};

console.log(p040Solution());
