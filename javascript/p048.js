"use strict";

const helper = require("./helper.js");

// const p048Solution = function (limit) {
//   let result = [];
//   for (let i = limit; i > 0; i--) {
//     result = helper.bigNumberSum(helper.customPower(i, i), result);
//   }
//   return result.slice(-10);
// };

// console.log(p048Solution(1000).join(''));

// n^n last ten digits
const lastTenDigits = function (n) {
  if(n===0||n===1){
    return n
  }
  let product = n;
  for (let i = 2; i <= n; i++) {
    product = (n * product) % 10 ** 10;
  }
  return product;
};

const p048Solution2 = function (limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += lastTenDigits(i);
    sum = sum % 10 ** 10;
  }
  return sum;
};

console.log(p048Solution2(1000));
