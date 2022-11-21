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
      let lastNineDigits = temp.slice(len - 9).join("");
      let firstNineDigits = temp.slice(0, 9).join("");
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

const p104Solution2 = function () {
  const mod = 10 ** 9;
  const logPhi = Math.log10((1 + Math.sqrt(5)) / 2);
  const logSqrt5 = Math.log10(Math.sqrt(5));
  let i = 3;
  let a = 1;
  let b = 1;
  while (true) {
    let temp = (a + b) % mod;
    a = b % mod;
    b = temp % mod;
    if (temp > 100000000 && helper.isPandigital(temp + "")) {
      let logFib = i * logPhi - logSqrt5;
      let firstD = logFib - Math.floor(logFib);
      let c = 10 ** firstD;
      if (c > 1) {
        c = c / 10;
      }
      if (helper.isPandigital((c + "").slice(2, 11))) {
        return i;
      }
    }
    i++;
  }
};

// console.log(p104Solution());
console.log(p104Solution2());
