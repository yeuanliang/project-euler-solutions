"use strict";

const helper = require("./helper");

const reverseString = function (s) {
  return s.split("").reverse().join("");
};

const p036Solution = function (limit) {
  const palindromes = [];
  let sum = 0;
  for (let i = 1; i < limit; i += 2) {
    let s = i + "";
    let b = i.toString(2);
    if (s === reverseString(s) && b === reverseString(b)) {
      sum += i;
      palindromes.push(i);
    }
  }
  console.log(palindromes);
  return sum;
};

// console.log(p036Solution(10 ** 6));

// the 3-digit number xyz defines a 5-digit palindrome and a 6 digit palindrome
// every positive number less than b^n generates two palindromes less than b^(2*n)

// n < 2**32
const makePalindromeBase2 = function (n, isOddLength) {
  let res = n;
  if (isOddLength) {
    n = n >> 1;
  }
  while (n > 0) {
    res = (res << 1) + (n & 1);
    n = n >> 1;
  }
  return res;
};

const makePalindrome = function (n, base, isOddLength) {
  let res = n;
  if (isOddLength) {
    n = Math.floor(n / base);
  }
  while (n > 0) {
    res = base * res + (n % base);
    n = Math.floor(n / base);
  }
  return res;
};

const p036Solution2 = function (limit) {
  let sum = 0;
  let i = 1;
  let p = makePalindrome(i, 10, true);
  while (p < limit) {
    if (helper.isPalindrome(p, 2)) {
      sum += p;
    }
    i++;
    p = makePalindrome(i, 10, true);
  }
  i = 1;
  p = makePalindrome(i, 10, false);
  while (p < limit) {
    if (helper.isPalindrome(p, 2)) {
      sum += p;
    }
    i++;
    p = makePalindrome(i, 10, false);
  }
  return sum;
};

console.log(p036Solution2(10 ** 6));
