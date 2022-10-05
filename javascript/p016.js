"use strict";

// use BigInt
const result = Array.from(BigInt(2**1000).toString()).reduce((x,y)=>+x+(+y));
console.log(result)

// don't use BigInt

const customerPower = function (base, exponent) {
  const digits = [];
  digits.push(1);
  let i = 0;
  for (let j = 1; j <= exponent; j++) {
    while (digits[i] != undefined) {
      digits[i] *= base;
      i += 1;
    }
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] >= 10) {
        if (!digits[i + 1]) {
          digits[i + 1] = Math.floor(digits[i] / 10);
        } else {
          digits[i + 1] += Math.floor(digits[i] / 10);
        }
        digits[i] = digits[i] % 10;
      }
    }
    i = 0;
  }
  return digits;
};

console.log(customerPower(2, 1000).reduce((x, y) => x + y));
