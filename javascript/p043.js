"use strict";

const hasDuplicate = function (s) {
  const array = Array.from(s);
  const set = new Set(array);
  return s.length !== set.size;
};

const p043Solution = function () {
  const digits = [];
  for (let i = 0; i < 10; i++) {
    digits.push(i + "");
  }
  const divisors = [13, 11, 7, 5, 3, 2, 1];
  let result = [];
  let temp = [];
  let j = 1;
  while (j * 17 < 1000) {
    let n = j * 17;
    let nString = n + "";
    if (!hasDuplicate(nString)) {
      if (n < 100) {
        result.push("0" + n);
      } else {
        result.push(nString);
      }
    }
    j += 1;
  }
  for (let div of divisors) {
    for (let nString of result) {
      for (let digit of digits) {
        if (nString.indexOf(digit) === -1) {
          let newString = digit + nString.slice(0, 2);
          if (+newString % div === 0) {
            temp.push(digit + nString);
          }
        }
      }
    }
    result = temp;
    temp = [];
  }
  let total = 0;
  for (let s of result) {
    total += +s;
  }
  return total;
};

console.log(p043Solution());
