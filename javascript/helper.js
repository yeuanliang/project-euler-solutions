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
    if (m === 1) {
      factorization = factorization.substring(0, factorization.length - 1);
      break;
    }
    exponent = 1;
  }
  return { count, factorization };
};

exports.isLeapYear = internals.isLeapYear = function (year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

internals.handleCarry = function (array) {
  let i = array.length - 1;
  while (i >= 0) {
    if (array[i] > 9) {
      let temp = array[i];
      array[i] = temp % 10;
      if (i > 0) {
        array[i - 1] += Math.floor(temp / 10);
      } else {
        array = [Math.floor(temp / 10)].concat(array);
      }
    }
    i = i - 1;
  }
  return array;
};

internals.prependZeros = function (array, n) {
  for (let i = 0; i < n; i++) {
    array.unshift(0);
  }
  return array;
};

exports.bigNumberSum=internals.bigNumberSum = function (s, t) {
  let augend = s;
  let addend = t;
  let result = [];
  if (typeof s === "string" && typeof t === "string") {
    while (s[0] === "0") {
      s = s.slice(1);
    }
    augend = Array.from(s, Number);

    while (t[0] === "0") {
      t = t.slice(1);
    }
    addend = Array.from(t, Number);
  }
  if (augend.length < addend.length) {
    [augend, addend] = [addend, augend];
  }
  const deltaLength = augend.length - addend.length;
  if (deltaLength > 0) {
    addend = internals.prependZeros(addend, deltaLength);
  }
  for (let i = 0; i < augend.length; i++) {
    result[i] = augend[i] + addend[i];
  }
  result = internals.handleCarry(result);
  return result;
};

exports.bigNumberMultiply=internals.bigNumberMultiply = function (s, t) {
  let multiplicand = s;
  let multiplier = t;
  if (typeof s === "string" && typeof t === "string") {
    while (s[0] === "0") {
      s = s.slice(1);
    }
    multiplicand = Array.from(s, Number);

    while (t[0] === "0") {
      t = t.slice(1);
    }
    multiplier = Array.from(t, Number);
  }
  let product = Array.from(
    { length: multiplier.length + multiplicand.length - 1 },
    () => 0
  );
  for (let i = 0; i < multiplier.length; i++) {
    for (let j = 0; j < multiplicand.length; j++) {
      product[i + j] += multiplicand[j] * multiplier[i];
    }
  }
  product = internals.handleCarry(product);
  return product;
};
