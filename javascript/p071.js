"use strict";

const helper = require("./helper");

const p071Solution = function (limit, a, b) {
  let bestNumerator = 0;
  let bestDenominator = 1;
  let currentDenominator = limit;
  let minDenominator = 1;
  while (currentDenominator > minDenominator) {
    let currentNumerator = Math.floor((a * currentDenominator - 1) / b);
    if (
      bestNumerator * currentDenominator <
      currentNumerator * bestDenominator
    ) {
      bestNumerator = currentNumerator;
      bestDenominator = currentDenominator;
      let delta = a * currentDenominator - b * currentNumerator;
      minDenominator = Math.floor(currentDenominator / delta) + 1;
    }
    currentDenominator -= 1;
  }
  return { bestNumerator, bestDenominator };
};

console.log(p071Solution(1000000, 3, 7));
