"use strict";

const helper = require("./helper");

const findPrimes = function (n, d) {
  const s = String(((10 ** n - 1) / 9) * d);
  const tails = [1, 3, 7, 9];
  let primes = [];
  if (d === 0) {
    for (let i = 1; i <= 9; i++)
      for (let j = 0; j < 4; j++) {
        if ((i + tails[j]) % 3 === 0) {
          continue;
        }
        let num = i * 10 ** (n - 1) + tails[j];
        if (helper.isPrime(num)) {
          primes.push(num);
        }
      }
  } else if (d % 2 === 0 || d === 5) {
    let num = Number(s) - d + 1;
    let num2 = Number(s) - d + 7;
    if (helper.isPrime(num)) {
      primes.push(num);
    }
    if (helper.isPrime(num2)) {
      primes.push(num2);
    }
    if (primes.length === 0) {
      let a = 1;
      while (a < n) {
        let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let digit of digits) {
          let h = Number(s.slice(0, a - 1));
          let t = Number(s.slice(a));
          if (digit !== d) {
            let num = h * 10 ** (n - a + 1) + 10 ** (n - a) * digit + t;
            for (let tail of tails) {
              let temp = num - d + tail;
              if (temp > 10 ** (n - 1) && helper.isPrime(temp)) {
                primes.push(temp);
              }
            }
          }
        }
        a++;
      }
    }
  } else {
    let a = 1;
    while (a <= n) {
      let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let digit of digits) {
        let h = Number(s.slice(0, a - 1));
        let t = Number(s.slice(a));
        if (digit > 0 && digit % 3 === 0) {
          continue;
        }
        if (digit !== d) {
          let num = h * 10 ** (n - a + 1) + 10 ** (n - a) * digit + t;
          if (num > 10 ** (n - 1) && helper.isPrime(num)) {
            primes.push(num);
          }
        }
      }
      a++;
    }
  }
  return primes;
};

const p111Solution = function () {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += findPrimes(10, i).reduce((x, y) => x + y);
  }
  return sum;
};
console.log(p111Solution());
