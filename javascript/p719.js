"use strict";

// time cost: 24min43sec

const findCombinations = function (s, combinations, substring = []) {
  if (!s) {
    combinations.push([].concat(substring));
    return;
  }
  for (let i = 0; i < s.length; i++) {
    let n = +s.slice(0, i + 1);
    substring.push(n);
    findCombinations(s.slice(i + 1), combinations, substring);
    substring.pop();
  }
};
const findAllCombinations = function (s) {
  if (!s) {
    return [];
  }
  const combinations = [];
  findCombinations(s, combinations);
  return combinations;
};

const isSNumber = function (square, root) {
  const combinations = findAllCombinations(square + "");
  const filter = function (arr) {
    for (const item of arr) {
      if (item > root) {
        return false;
      }
    }
    return true;
  };
  const numberArrays = combinations.filter((item) => filter(item));
  for (const numberArray of numberArrays) {
    if (numberArray.reduce((x, y) => x + y) === root) {
      return true;
    }
  }
  return false;
};

const p719Solution = function (limit) {
  let sum = 0;
  let r = Math.floor(Math.sqrt(limit));
  for (let i = 2; i <= r; i++) {
    if (isSNumber(i * i, i)) {
      sum += i * i;
    }
  }
  return sum;
};

// console.log(p719Solution(10**12))
