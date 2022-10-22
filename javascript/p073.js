"use strict";

const helper = require("./helper");

// https://en.wikipedia.org/wiki/Farey_sequence

const p073Solution = function (limit) {
  let count = 0;
  for (let i = 5; i <= limit; i++) {
    for (let j = Math.floor(i / 3) + 1; j < i / 2; j++) {
      if (helper.gcd(i, j) === 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(p073Solution(12000));
