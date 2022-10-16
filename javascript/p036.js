"use strict";

const reverseString = function (s) {
  return s.split("").reverse().join("");
};

const p035Solution = function (limit) {
  const palindromes = [];
  for (let i = 1; i < limit; i++) {
    let s = i + "";
    let b = i.toString(2);
    if (s === reverseString(s) && b === reverseString(b)) {
      palindromes.push(i);
    }
  }
  console.log(palindromes);
  return palindromes;
};

console.log(p035Solution(1000000).reduce((x, y) => x + y));
