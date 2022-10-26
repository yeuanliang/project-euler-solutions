"use strict";

const helper = require("./helper");

// https://medium.com/theburningmonk-com/project-euler-problem-83-solution-e492478b9f3d
const p083Solution = function () {
  const data = helper
    .readFile("p083_matrix.txt")
    .split("\n")
    .map((item) => item.split(",").map((s) => +s));
  const size = data.length;
  const sumMatrix = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0)
  );
  sumMatrix[0][0] = data[0][0];
  for (let i = 1; i < size; i++) {
    sumMatrix[0][i] = sumMatrix[0][i - 1] + data[0][i];
    sumMatrix[i][0] = sumMatrix[i - 1][0] + data[i][0];
  }
  for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
      sumMatrix[i][j] = sumMatrix[i - 1][j] + data[i][j];
    }
  }
  const fromTop = function (row, col) {
    return sumMatrix[row - 1][col] + data[row][col];
  };
  const fromBelow = function (row, col) {
    return sumMatrix[row + 1][col] + data[row][col];
  };
  const fromLeft = function (row, col) {
    return sumMatrix[row][col - 1] + data[row][col];
  };
  const fromRight = function (row, col) {
    return sumMatrix[row][col + 1] + data[row][col];
  };
  const calNewMin = function (row, col) {
    const newMins = [];
    if (row > 0) {
      newMins.push(fromTop(row, col));
    }
    if (row < size - 1) {
      newMins.push(fromBelow(row, col));
    }
    if (col > 0) {
      newMins.push(fromLeft(row, col));
    }
    if (col < size - 1) {
      newMins.push(fromRight(row, col));
    }
    return Math.min(...newMins);
  };
  const cells = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      cells.push([i, j]);
    }
  }
  const optimize = function () {
    let changes = 0;
    cells.forEach((item) => {
      let row = item[0];
      let col = item[1];
      let current = sumMatrix[row][col];
      let newMin = calNewMin(row, col);
      if (newMin < current) {
        sumMatrix[row][col] = newMin;
        changes = 1;
      }
    });
    if (changes > 0) {
      optimize();
    }
  };
  optimize();
  return sumMatrix[size - 1][size - 1];
};

console.log(p083Solution());
