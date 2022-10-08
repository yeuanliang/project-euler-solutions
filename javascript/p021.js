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
const sumOfDivisors = function (n) {
  const divisorsInfo = helper.getDivisors(n);
  const primes = divisorsInfo.bases;
  const exponents = divisorsInfo.exponents;
  let sum = 1;
  for (let i = 0; i < primes.length; i++) {
    sum *= (primes[i] ** (exponents[i] + 1) - 1) / (primes[i] - 1);
  }
  return sum - n;
};

const sumOfAmicableNumbers = function (n) {
  const amicableNumbers = [];
  let sum = 0;
  for (let a = 2; a < n; a++) {
    let b = sumOfDivisors(a);
    if (b > a) {
      if (sumOfDivisors(b) === a) {
        amicableNumbers.push([a, b]);
        sum += a + b;
      }
    }
  }
  console.log(amicableNumbers)
  return sum;
};

console.log(sumOfAmicableNumbers(10000));