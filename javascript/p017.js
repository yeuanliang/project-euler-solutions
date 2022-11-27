"use strict";

const letters = new Map();
letters.set(1, "one");
letters.set(2, "two");
letters.set(3, "three");
letters.set(4, "four");
letters.set(5, "five");
letters.set(6, "six");
letters.set(7, "seven");
letters.set(8, "eight");
letters.set(9, "nine");
letters.set(10, "ten");
letters.set(11, "eleven");
letters.set(12, "twelve");
letters.set(13, "thirteen");
letters.set(14, "fourteen");
letters.set(15, "fifteen");
letters.set(16, "sixteen");
letters.set(17, "seventeen");
letters.set(18, "eighteen");
letters.set(19, "nineteen");
letters.set(20, "twenty");
letters.set(30, "thirty");
letters.set(40, "forty");
letters.set(50, "fifty");
letters.set(60, "sixty");
letters.set(70, "seventy");
letters.set(80, "eighty");
letters.set(90, "ninety");
letters.set(100, "hundred");
letters.set(1000, "thousand");
letters.set("and", "and");

let countLetters = function (n) {
  if (n < 1 || n >= 1000000) {
    return -1;
  }
  if (n <= 20) {
    return letters.get(n).length;
  } else if (n > 20 && n < 100) {
    if (n % 10 === 0) {
      return letters.get(n).length;
    } else {
      return countLetters(n % 10) + countLetters(n - (n % 10));
    }
  } else if (n >= 100 && n < 1000) {
    if (n % 100 === 0) {
      return countLetters(n / 100) + letters.get(100).length;
    } else {
      return (
        countLetters(n - (n % 100)) +
        letters.get("and").length +
        countLetters(n % 100)
      );
    }
  } else if (n >= 1000 && n < 1000000) {
    if (n % 1000 === 0) {
      return countLetters(n / 1000) + letters.get(1000).length;
    } else {
      return countLetters(n - (n % 1000)) + countLetters(n % 1000);
    }
  }
};

const countLetterFrom1ToN = function (n) {
  let i = 1;
  let result = 0;
  while (i <= n) {
    if (countLetters(i) !== -1) {
      result += countLetters(i);
    } else {
      throw `can not count the letters of ${i} `;
    }
    i += 1;
  }
  return result;
};

console.log(countLetterFrom1ToN(1000));
