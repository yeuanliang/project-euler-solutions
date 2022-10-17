"use strict";

const helper = require("./helper");

// similar to Problem 9

const p039Solution = function () {
  const result = {
    max: 0,
  };
  for (let p = 12; p <= 1000; p = p + 2) {
    let solutions = helper.getPythagoreanTriplet(p);
    if (solutions.length > result.max) {
      result.max = solutions.length;
      result.solutions = solutions;
      result.p = p;
    }
  }
  return result;
};

console.log(p039Solution());
