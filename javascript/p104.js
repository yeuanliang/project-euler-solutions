"use strict";

const helper = require("./helper");

const p104Solution = function () {
  let i = 3;
  let a = [1];
  let b = [1];
  while (true) {
    let temp = helper.bigNumberSum(b, a);
    let len = temp.length;
    a = b;
    b = temp;
    if (len > 2749) {
      let lastNineDigits = temp.slice(len - 9).join('');
      let firstNineDigits = temp.slice(0, 9).join('');
      if (
        helper.isPandigital(lastNineDigits) &&
        helper.isPandigital(firstNineDigits)
      ) {
        console.log(temp.length);
        return i;
      }
    }
    i++;
  }
};

console.log(p104Solution());
