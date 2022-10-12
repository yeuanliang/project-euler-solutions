"use strict";

const helper = require("./helper");

const bigIntPower = function (base, exponent) {
  let result = 1n;
  for (let i = 1n; i <= exponent; i++) {
    result *= base;
  }
  return result;
};

const p029Solution = function () {
  const powers = new Set();
  for (let a = 2n; a <= 100n; a++) {
    for (let b = 2n; b <= 100n; b++) {
      powers.add(bigIntPower(a, b));
    }
  }
  return powers.size;
};
// console.log(p029Solution())
const p029SolutionLog = function () {
  const product = new Set();
  for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++) {
      product.add(a * Math.log2(b));
    }
  }
  return product.size;
};
// console.log(p029SolutionLog())

const findPowers = function (start, end) {
  const powerNumbers = new Set();
  const powerNumbersStart = new Set();
  const hasSameBases = [];
  for (let base = 2; base * base < end + 1; base++) {
    if (powerNumbers.has(base)) {
      continue;
    }
    let temp = base;
    let exponentMin = 1;
    let exponentMax = 1;
    while (temp < end + 1) {
      if (temp < start) {
        if (exponentMin > 1) {
          powerNumbersStart.add(temp);
        }
        exponentMin += 1;
      } else {
        if (exponentMax > 1) {
          powerNumbers.add(temp);
        }
      }
      temp *= base;
      exponentMax += 1;
    }
    if (base < start) {
      if (exponentMax - 1 - exponentMin > 0 && !powerNumbersStart.has(base)) {
        hasSameBases.push([base, exponentMin, exponentMax - 1]);
      }
    } else {
      if (exponentMax - 1 - exponentMin > 0 && !powerNumbers.has(base)) {
        hasSameBases.push([base, exponentMin, exponentMax - 1]);
      }
    }
  }
  return hasSameBases;
};

const countElements = function (combinations) {
  let n = 0;
  for (let i = 2; i * (i - 1) <= 2 * combinations; i++) {
    if (i * (i - 1) === 2 * combinations) {
      n = i;
      break;
    }
  }
  return n;
};

const countDuplicateElements = function (array) {
  let elements = new Map();
  for (let i = 0; i < array.length; i++) {
    if (elements.has(array[i])) {
      let old = elements.get(array[i]);
      elements.set(array[i], old + 1);
    } else {
      elements.set(array[i], 1);
    }
  }
  let realDuplicate = 0;
  elements.forEach((value) => {
    if (value > 1) {
      realDuplicate += countElements(value) - 1;
    } else {
      realDuplicate += 1;
    }
  });
  return realDuplicate;
};

const uniquePowers = function (baseStart, baseEnd, exponentStart, exponentEnd) {
  let distinctPowersCount = 0;
  let duplicatePowersCount = 0;
  const basesLength = baseEnd - baseStart + 1;
  const exponentsLength = exponentEnd - exponentStart + 1;
  const hasSameBases = findPowers(baseStart, baseEnd);

  // count duplicate powers
  let numbersCount = 0;
  for (let i = 0; i < hasSameBases.length; i++) {
    let duplicateExponents = [];
    let numbers = hasSameBases[i][2] - hasSameBases[i][1] + 1;
    for (let j = hasSameBases[i][1]; j <= hasSameBases[i][2]; j++) {
      for (let k = j + 1; k <= hasSameBases[i][2]; k++) {
        for (let e = exponentStart; e <= exponentEnd; e++) {
          if ((e * j) % k === 0 && (e * j) / k >= exponentStart) {
            duplicateExponents.push(e * j);
          }
        }
      }
    }
    let realDuplicate = countDuplicateElements(duplicateExponents);
    distinctPowersCount += numbers * exponentsLength - realDuplicate;
    duplicatePowersCount += realDuplicate;
    numbersCount += numbers;
  }
  const numbersAPower = basesLength - numbersCount;
  distinctPowersCount += numbersAPower * exponentsLength;
  return distinctPowersCount;
};
console.log(uniquePowers(2, 100, 2, 100));
