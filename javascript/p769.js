"use strict";

const helper = require("./helper");
// (-1, 0), (0, t) (0 < t < sqrt(3)/3 < 0.577351)
// z^2 = x^2 + 5*x*y + 3*y^2 ,a = x/z, b = y/z , a^2 + 5*a*b + 3*b^2 = 1
// ((1-3*t^2)/(3*t^2+5*t+1), (5*t^2+2*t)/(3*t^2+5*t+1))
// t=m/n, gcd(m,n)=1, ((n^2-3*m^2)/(3*m^2+5*m*n+n^2),(5*m^2+2*m*n)/(3*m^2+5*m*n+n^2))
// (x,y,z) = (n^2-3*m^2,5*m^2+2*m*n,3*m^2+5*m*n+n^2),gcd(m,n)=1
// x^2 + 5*x*y + 3*y^2 = [(2*x + 5*y)^2 - 13*y^2]/4 = z^2
// a^2 - 13*b^2 = 4*c^2, a = 2*x + 5*y, b = y, c = z;

const solveEquation = function (n) {
  const a = helper.findContinuedFraction(n);
  // a = [ 3, [ 1, 1, 1, 1, 6 ] ]
  // 649n 180n
  // 842401n 233640n
  // 1093435849n 303264540n
  // 1419278889601n 393637139280n
  // 1842222905266249n 510940703520900n
  const h = [3n, 4n];
  const k = [1n, 1n];
  const solutions =[]
  for (let i = 2; i < 50; i++) {
    h[i] = h[i - 1] * BigInt(a[1][(i - 1) % 5]) + h[i - 2];
    k[i] = k[i - 1] * BigInt(a[1][(i - 1) % 5]) + k[i - 2];
    if (h[i] * h[i] - 13n * k[i] * k[i] === 1n) {
      solutions.push([h[i],k[i]])
    }
  }
  return solutions
};

const p769Solution = function (limit) {
  const limit1 = Math.floor(Math.sqrt(limit / 6));
  const limit2 = Math.floor(Math.sqrt(limit));
  let count = 0;
  for (let m = 1; m < limit1 * 2.31; m++) {
    for (let n = Math.floor(Math.sqrt(3) * m) + 1; n < limit2 * 3.61; n++) {
      if (helper.gcd(n, m) !== 1) {
        continue;
      }
      let x = n * n - 3 * m * m;
      if (m > limit1 && x % 13 !== 0) {
        continue;
      }
      let y = 5 * m * m + 2 * m * n;
      let z = 3 * m * m + 5 * m * n + n * n;
      let gcd = helper.gcd(x, y);
      if (z / gcd > limit) {
        continue;
      }
      count++;
    }
  }
  return count;
};
// console.log(p769Solution(10 ** 14));
