"use strict";

const helper = require("./helper");

const calcP = function (count, total) {
  let a = [].concat(count);
  let b = [].concat(total);
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      let idx = b.indexOf(a[i]);
      a[i] = 1;
      b[idx] = 1;
    }
  }
  let e = 1,
    f = 1;
  for (let i = 0; i < a.length; i++) {
    e *= a[i];
  }
  for (let i = 0; i < b.length; i++) {
    f *= b[i];
  }
  return e / f;
};

const p493Solution = function () {
  const total = helper.calculateCombinatorial(70, 20);
  const count = helper.calculateCombinatorial(60, 20);
  const p = calcP(count, total);
  return ((1 - p) * 7).toFixed(9);
};

console.log(p493Solution());
