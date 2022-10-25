"use strict";

const fs = require("fs");
const path = require("path");
const internals = {};

exports.readFile = internals.readFile = function(filename){
  const file = fs.readFileSync(
    path.resolve(__dirname, "../assets/"+filename)
  );
  const data = file.toString().trim().split("\n");
  return data
}

exports.reverse = internals.reverse = function (n) {
  let reversed = 0;
  while (n > 0) {
    reversed = 10 * reversed + (n % 10);
    n = parseInt(n / 10);
  }
  return reversed;
};

exports.isPalindrome = internals.isPalindrome = function (n) {
  return n === internals.reverse(n);
};

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
  if (n >= 2) {
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
  // greatest common divisor
  if (b == 0) {
    return a;
  } else {
    return internals.gcd(b, a % b);
  }
};

exports.lcm = internals.lcm = function (a, b) {
  // least common multiple
  return (a * b) / internals.gcd(a, b);
};

exports.getDivisors = internals.getDivisors = function (n) {
  let number=n
  let count = 1;
  let factorization = "";
  const bases = [];
  const exponents = [];
  for (let i = 2; i*i<=n ; i=i+1) {
    if (number % i === 0) {
      let exp = 0;
      while (number % i === 0) {
        number /= i;
        exp += 1;
      }
      bases.push(i)
      exponents.push(exp)
    }
  }
  if (number > 1) {
    bases.push(number)
    exponents.push(1)
  }
  if(number===n){
    return { count:2, factorization: 1+' * '+n, bases, exponents }
  }
  for (let i = 0; i < bases.length; i++) {
    count *= exponents[i] + 1;
    if (exponents[i] > 1) {
      factorization +=
        bases[i] + "**" + exponents[i] + (i === bases.length - 1 ? "" : "*");
    } else factorization += bases[i] + (i === bases.length - 1 ? "" : "*");
  }
  return { count, factorization, bases, exponents };
};

