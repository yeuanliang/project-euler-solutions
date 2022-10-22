"use strict";

const getEdges = function (total, n) {
  const numbers = [];
  for (let i = 1; i <= 2 * n; i++) {
    numbers.push(i);
  }
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === numbers[i]) {
        continue;
      }
      for (let k = 0; k < numbers.length; k++) {
        if (
          numbers[k] !== numbers[i] &&
          numbers[k] !== numbers[j] &&
          numbers[i] + numbers[j] + numbers[k] === total
        ) {
          result.push([numbers[i], numbers[j], numbers[k]]);
        }
      }
    }
  }
  return result;
};

const gonRings = function (n) {
  if (n < 3) {
    return null;
  }
  const sum = n * (2 * n + 1);
  const innerSumMin = (n * (n + 1)) / 2;
  const innerSumMax = sum - innerSumMin;
  const total = [];
  for (let i = sum + innerSumMin; i <= sum + innerSumMax; i++) {
    if (i % n === 0) {
      total.push(i / n);
    }
  }
  const result = [];
  
  for (const t of total) {
    let edges = getEdges(t, n);
    let paths = edges;
    let step = 2;
    while (step <= n) {
      let newPaths = [];
      for (const path of paths) {
        for (const edge of edges) {
          if (!path.includes(edge[0]) && edge[0] > path[0] && edge[1] === path[path.length - 1]) {
            if (step !== n&&!path.includes(edge[2])) {
              newPaths.push([...path, ...edge]);
            }
            if (step === n && edge[2] === path[1]) {
              newPaths.push([...path, ...edge]);
            }
          }
        }
      }
      paths = newPaths;
      step += 1;
    }
    if (paths.length > 0) {
      for (const path of paths) {
          let s = path.join("") + " " + t;
          result.push(s);
      }
    }
  }
  return result;
};

console.log(gonRings(5).sort().pop().split(' ')[0]);
