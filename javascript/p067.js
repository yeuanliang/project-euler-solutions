"use strict";

const helper = require("./helper");

// Similar to Problem 18
const p067Solution = function () {
  const data = helper
    .readFile("p067_triangle.txt")
    .split("\n")
    .map((item) => item.split(" ").map((t) => +t));
  const routes = [];
  const sums = [];
  for (let i = 0; i < data.length - 1; i++) {
    routes.push([]);
    sums.push([]);
  }
  sums.push(data[data.length - 1]);
  routes.push(data[data.length - 1]);
  for (let i = data.length - 2; i >= 0; i--) {
    for (let j = 0; j < data[i].length; j++) {
      if (sums[i + 1][j] > sums[i + 1][j + 1]) {
        sums[i][j] = sums[i + 1][j] + data[i][j];
        routes[i][j] = routes[i + 1][j] + " + " + data[i][j];
      } else {
        sums[i][j] = sums[i + 1][j + 1] + data[i][j];
        routes[i][j] = routes[i + 1][j + 1] + " + " + data[i][j];
      }
    }
  }
  return sums[0][0];
};

console.log(p067Solution());
