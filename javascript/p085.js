"use strict";

const countRectangles = function (n, m) {
  return (m * (m + 1) * n * (n + 1)) / 4;
};

const p085Solution = function () {
  const target = 2000000;
  let delta = 0;
  let area = 0;
  let x = 2000;
  let y = 1;
  while (x >= y) {
    let c = countRectangles(x, y);
    if (delta === 0) {
      delta = c;
      area = x * y;
    } else if (Math.abs(c - target) < delta) {
      delta = Math.abs(c - target);
      area = x * y;
    }
    if (c > target) {
      x--;
    } else {
      y++;
      x = Math.floor(Math.sqrt((4 * target) / (y * y + y)));
    }
  }
  return area;
};

console.log(p085Solution());
