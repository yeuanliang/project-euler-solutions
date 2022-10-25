"use strict";

const fs = require("fs");
const path = require("path");

const p079Solution = function () {
  const file = fs.readFileSync(
    path.resolve(__dirname, "../assets/p079_keylog.txt")
  );
  const data = file.toString().trim().split("\n");
  const dataRemoveDuplicate = new Set();
  const digits = new Set();
  for (const s of data) {
    if (dataRemoveDuplicate.has(s)) {
      continue;
    }
    dataRemoveDuplicate.add(s);
    for (const d of s.split("")) {
      digits.add(d);
    }
  }
  const result = [...digits];
  dataRemoveDuplicate.forEach((v) => {
    let len = v.length;
    for (let i = 0; i < len - 1; i++) {
      let p = result.indexOf(v[i]);
      let q = result.indexOf(v[i + 1]);
      if (p > q) {
        let temp = result[p];
        result[p] = result[q];
        result[q] = temp;
      }
    }
  });
  return result.join('')
};

console.log(p079Solution());
