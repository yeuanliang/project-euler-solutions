"use strict";

// Recursive Solution
const result = new Map();
const countRoutesRecursive = function (m, n) {
  if (m === 0 || n === 0) {
    return 1;
  }
  if (result.has(m + "," + n)) {
    return result.get(m + "," + n);
}
result.set(m + "," + n, countRoutesRecursive(m - 1, n) + countRoutesRecursive(n - 1, m));
  return result.get(m+','+n);
};

// Iterative Solution
const countRoutesIterative = function (m, n) {
  let grid = [];
  for (let i = 0; i <= m; i++) {
    grid.push([]);
    grid[i][0] = 1;
  }
  for (let j = 0; j <= n; j++) {
    grid[0][j] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[m][n];
};

// Combinatorial Solution
// choosing m items from a group of m+n item
const countRoutesCombinatorial = function (m, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = (result * (m + i)) / i;
  }
  return result;
};
// console.log(countRoutesCombinatorial(20,20))
// console.log(countRoutesIterative(20,20))
console.log(countRoutesRecursive(20,20))