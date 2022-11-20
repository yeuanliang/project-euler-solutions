"use strict";

// const isDigitsSumPower = function (n) {
//   let a = n;
//   let s = 0;
//   while (n > 0) {
//     s += n % 10;
//     n = (n - (n % 10)) / 10;
//   }
//   if (s === 1) {
//     return false;
//   }
//   while (a > 0) {
//     if (a % s !== 0) {
//       return false;
//     } else {
//       a = a / s;
//     }
//     if (a === 1) {
//       return true;
//     }
//   }
// };

const sumDigits = function (n) {
  let s = 0;
  while (n > 0) {
    s += n % 10;
    n = (n - (n % 10)) / 10;
  }
  return s;
};

const p119Solution = function () {
  let numbers = [];
  for (let n = 7; n < 160; n++) {
    let temp = n;
    while (true) {
      temp = temp * n;
      if (sumDigits(temp) === n) {
        numbers.push(temp);
      }
      if (temp > Number.MAX_SAFE_INTEGER) {
        break;
      }
    }
  }
  return numbers.sort((a, b) => a - b)[29];
};

console.log(p119Solution());