exports.sumOfDivisors = internals.sumOfDivisors = function (n) {
  const divisorsInfo = internals.getDivisors(n);
  const primes = divisorsInfo.bases;
  const exponents = divisorsInfo.exponents;
  let sum = 1;
  for (let i = 0; i < primes.length; i++) {
    sum *= (primes[i] ** (exponents[i] + 1) - 1) / (primes[i] - 1);
  }
  return sum;
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

exports.bigNumberSum = internals.bigNumberSum = function (s, t) {
  let result = [];
  let augend = null;
  let addend = null;
  if (typeof s === "string" && typeof t === "string") {
    while (s[0] === "0") {
      s = s.slice(1);
    }
    augend = Array.from(s, Number);

    while (t[0] === "0") {
      t = t.slice(1);
    }
    addend = Array.from(t, Number);
  }else{
    augend=[].concat(s)
    addend=[].concat(t)
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

internals.handleDifference = function(array){
  const len = array.length
  const difference = [].concat(array)
  while(difference[0]===0){
    difference.shift()
    if(difference.length===0){
      return [0]
    }
  }
  if(difference.length===1){
    return difference
  }
  if(difference[0]>0){
    for(let i=len-1;i>0;i--){
      if(difference[i]<0){
        difference[i]+=10
        difference[i-1]-=1
      }
    }
  }else{
    for(let i=len-1;i>0;i--){
      if(difference[i]>0){
        difference[i]-=10
        difference[i-1]+=1
      }
    }
  }
  return difference
}

exports.bigNumberSub = internals.bigNumberSub = function (s, t) {
  let difference = [];
  let minuend = null;
  let subtrahend = null;
  if (typeof s === "string" && typeof t === "string") {
    while (s[0] === "0") {
      s = s.slice(1);
    }
    minuend = Array.from(s, Number);

    while (t[0] === "0") {
      t = t.slice(1);
    }
    subtrahend = Array.from(t, Number);
  }else{
    minuend=[].concat(s)
    subtrahend=[].concat(t)
  }

  const deltaLength = minuend.length - subtrahend.length;
  if(deltaLength<0){
    minuend = internals.prependZeros(minuend, Math.abs(deltaLength));
  }else if(deltaLength>0){
    subtrahend = internals.prependZeros(subtrahend,deltaLength)
  }
  for (let i = 0; i < minuend.length; i++) {
    difference[i] = minuend[i] - subtrahend[i];
  }
  difference = internals.handleDifference(difference);
  return difference;
};

exports.bigNumberMultiply = internals.bigNumberMultiply = function (s, t) {
  let multiplicand = null;
  let multiplier = null;
  if (typeof s === "string" && typeof t === "string") {
    while (s[0] === "0") {
      s = s.slice(1);
    }
    multiplicand = Array.from(s, Number);

    while (t[0] === "0") {
      t = t.slice(1);
    }
    multiplier = Array.from(t, Number);
  }else{
    multiplicand = [].concat(s)
    multiplier=[].concat(t)
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

exports.customPower = internals.customPower = function (base, exponent) {
  const digits = [];
  digits.push(1);
  let i = 0;
  for (let j = 1; j <= exponent; j++) {
    while (digits[i] != undefined) {
      digits[i] *= base;
      i += 1;
    }
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] >= 10) {
        if (!digits[i + 1]) {
          digits[i + 1] = Math.floor(digits[i] / 10);
        } else {
          digits[i + 1] += Math.floor(digits[i] / 10);
        }
        digits[i] = digits[i] % 10;
      }
    }
    i = 0;
  }
  return digits.reverse();
};

exports.factorial = internals.factorial = function (n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = i * result;
  }
  return result;
};

exports.isPandigital = internals.isPandigital = function (s) {
  return s.split("").sort().join("") === "123456789".slice(0, s.length);
};

exports.isPentagonal = internals.isPentagonal = function (n) {
  return (1 + Math.sqrt(1 + 24 * n)) % 6 === 0;
};

exports.isHexagonal = internals.isHexagonal = function (n) {
  return (1 + Math.sqrt(1 + 8 * n)) % 4 === 0;
};

exports.isTriangle = internals.isTriangle = function (n) {
  return (-1 + Math.sqrt(1 + 8 * n)) % 2 === 0;
};

exports.isSquare = internals.isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

exports.isHeptagonal = internals.isHeptagonal = function (n) {
  return (3 + Math.sqrt(9 + 40 * n)) % 10 === 0;
};

exports.isOctagonal = internals.isOctagonal = function (n) {
  return (2 + Math.sqrt(4 + 12 * n)) % 6 === 0;
};

exports.hasSameDigits = internals.hasSameDigits = function (a, b) {
  return (
    (a + "").split("").sort().join("") === (b + "").split("").sort().join("")
  );
};

exports.getPythagoreanTriplet = internals.getPythagoreanTriplet = function (p) {
  // gcd(m, n) = 1, m > n
  // a = m * m - n * n
  // b = 2 * m * n
  // c = m * m + n * n
  if (p % 2 === 1) {
    throw "no result";
  }
  let s = p / 2;
  let k = 0;
  const result = [];
  for (let m = 2; m * m < s; m++) {
    if (s % m === 0) {
      let sm = s / m;
      while (sm % 2 === 0) {
        sm = sm / 2;
      }
      if (m % 2 === 1) {
        k = m + 2;
      } else {
        k = m + 1;
      }
      while (k < 2 * m && k <= sm) {
        if (sm % k === 0 && internals.gcd(k, m) === 1) {
          let d = s / (k * m);
          let n = k - m;
          let a = d * (m * m - n * n);
          let b = 2 * d * m * n;
          let c = d * (m * m + n * n);
          result.push([a, b, c]);
        }
        k += 2;
      }
    }
  }
  return result;
};

internals.sqrt = function (n) {
  const integerPart = Math.floor(Math.sqrt(n));
  const numerator = "sqrt" + n + " - " + integerPart;
  const denominator = 1;
  return [integerPart, numerator, denominator];
};

internals.customFractional = function (numerator, s) {
  // integerPart , fractionalPart
  const irrational = s.split(" - ");
  const n = +irrational[0].slice(4);
  const sqrtNInteger = Math.floor(Math.sqrt(n));
  const num = +irrational[1];
  let denominator = n - num * num;
  if (numerator > 1) {
    denominator = denominator / numerator;
  }
  const integerPart = Math.floor((sqrtNInteger + num) / denominator);
  const newNumerator =
    irrational[0] + " - " + (integerPart * denominator - num);
  return [integerPart, newNumerator, denominator];
};

exports.findContinuedFraction=internals.findContinuedFraction = function (n) {
  const fractionalParts = [];
  const result = [0, []];
  const start = internals.sqrt(n);
  result[0] = start[0];
  let numerator = start[1];
  let denominator = start[2];
  fractionalParts.push(numerator + " / " + denominator);
  while (true) {
    let temp = internals.customFractional(denominator, numerator);
    result[1].push(temp[0]);
    let fractional = temp[1] + " / " + temp[2];
    if (fractionalParts.includes(fractional)) {
      break;
    }
    denominator = temp[2];
    numerator = temp[1];
  }
  return result;
};

exports.totient = internals.totient = function (n) {
  if (n === 1) {
    return 1;
  }
  let count = 1;
  const { bases: factors, exponents } = internals.getDivisors(n);
  const factorsLength = factors.length;
  for (let i = 0; i < factorsLength; i++) {
    count *= factors[i] ** (exponents[i] - 1) * (factors[i] - 1);
  }
  return count;
};

exports.countProperFractions =internals.countProperFractions = function(d){
  let count = 0
  for(let i=2;i<=d;i++){
      count += internals.totient(i)
  }
  return count
}