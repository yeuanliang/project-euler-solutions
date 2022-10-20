"use strict";

const helper = require("./helper");

const generateReplacements = function (string) {
  const len = string.length;
  const digits = string.slice(0, len - 1).split("");
  const replacements = [];
  for (let i = 1; i < 2 ** (len - 1); i++) {
    let s = i.toString(2);
    while (s.length < len - 1) {
      s = "0" + s;
    }
    let r = "";
    for (let j = 0; j < digits.length; j++) {
      if (s.charAt(j) === "1") {
        r += "*";
      } else {
        r += digits[j];
      }
    }
    r += string.charAt(len - 1);
    replacements.push(r);
  }

  return replacements;
};
const primesReplacements = function (limit) {
  const primes = helper.getPrimes(limit);
  const replacements = new Map();
  for (let i = 0; i < primes.length; i++) {
    let p = primes[i];
    let s = primes[i] + "";
    let r = generateReplacements(s);
    for (let j = 0; j < r.length; j++) {
      let digits = [];
      for (let k = 0; k < r[j].length; k++) {
        if (r[j].charAt(k) === "*") {
          digits.push(s.charAt(k));
        }
      }
      let uniqueDigits = new Set(digits);
      if (uniqueDigits.size === 1) {
        if (replacements.has(r[j])) {
          replacements.get(r[j]).push(p);
        } else {
          replacements.set(r[j], [p]);
        }
      }
    }
  }
  return replacements;
};

const p051Solution = function (limit) {
  const replacements = primesReplacements(limit);
  let result = [];
  for (const [key, value] of replacements) {
    if (value.length === 8) {
      result.push({
        mask: key,
        family: value,
      });
    }
  }
  return result;
};

console.log(p051Solution(1000000));
