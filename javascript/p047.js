"use strict";

const helper = require("./helper");

const p047Solution = function () {
  for (let i = 647; ; i++) {
    if (helper.getDivisors(i).bases.length === 4) {
      if (helper.getDivisors(i + 1).bases.length === 4) {
        if (helper.getDivisors(i + 2).bases.length === 4) {
          if (helper.getDivisors(i + 3).bases.length === 4) {
            return i;
          }
        }
      }
    }
  }
};

console.log(p047Solution());
