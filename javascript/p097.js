"use strict";

const helper = require("./helper");

// the last 10 digits of 2^N have a period of 7812500 (4*5^9)

const p097Solution = function () {
  const exp = 7830457;
  const a = 4 * 5 ** 9;
  const b = helper.customPower(2, exp % a);
  const c = helper.bigNumberMultiply(b, [2, 8, 4, 3, 3]);
  const d = helper.bigNumberSum(c, [1]);
  const len = d.length;
  return d.slice(len - 10).join("");
};

const p097Solution2 = function () {
  const exp = 7830457;
  let res = 1;
  for (let i = 1; i <= exp; i++) {
    res = (res * 2) % 10 ** 10;
  }
  return ((res * 28433) % 10 ** 10) + 1;
};

const p097Solution3 = function () {
  return (28433n * 2n ** 7830457n + 1n) % 10n ** 10n;
};

// console.log(p097Solution())
console.log(p097Solution2());
// console.log(p097Solution3())
