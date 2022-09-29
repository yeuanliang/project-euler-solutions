"use strict";

const reverse = function (n) {
  let reversed = 0;
  while (n > 0) {
    reversed = 10 * reversed + (n % 10);
    n = parseInt(n / 10);
  }
  return reversed;
};

const isPalindrome = function (n) {
  return n === reverse(n);
};

// Find the largest palindrome made from the product of
// a m-digit number and a n-digit number
const largestPalindrome = function (m, n) {
  if (m > n) {
    [m, n] = [n, m];
  }
  let a = 10 ** m - 1;
  let b = 10 ** n - 1;
  let db = 0;
  let largestPalindrome = 0;
  while (a >= 10 ** (m - 1)) {
    if (a % 11 !== 0) {
      b = n % 2 == 0 ? 10 ** n - 1 : 10 ** n - 10;
      db = 11;
    } else {
      b = 10 ** n - 1;
      db = 1;
    }
    while (b >= a) {
      if (a * b <= largestPalindrome) {
        break;
      }
      if (isPalindrome(a * b)) {
        largestPalindrome = a * b;
      }
      b = b - db;
    }
    a = a - 1;
  }
  return largestPalindrome;
};

// Find all palindromes made from the product of
// a m-digit number and a n-digit number
const allPalindromes = function (m, n) {
  if (m > n) {
    [m, n] = [n, m];
  }
  let a = 10 ** m - 1;
  let b = 10 ** n - 1;
  let db = 0;
  let palindromes = [];
  let duplicates = [];
  while (a >= 10 ** (m - 1)) {
    if (a % 11 !== 0) {
      b = n % 2 == 0 ? 10 ** n - 1 : 10 ** n - 10;
      db = 11;
    } else {
      b = 10 ** n - 1;
      db = 1;
    }
    while (b >= a) {
      let temp = a * b;
      if (isPalindrome(temp)) {
        if (!palindromes.includes(temp)) {
          palindromes.push(temp);
        } else {
          duplicates.push(temp);
        }
      }
      b = b - db;
    }
    a = a - 1;
  }
  return palindromes;
};

console.log(largestPalindrome(3, 3));
console.log(
  allPalindromes(3, 3).sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  })
);
