"use strict";
const helper = require("./helper");
// y - z = p^2
// x - y = q^2
// x - z = p^2 + q^2 = (s * s + r * r)^2 = (a^2 - b^2)^2
// x + y = m^2 = (a^2 + b^2)^2
// y + z = m^2 - p^2 - q^2 = (2 * a * b)^2
// x + z = m^2 - p^2
// x = (m^2 + q^2) / 2
// y = (m^2 - q^2) / 2
// z = (m^2 - 2 * p^2 - q^2) / 2
// x + y + z = (3 * m^2 - 2 * p^2 - q^2) / 2

const p142Solution = function () {
  for (let r = 1; r < 50; r++) {
    for (let s = r + 1; s < 50; s++) {
      let t = r * r + s * s;
      let k = 1;
      while (k < 20) {
        for (let a = s; a < 50; a++) {
          for (let b = a + 1; b < 50; b++) {
            if (b * b - a * a === k * t) {
              if (
                helper.isSquare(
                  (a * a + b * b) ** 2 - ((s * s - r * r) * k) ** 2
                )
              ) {
                let m = a * a + b * b;
                let p = k * (s * s - r * r); //
                let q = 2 * k * r * s;
                if ((m * m + q * q) % 2 === 0) {
                  return m * m - p * p + (m * m - q * q) / 2;
                }
              } else if (
                helper.isSquare((a * a + b * b) ** 2 - (2 * k * r * s) ** 2)
              ) {
                let m = a * a + b * b;
                let q = k * (s * s - r * r);
                let p = 2 * k * r * s; 
                if ((m * m + q * q) % 2 === 0) {
                  return m * m - p * p + (m * m - q * q) / 2;
                }
              }
            }
          }
        }
        k++;
      }
    }
  }
};

console.log(p142Solution());
