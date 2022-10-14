"use strict";

const helper = require("./helper");

const getRotations = function (number) {
  let s = number + "";
  let rotations = [];
  while (true) {
    s = s.slice(1) + s.charAt();
    rotations.push(+s);
    if (s === number + "") {
      break;
    }
  }
  return rotations;
};

const p035Solution = function (limit) {
  const primes = helper.getPrimes(limit);
  const primesCount = primes.length;
  const circularPrimes = [];
  for (let i = 0; i < primesCount; i++) {
    let rotations = getRotations(primes[i]);
    let isPrime = true;
    rotations.forEach((item) => {
      isPrime = isPrime && helper.isPrime(item);
    });
    if (isPrime) {
      circularPrimes.push(primes[i]);
    }
  }
  console.log(circularPrimes);
  return circularPrimes;
};

console.log(p035Solution(1000000).length);
