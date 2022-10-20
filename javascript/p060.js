"use strict";

const helper = require("./helper");
const primes = helper.getPrimes(100000);

const findNext = function (primesArray) {
  const result = [];
  for (const p of primesArray) {
    for (let i = 0; i < primes.length; i++) {
      if (p.length === 2 && primes[i] > 10000) {
        break;
      }
      let isNext = true;
      let t = [].concat(p);
      if (primes[i] > p[p.length - 1]) {
        for (let j = 0; j < p.length; j++) {
          let p1 = primes[i] + "" + p[j];
          let p2 = p[j] + "" + primes[i];
          isNext = isNext && helper.isPrime(+p1) && helper.isPrime(+p2);
        }
        if (isNext) {
          t.push(primes[i]);
          result.push(t);
        }
      }
    }
  }
  return result;
};

const p060Solution = function () {
  const primePairs = [];
  let start = 1;
  for (let i = start; primes[i] < 100; i++) {
    for (let j = i + 1; primes[j] < 10000; j++) {
      let p1 = primes[i] + "" + primes[j];
      let p2 = primes[j] + "" + primes[i];
      if (helper.isPrime(p1) && helper.isPrime(p2)) {
        primePairs.push([primes[i], primes[j]]);
      }
    }
  }
  const threePrimesSet = findNext(primePairs);
  const fourPrimesSet = findNext(threePrimesSet);
  const fivePrimesSet = findNext(fourPrimesSet);
  console.log(fivePrimesSet);
  let sumMin = 0;
  for (const s of fivePrimesSet) {
    let sum = s.reduce((x, y) => x + y);
    if (sumMin === 0) {
      sumMin = sum;
    } else if (sum < sumMin) {
      sumMin = sum;
    }
  }
  return sumMin;
};

console.log(p060Solution());
