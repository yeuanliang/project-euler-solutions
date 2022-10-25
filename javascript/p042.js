"use strict";

const helper = require('./helper');

const getTriangleNumbers = function (limit) {
  const triangleNumbers = [];
  let i = 1;
  let t = 0;
  while (t < limit) {
    t = (i * (i + 1)) / 2;
    triangleNumbers.push(t);
    i += 1;
  }
  return triangleNumbers;
};

const countWordValue = function (word) {
  let value = 0;
  let l = word.length;
  let index = 0;
  while (index < l) {
    if (word.charAt(index) >= "A" && word.charAt(index) <= "Z") {
      value += word.charCodeAt(index) - 64;
    }
    index += 1;
  }
  return value;
};

const p042Solution = function () {
  const words = helper.readFile("p042_words.txt").split(",");
  const wordsCount = words.length;
  let maxLength = 0;
  for (let i = 0; i < wordsCount; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  const triangleNumbers = getTriangleNumbers(26 * (maxLength - 2));
  const triangleWords = [];
  for (let i = 0; i < wordsCount; i++) {
    let wordValue = countWordValue(words[i]);
    if (triangleNumbers.includes(wordValue)) {
      triangleWords.push(words[i]);
    }
  }
  return triangleWords.length;
};

console.log(p042Solution());
