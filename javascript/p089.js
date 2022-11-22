"use strict";

const helper = require("./helper");

const countSavedCharacters = function (romanNumeral) {
  // Numerals must be arranged in descending order of size.
  // M, C, and X cannot be equalled or exceeded by smaller denominations.
  // D, L, and V can each only appear once.
  // Only one I, X, and C can be used as the leading numeral in part of a subtractive pair.
  // I can only be placed before V and X.
  // X can only be placed before L and C.
  // C can only be placed before D and M.
  const a = ["VIIII", "IIII"];
  const b = ["LXXXX", "XXXX"];
  const c = ["DCCCC", "CCCC"];
  let count = 0;
  if (romanNumeral.includes(a[1])) {
    if (romanNumeral.includes(a[0])) {
      count += 3;
    } else {
      count += 2;
    }
  }
  if (romanNumeral.includes(b[1])) {
    if (romanNumeral.includes(b[0])) {
      count += 3;
    } else {
      count += 2;
    }
  }
  if (romanNumeral.includes(c[1])) {
    if (romanNumeral.includes(c[0])) {
      count += 3;
    } else {
      count += 2;
    }
  }
  return count;
};

const p089Solution = function () {
  const data = helper.readFile("p089_roman.txt").split("\n");
  let count = 0;
  for (const n of data) {
    count += countSavedCharacters(n);
  }
  return count;
};

console.log(p089Solution());
