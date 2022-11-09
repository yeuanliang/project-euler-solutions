"use strict";

// time cost: 8min8sec
// time cost: 1min56sec
// time cost: 1.1sec
// https://oeis.org/A038206

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
  for (let i = 9; i <= 10; i++) {
    for (let j = i; j <= r; j += 9) {
      if (isS(j * j, j)) {
        sum += j * j;
      }
    }
  }
  return sum;
};

const check = function (s, n) {
  if (s === n) {
    return true;
  } else if (s < n) {
    return false;
  } else {
    let b = 10;
    while (b < s) {
      if (check(Math.floor(s / b), n - (s % b))) {
        return true;
      }
      b *= 10;
    }
    return false;
  }
};

const p719Solution2 = function (limit) {
  let sum = 0;
  const t = Date.now();
  let r = Math.floor(Math.sqrt(limit));
  for (let i = 9; i <= 10; i++) {
    for (let j = i; j <= r; j += 9) {
      if (check(j * j, j)) {
        sum += j * j;
      }
    }
  }
  console.log(Date.now() - t);
  return sum;
};

// console.log(p719Solution(10 ** 12));
console.log(p719Solution2(10 ** 12));
