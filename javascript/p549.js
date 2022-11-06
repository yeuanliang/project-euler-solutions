"use strict";

const helper = require("./helper");
const limit = 10 ** 8;
const rootLimit = Math.floor(Math.sqrt(limit));
const primesSet = helper.getPrimes(rootLimit);
const mMap = new Map();

const primeFactorization = function (n) {
    const bases = [];
    const exponents = [];
    for (let i = 0; primesSet[i] * primesSet[i] <= n; ++i) {
      if (n % primesSet[i] == 0) {
        let count = 0;
        while (n % primesSet[i] == 0) {
          n /= primesSet[i];
          count += 1;
        }
        bases.push(primesSet[i]);
        exponents.push(count);
      }
    }
    if (n > 1) {
      bases.push(n);
      exponents.push(1);
    }
    return { bases, exponents };
  };

const countM = function () {
  let primes = [2, 3, 5, 7];
  for (const p of primes) {
    let e = 0;
    let m = 0;
    while (p ** e <= limit) {
      m += p;
      let t = m;
      while (t % p === 0) {
        t = t / p;
        e += 1;
        mMap.set(p + " " + e, m);
      }
    }
  }
};

countM()

const smallestFactorial = function (n) {
  if (helper.isPrime(n)) {
    return n;
  }
  const { bases, exponents } = primeFactorization(n);
  const len = bases.length;
  let m = 0;
  for (let i = len - 1; i >= 0; i--) {
    if(bases[i] * exponents[i]<m){
      continue
    }
    let temp = 0;
    if(bases[i]>10){
        temp = bases[i] * exponents[i]
    }else{
        temp = mMap.get(bases[i]+' '+exponents[i])
    }
    if (m < temp) {
      m = temp;
    }
  }
  return m;
};

const p549Solution = function () {
  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    sum += smallestFactorial(i);
  }
  return sum;
};

console.log(p549Solution())
