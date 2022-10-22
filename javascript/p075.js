"use strict";

const helper = require("./helper");

const p075Solution = function (limit) {
  let count = 0;
  for (let i = 12; i <= limit; i = i + 2) {
    if (helper.getPythagoreanTriplet(i).length === 1) {
      count++;
    }
  }
  return count;
};

console.log(p075Solution(1500000));
