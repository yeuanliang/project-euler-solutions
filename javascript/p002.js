"use strict";

const limit = 4000000;

function sumEvenFibNumbers(limit) {
  let a = 1;
  let b = 1;
  let c = a + b;
  let sum = 0;
  while (c < limit) {
    sum += c;
    a = b + c;
    b = c + a;
    c = b + a;
  }
  return sum;
}

console.log(sumEvenFibNumbers(limit));
