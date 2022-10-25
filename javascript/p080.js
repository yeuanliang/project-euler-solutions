"use strict";

const findX = function (c, p) {
  for (let i = 0n; i <= 10n; i++) {
    if (i * (20n * p + i) > c) {
      return i - 1n;
    }
  }
};

const sqrt = function (number, len = 99) {
  const integerPart = [];
  const fractionalPart = [];
  const s = number.toString();
  if (s.includes(".")) {
    let temp = s.split(".");
    let integerString = temp[0].length % 2 === 0 ? temp[0] : "0" + temp[0];
    let fractionString = temp[1].length % 2 === 0 ? temp[1] : temp[1] + "0";
    for (let i = 0; i <= integerString.length - 2; i += 2) {
      integerPart.push(integerString.slice(i, i + 2));
    }
    for (let j = 0; j <= fractionString.length - 2; j += 2) {
      fractionalPart.push(fractionString.slice(j, j + 2));
    }
  } else {
    let temp = s.length % 2 === 0 ? s : "0" + s;
    for (let i = 0; i <= temp.length - 2; i += 2) {
      integerPart.push(temp.slice(i, i + 2));
    }
  }
  const digitsPairs = [].concat(integerPart).concat(fractionalPart);
  let c = 0n;
  let remainder = 0n;
  let p = 0n;
  let x = 0n;
  let root = "";
  let i = 0;
  while (i <= integerPart.length + len - 1) {
    if (i < digitsPairs.length) {
      c = remainder * 100n + BigInt(digitsPairs[i]);
    } else {
      c = remainder * 100n;
    }
    x = findX(c, p);
    let y = x * (20n * p + x);
    remainder = c - y;
    if (i === integerPart.length - 1) {
      root = root + x + ".";
    } else {
      root += x;
    }
    p = 10n * p + x;
    i += 1;
    if (i === digitsPairs.length && remainder === 0n) {
      return root;
    }
  }
  return root;
};

const p080Solution = function () {
  let sum = 0;
  for (let i = 2; i < 100; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      continue;
    }
    let r = sqrt(i);
    let arr = r.split(".");
    let rs = +arr[0] + arr[1].split("").reduce((x, y) => +x + +y);
    sum += rs;
  }
  return sum;
};

console.log(p080Solution());
