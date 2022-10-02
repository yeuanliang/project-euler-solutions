"use strict";

// sum of square n*(n+1)*(2*n+1)/6
// sum n*(n+1)/2
const sumSquareDiffUseFormula = function (limit) {
  return (
    (limit ** 2 * (limit + 1) ** 2) / 4 -
    (limit * (limit + 1) * (2 * limit + 1)) / 6
  );
};
const sumSquareDiff = function (limit) {
  let sum = 0;
  let sumSquare = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
    sumSquare += i ** 2;
  }
  return sum ** 2 - sumSquare;
};

console.log(sumSquareDiff(100));
console.log(sumSquareDiffUseFormula(100));
