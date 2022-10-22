"use strict";

// side = m * m + n * n
// hight = m * m - n * n or 2 * m * n
// base = 4 * m * n or 2 * (m * m - n * n)
// perimeter = 2 * side + base = 2 * (m + n) * (m + n) or 4 * m * m
const p094Solution = function (limit) {
  let sum = 0;
  for (let m = 2; 6 * m * m <= limit - 1; m++) {
    for (let n = 1; n < m; n++) {
      if (Math.abs(3 * n * n - m * m) === 1) {
        sum += 4 * m * m;
      } else if (Math.abs(m * m + n * n - 4 * m * n) === 1) {
        sum += 2 * (m + n) * (m + n);
      }
    }
  }
  return sum;
};

console.log(p094Solution(10 ** 9));
