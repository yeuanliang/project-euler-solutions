"use strict";

// https://en.wikipedia.org/wiki/Tree_of_primitive_Pythagorean_triples
// a*a-1 = (c-b)*(c+b)
// limitA = limit/(2+Math.SQRT2)

const helper = require("./helper");

// time cost: 1h 30min 21s
const p223Solution = function (limit) {
  const limitA = Math.floor(limit / (2 + Math.SQRT2));
  let count = Math.floor((limit - 1) / 2);
  for (let a = 2; a < limitA; a++) {
    let product = a * a - 1;
    let divisors = helper.genDivisors(product).sort((a, b) => a - b);
    let len = divisors.length / 2;
    for (let j = 0; j < len; j++) {
      let k = product / divisors[j];
      if ((k - divisors[j]) % 2 === 0 && (k + divisors[j]) % 2 === 0) {
        let b = (k - divisors[j]) / 2;
        if (b < a) {
          break;
        }
        let c = (k + divisors[j]) / 2;
        if (b >= a && a + b + c <= limit) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(p223Solution(25000000));
