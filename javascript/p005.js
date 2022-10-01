"use strict";

const helper = require("./helper");

const smallestMultiple = function (n) {
  if(n>40){
    throw 'Result is bigger than Number.MAX_SAFE_INTEGER'
  }
  const primes = helper.getPrimes(n);
  console.log(primes)
  const exponents = [];
  for (let i = 0; i < primes.length; i++) {
    let temp = 1;
    let exponent = 0;
    while (temp < n) {
      temp *= primes[i];
      exponent += 1;
    }
    exponents.push(exponent - 1);
  }
  let multiple = 1;
  for (let i = 0; i < primes.length; i++) {
    multiple *= primes[i] ** exponents[i];
  }

  return multiple;
};

console.log(smallestMultiple(20));
