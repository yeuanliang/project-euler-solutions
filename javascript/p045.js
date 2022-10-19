"use strict";

const helper = require("./helper");

const p045Solution = function () {
  let triangle = 0;
  for (let i = 286; ; i++) {
    triangle = (i * (i + 1)) / 2;
    if (helper.isPentagonal(triangle) && helper.isHexagonal(triangle)) {
      return triangle;
    }
  }
};

console.log(p045Solution());
