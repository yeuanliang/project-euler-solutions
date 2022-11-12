"use strict";

const p686Solution = function () {
  let i = 1;
  let k = 0;
  const log2 = Math.log10(2);
  while (true) {
    let t = i * log2;
    let d = t - Math.floor(t);
    let n = 10 ** d;
    if (n >= 1.23 && n < 1.24) {
      k++;
    }
    if (k === 678910) {
      return i;
    }
    i++;
  }
};

console.log(p686Solution());
