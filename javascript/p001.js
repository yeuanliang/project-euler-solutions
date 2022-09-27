"use strict";

const target = 999;
let result = 0;
const sumDivisibleBy = function (n) {
  const p = parseInt(target / n);
  return (n * p * (p + 1)) / 2;
};
result = sumDivisibleBy(3) + sumDivisibleBy(5) - sumDivisibleBy(15);
console.log(result);
