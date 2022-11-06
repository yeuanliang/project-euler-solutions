"use strict";

const helper = require("./helper");

const anagramPairs = function (arr) {
  const pairs = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (helper.hasSameLetters(arr[i], arr[j])) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
};

const duplicateLetters = function (s) {
  const result = {};
  for (let i = 0; i < s.length; i++) {
    if (result[s[i]]) {
      continue;
    }
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === s[i]) {
        if (result[s[j]]) {
          result[s[j]].push(j);
        } else {
          result[s[i]] = [i, j];
        }
      }
    }
  }
  return result;
};

const p098Solution = function () {
  const words = helper
    .readFile("p098_words.txt")
    .split(",")
    .map((item) => item.replaceAll('"', ""));
  const pairs = anagramPairs(words);
  const anagramNumbers = [];
  let max = 0;
  for (let i = 1; i < Math.floor(Math.sqrt(987654321)) + 1; i++) {
    anagramNumbers.push(i * i);
  }
  for (const pair of pairs) {
    for (let i = 0; i < anagramNumbers.length; i++) {
      let s = anagramNumbers[i] + "";
      let t = "";
      if (s.length > pair[0].length) {
        break;
      }
      if (new Set(s.split("")).size !== new Set(pair[0].split("")).size) {
        continue;
      }
      if (new Set(s.split("")).size !== s.length) {
        let letters = duplicateLetters(pair[0]);
        let matched = true;
        for (const letter in letters) {
          let indexes = letters[letter];
          for (let i = 1; i < indexes.length; i++) {
            if (s[indexes[0]] !== s[indexes[i]]) {
              matched = false;
            }
          }
        }
        if (!matched) {
          continue;
        }
      }
      for (let j = 0; j < s.length; j++) {
        t += s[pair[0].indexOf(pair[1][j])];
      }
      if (t[0] !== "0" && anagramNumbers.includes(+t)) {
        if (Math.max(+s, +t) > max) {
          max = Math.max(+s, +t);
        }
      }
    }
  }
  return max;
};

console.log(p098Solution());
