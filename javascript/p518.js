"use strict";

const helper = require("./helper");

// time cost: 7min26s
const p518Solution = function (limit) {
  let sum = 0;
  let root = Math.floor(Math.sqrt(limit));
  for (let i = 1; i < root; i++) {
    for (let j = i + 1; j <= root; j++) {
      if (helper.gcd(i, j) === 1) {
        let k = 2;
        while (k * j * j <= limit) {
          let a = k * i * i - 1;
          let b = k * i * j - 1;
          let c = k * j * j - 1;
          if (helper.isPrime(a) && helper.isPrime(b) && helper.isPrime(c)) {
            sum += a + b + c;
          }
          k += 1;
          if (Number.isInteger(Math.sqrt(k))) {
            k += 1;
          }
        }
      }
    }
  }
  return sum
};

console.log(p518Solution(10 ** 8));
