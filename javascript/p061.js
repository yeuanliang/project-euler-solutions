"use strict";

const helper = require("./helper");

const triangle = function (n) {
  return (n * (n + 1)) / 2;
};

const splitNumber = function (n) {
  const s = n + "";
  const len = s.length;
  return [+s.slice(0, len / 2), +s.slice(len / 2, len)];
};

const numberType = function (n) {
  const types = [];
  if (helper.isTriangle(n)) {
    types.push("triangle");
  }
  if (helper.isSquare(n)) {
    types.push("square");
  }
  if (helper.isPentagonal(n)) {
    types.push("pentagonal");
  }
  if (helper.isHexagonal(n)) {
    types.push("hexagonal");
  }
  if (helper.isHeptagonal(n)) {
    types.push("heptagonal");
  }
  if (helper.isOctagonal(n)) {
    types.push("octagonal");
  }
  if (types.length === 0) {
    types.push("normal");
  }
  return types;
};

const isCyclic = function (array) {
  return splitNumber(array[0])[0] === splitNumber(array[array.length - 1])[1];
};

const hasDifferentTypes = function (cyclicNumbers) {
  const polygonalTypesSet = new Set();
  const singleTypeSet = new Set();
  let singleTypeCount = 0;
  for (let i = 0; i < cyclicNumbers.length; i++) {
    let types = numberType(cyclicNumbers[i]);
    if (types.length === 1) {
      singleTypeSet.add(types[0]);
      singleTypeCount++;
    }
    for (const t of types) {
      polygonalTypesSet.add(t);
    }
  }
  return (
    polygonalTypesSet.size === cyclicNumbers.length &&
    singleTypeCount === singleTypeSet.size
  );
};

const findNext = function (array) {
  const len = array.length;
  const start = array[len - 1];
  const exp = (start + "").length / 2;
  const numbers = splitNumber(start);
  const next = [];
  for (let i = 10 ** (exp - 1); i < 10 ** exp; i++) {
    let n = numbers[1] * 10 ** exp + i;
    let t = numberType(n);
    if (!t.includes("normal")) {
      let t = [].concat(array);
      t.push(n);
      if (new Set(t).size === t.length) {
        next.push(t);
      }
    }
  }
  return next;
};

const findCyclicSet = function (n) {
  let polygonalSets = [[n]];
  let setLength = 1;
  while (setLength < 6) {
    let temp = [];
    for (const s of polygonalSets) {
      let newSet = findNext(s);
      temp.push(...newSet);
    }
    polygonalSets = temp;
    setLength++;
  }
  const cyclicSets = [];
  for (const s of polygonalSets) {
    if (isCyclic(s)) {
      if (hasDifferentTypes(s)) {
        cyclicSets.push(s);
      }
    }
  }
  return cyclicSets;
};

const p061Solution = function (digitsCount) {
  const triangleNumbers = [];
  const start = Math.floor(
    (-1 + Math.sqrt(1 + 4 * 2 * 10 ** (digitsCount - 1))) / 2
  );
  for (let i = start + 1; triangle(i) < 10 ** digitsCount; i++) {
    let number = triangle(i);
    if (number % 10 ** (digitsCount / 2) > 10 ** (digitsCount / 2 - 1) - 1) {
      triangleNumbers.push(number);
    }
  }
  for (const number of triangleNumbers) {
    let s = findCyclicSet(number);
    if (s.length > 0) {
      console.log(s);
      return s[0];
    }
  }
};

console.log(p061Solution(4).reduce((x, y) => x + y));
