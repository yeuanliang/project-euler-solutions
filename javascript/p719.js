"use strict";

// time cost: 8min8sec

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

const isS = function (square, root) {
  const s = square + "";
  const len = s.length;
  for (let i = 0; i < 1 << (len - 1); i++) {
    let ss = s;
    let sum = 0;
    for (let j = 1; j < len; j++) {
      if (i & (1 << (j - 1))) {
        sum += +ss.slice(0, j - (len - ss.length));
        if (sum > root) {
          break;
        }
        ss = ss.slice(j - (len - ss.length));
      }
    }
    sum += +ss;
    if (sum === root) {
      return true;
    }
  }
  return false;
};

const p719Solution = function (limit) {
  let sum = 0;
  let r = Math.floor(Math.sqrt(limit));
  for (let i = 2; i <= r; i++) {
    if (isS(i * i, i)) {
      sum += i * i;
    }
  }
  return sum;
};

console.log(p719Solution(10 ** 12));
