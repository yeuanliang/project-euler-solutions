"use strict";

const helper = require("./helper");

const properFraction = function (numerator, denominator) {
  const gcd = helper.gcd(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;
  return numerator + "/" + denominator;
};

const p033Solution = function () {
  let numerator = 1;
  let denominator = 1;
  const fractions = [];
  for (let i = 1; i < 100; i++) {
    for (let j = i + 1; j < 100; j++) {
      if (i % 10 === 0 || j % 10 === 0) {
        continue;
      }
      let a = properFraction(i, j);
      let b = properFraction(i % 10, Math.floor(j / 10));
      let c = properFraction(Math.floor(i / 10), j % 10);
      if (a === b && Math.floor(i / 10) === j % 10) {
        numerator *= i;
        denominator *= j;
        fractions.push(i + "/" + j);
      } else if (a === c && i % 10 === Math.floor(j / 10)) {
        numerator *= i;
        denominator *= j;
        fractions.push(i + "/" + j);
      }
    }
  }
  return denominator / helper.gcd(numerator, denominator);
};

console.log(p033Solution());
