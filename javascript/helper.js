"use strict";

const internals = {};

exports.getPrimes = internals.getPrimes = function (n) {
  // Sieve of Sundaram
  let nNew = n / 2;
  let marked = [];
  let primes = [];
  for (let i = 0; i < nNew + 1; i++) {
    marked[i] = false;
  }
  for (let i = 1; i <= nNew; i++) {
    for (let j = i; i + j + 2 * i * j <= nNew; j++) {
      marked[i + j + 2 * i * j] = true;
    }
  }
  if (n > 2) {
    primes.push(2);
  }
  for (let i = 1; i < nNew; i++) {
    if (!marked[i]) {
      primes.push(2 * i + 1);
    }
  }
  return primes;
};

exports.isPrime = internals.isPrime = function (num) {
  if (num <= 1) {
    return false;
  } else if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

exports.gcd = internals.gcd = function (a, b) {
  if (b == 0) return a;
  else return internals.gcd(b, a % b);
};

exports.getDivisors = internals.getDivisors = function (n) {
  const primes = internals.getPrimes(10000);
  const p = primes.length;
  let count = 1;
  let exponent = 1;
  let factorization = "";
  let m = n;
  for (let i = 0; i < p; i++) {
    if (primes[i] * primes[i] > m) {
      count *= 2;
      factorization += primes[i];
      break;
    }
    while (m % primes[i] === 0) {
      exponent += 1;
      m /= primes[i];
    }
    if (exponent > 1) {
      count *= exponent;
      if (exponent > 2) {
        factorization += primes[i] + "^" + (exponent - 1) + "*";
      } else {
        factorization += primes[i] + "*";
      }
    }
    if(m===1){
      factorization=factorization.substring(0,factorization.length-1)
      break
    }
    exponent = 1;
  }
  return { count, factorization };
};
