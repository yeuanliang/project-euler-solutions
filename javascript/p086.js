"use strict";

const helper = require("./helper");

const countSolutions = function (n) {
  const solutions = new Set();
  for (let c = 1; c <= n; c++) {
    for (let ab = c + 1; ab <= 2 * n; ab++) {
      for (let a = 1; a <= c; a++) {
        let length = Math.sqrt(c * c + ab * ab);
        let length2 = Math.sqrt(a * a + (ab - a + c) * (ab - a + c));
        let length3 = Math.sqrt((a + c) * (a + c) + (ab - a) * (ab - a));
        if (
          Number.isInteger(Math.min(length, length2, length3)) &&
          ab - a <= n
        ) {
          let s = [c, a, ab - a].sort((x, y) => x - y).join(" ");
          solutions.add(s);
        }
      }
    }
  }
  return solutions.size;
};

const count = function (m) {
  let cuboids = new Set();
  for (let i = 1; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      if (helper.gcd(i, j) !== 1) {
        continue;
      }
      let s = Math.min(j * j - i * i, 2 * i * j);
      let t = Math.max(j * j - i * i, 2 * i * j);
      if (helper.gcd(s, t) !== 1) {
        continue;
      }
      if (s + t > 3 * m) {
        break;
      }
      let k = 1;
      while (k * s <= m && k * t <= 2 * m) {
        for (let a = 1; a <= m; a++) {
          if (k * t - a > m) {
            continue;
          }
          if (k * t - a < 1) {
            break;
          }
          if (k * s >= a && k * s >= k * t - a) {
            cuboids.add([k * s, a, k * t - a].sort((x, y) => x - y).join(" "));
          }
        }
        if (k * t <= m) {
          for (let a = 1; a <= Math.floor(k*s/2); a++) {
            cuboids.add([k * t, k * s - a, a].sort((x, y) => x - y).join(" "));
          }
        }
        k++;
      }
    }
  }
  return cuboids.size;
};

const p086Solution = function () {
  let target = 1000000;
  let start = 1800;
  while (count(start) <= target) {
    start++;
  }
  return start;
};
console.log(p086Solution())
// console.log(count(2000))
// console.log(countSolutions(2000));
