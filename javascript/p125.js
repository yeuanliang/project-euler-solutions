"use strict";

const helper = require("./helper");
const p125Solution = function (limit) {
  const palindromicNumbers = new Set();
  const root = Math.floor(Math.sqrt(limit));
  for (let i = 1; i < root; i++) {
    let s = i * i;
    for (let j = i + 1; j <= root; j++) {
      let t = j * j;
      if (t + s > limit) {
        break;
      }
      s += t;
      if (helper.isPalindrome(s)) {
        palindromicNumbers.add(s);
      }
    }
    s = 0;
  }
  let sum = 0;
  sum = new Array(...palindromicNumbers).reduce((x, y) => x + y);
  return sum;
};

console.log(p125Solution(10 ** 8));
