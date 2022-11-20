"use strict";

const helper = require("./helper");

const p124Solution = function (limit) {
  const radicals = [1, 2, 3];
  for (let i = 4; i <= limit; i++) {
    let { bases } = helper.primeFactorization(i);
    if (bases.length === 1) {
      radicals.push(bases[0]);
    } else {
      let product = 1;
      for (const b of bases) {
        product *= b;
      }
      radicals.push(product);
    }
  }
  let orderedRad = [].concat(radicals).sort((a, b) => a - b);
  let r = orderedRad[9999];
  let preRadicalIndex = 9999;
  while (true) {
    preRadicalIndex--;
    if (orderedRad[preRadicalIndex] !== r) {
      break;
    }
  }
  let idx = radicals.indexOf(r);
  let count = 1;
  for (let i = idx + 1; i < limit; i++) {
    if (radicals[i] === r) {
      count++;
    }
    if (count === 9999 - preRadicalIndex) {
      return i + 1;
    }
  }
};

console.log(p124Solution(100000));
