"use strict";

const helper = require("./helper");

const p064Solution = function () {
  const notations = [];
  for (let i = 0; i <= 10000; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      notations.push([Math.sqrt(i)]);
    } else {
      notations.push(helper.findContinuedFraction(i));
    }
  }
  let count = 0;
  for (let i = 1; i <= 10000; i++) {
    if (notations[i][1] && notations[i][1].length % 2 === 1) {
      count++;
    }
  }
  return count;
};

console.log(p064Solution());
