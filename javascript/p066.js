"use strict";

const helper = require("./helper");

// Continued fraction: https://en.wikipedia.org/wiki/Continued_fraction
// Pell's equation: https://en.wikipedia.org/wiki/Pell%27s_equation

const isSolution = function (h, k, n) {
  const a = helper.bigNumberMultiply(h, h);
  const b = helper.bigNumberMultiply(k, k);
  const c = helper.bigNumberMultiply(b, n);
  const d = helper.bigNumberSum(c, [1]);
  if (a.join("") === d.join("")) {
    return true;
  } else {
    return false;
  }
};

const findSolution = function (n) {
  const a = helper.findContinuedFraction(n);
  const repeatedLength = a[1].length;
  const numerators = [[a[0]], [a[0] * a[1][0] + 1]];
  const denominators = [[1], [a[1][0]]];
  for (let i = 2; ; i++) {
    let b = a[1][(i - 1) % repeatedLength];
    let numerator = helper.bigNumberSum(
      helper.bigNumberMultiply(numerators[i - 1], [b]),
      numerators[i - 2]
    );
    numerators.push(numerator);
    let denominator = helper.bigNumberSum(
      helper.bigNumberMultiply(denominators[i - 1], [b]),
      denominators[i - 2]
    );
    denominators.push(denominator);
    if (isSolution(numerator, denominator, [n])) {
      let s = numerator.join("");
      return [n, s];
    }
  }
};

const compare = function (s, t) {
  if (s.length > t.length) {
    return s;
  } else if (s.length < t.length) {
    return t;
  } else {
    return s > t ? s : t;
  }
};

const p066Solution = function () {
  const solutions = [];
  for (let d = 2; d <= 1000; d++) {
    if (Number.isInteger(Math.sqrt(d))) {
      continue;
    }
    let solution = findSolution(d)
    solutions.push(solution)
  }
  let max = '';
  let result = null;
  for (const s of solutions) {
    if (max !== compare(max, s[1])) {
      max = s[1];
      result = s;
    }
  }
  return result;
};

console.log(p066Solution());
