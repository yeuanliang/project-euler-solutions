"use strict";

const findMaxRemainder = function (a) {
  let d = a * a;
  let exp = 1;
  let b1 = a - 1;
  let r1 = b1 % d;
  let b2 = a + 1;
  let r2 = b2 % d;
  let r = (r1 + r2) % d;
  let r0 = r;
  while (true) {
    let newR = (r1 * b1 + r2 * b2) % d;
    r1 = (r1 * b1) % d;
    r2 = (r2 * b2) % d;
    if (newR > r) {
      r = newR;
    }
    if (newR === r0) {
      break;
    }
    exp++;
  }
  return r;
};

const p120Solution = function () {
  let sum = 0;
  for (let i = 3; i <= 1000; i++) {
    sum += findMaxRemainder(i);
  }
  return sum;
};

console.log(p120Solution());
