"use strict";

const helper = require("./helper");

const p057Solution = function () {
  // a[n+1]=(2+a[n])/(1+a[n])
  // a[n]=a/b
  // a[n+1]=(2*a+b)/(a+b)
  let numerator = [3];
  let denominator = [2];
  let i = 2;
  let count = 0;
  while (i <= 1000) {
    let b = numerator;
    let a = denominator;
    numerator = helper.bigNumberSum(helper.bigNumberMultiply(a, [2]), b);
    denominator = helper.bigNumberSum(a, b);
    if (numerator.length > denominator.length) {
      count++;
    }
    i++;
  }
  return count;
};

console.log(p057Solution());
