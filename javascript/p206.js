"use strict";
const check = function (n) {
  const s = n + "";
  if (
    s[0] === "1" &&
    s[2] === "2" &&
    s[4] === "3" &&
    s[6] === "4" &&
    s[8] === "5" &&
    s[10] === "6" &&
    s[12] === "7" &&
    s[14] === "8" &&
    s[16] === "9"
  ) {
    return true;
  } else {
    return false;
  }
};
const p206Solution = function () {
  const start = Math.floor(10*Math.sqrt(102030405060708));
  const end = Math.floor(Math.sqrt(2)*10**8);
  for (let i = BigInt(start+1); i < BigInt(end); i++) {
    let s = i * i;
    if (check(s)) {
      return i * 10n;
    }
  }
};

console.log(p206Solution());