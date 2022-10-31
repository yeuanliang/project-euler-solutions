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
//   let cuboids=[]
  let count=0
  for (let i = 1; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      if (helper.gcd(i, j) !== 1) {
        continue;
      }
      let s = Math.min(j * j - i * i, 2 * i * j);
      let t = Math.max(j * j - i * i, 2 * i * j);
      if (s + t > 3 * m) {
        break;
      }
      if (helper.gcd(s, t) !== 1) {
        continue;
      }
      let k = 1;
      while (k * s <= m && k * t <= 2 * m) {
        for (let a = 1; a <= Math.floor(k*t/2); a++) {
          if (k * s >= a && k * s >= k * t - a) {
            // cuboids.push(a + " " + (k * t - a) + " " + k * s);
            count++
          }
        }
        if (k * t <= m) {
          for (let a = 1; a <= Math.floor((k * s) / 2); a++) {
            // cuboids.push(a + " " + (k * s - a) + " " + k * t);
            count++
          }
        }
        k++;
      }
    }
  }
  return count;
};

const p086Solution = function () {
  let target = 1000000;
  let start = 100;
  while (count(start) <= target) {
    start+=20;
  }
  while (count(start) > target) {
    start--;
  }
  return start+1;
};

console.log(p086Solution())
