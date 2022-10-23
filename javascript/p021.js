"use strict";

const helper = require("./helper");

// normal
const sumOfProperDivisors = function (n) {
  if (n === 1) {
    return 0;
  }
  let sum = 0;
  let step = 1;
  let factor = 2;
  let root = Math.floor(Math.sqrt(n));
  if (root * root === n) {
    sum = 1 + root;
    root = root - 1;
  } else {
    sum = 1;
  }
  if (n % 2 !== 0) {
    factor = 3;
    step = 2;
  }
  while (factor <= root) {
    if (n % factor === 0) {
      sum += factor + n / factor;
    }
    factor += step;
  }
  return sum;
};

// prime
// https://mathschallenge.net/index.php?section=faq&ref=number/sum_of_divisors

const sumOfAmicableNumbers = function (n) {
  const amicableNumbers = [];
  let sum = 0;
  for (let a = 2; a < n; a++) {
    let b = helper.sumOfDivisors(a) - a;
    if (b > a) {
      if (helper.sumOfDivisors(b) - b === a) {
        amicableNumbers.push([a, b]);
        sum += a + b;
      }
    }
  }
  console.log(amicableNumbers);
  return sum;
};

console.log(sumOfAmicableNumbers(10000));
