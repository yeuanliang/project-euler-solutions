"use strict";

const is2025Number = function (n, m) {
  let s = m.toString();
  let len = s.length;
  if (len % 2 === 0) {
    let a = s.substring(0, len / 2);
    let b = s.substring(len / 2);
    if (a + +b !== s || b === "0") {
      return false;
    }
    if (BigInt(+a + +b) === n) {
      return true;
    } else {
      return false;
    }
  } else {
    let a = s.substring(0, (len + 1) / 2);
    let b = s.substring((len + 1) / 2);
    let c = s.substring(0, (len - 1) / 2);
    let d = s.substring((len - 1) / 2);
    if (b === "0" || d === "0") {
      return false;
    }
    if (a + +b === s && BigInt(+a + +b) === n) {
      return true;
    } else if (c + +d === s && BigInt(+c + +d) === n) {
      return true;
    } else {
      return false;
    }
  }
};

const p932Solution = function (limit) {
  let sum = 0n;
  for (let i = 2n; i <= limit; i++) {
    let square = i * i;
    if (is2025Number(i, square)) {
      sum += square;
    }
  }
  return sum;
};

console.log(p932Solution(10n ** 8n));
