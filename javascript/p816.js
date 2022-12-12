"use strict";

// time cost: 8h 5m 47s

const nextS = function (s) {
  const p = 50515093; //5807*8699
  return (s * s) % p;
};

const genS = function (n) {
  const s = [290797];
  for (let i = 1; i < n; i++) {
    s[i] = nextS(s[i - 1]);
  }
  return s;
};

const genPoints = function (n) {
  const s = genS(2 * n);
  const points = [];
  for (let i = 0; i < 2 * n - 1; i += 2) {
    points.push([s[i], s[i + 1]]);
  }
  return points;
};

const calcD = function (p1, p2) {
  return Math.sqrt((p2[1] - p1[1]) ** 2 + (p2[0] - p1[0]) ** 2);
};

const p816Solution = function (limit) {
  const points = genPoints(limit);
  const count = points.length;
  let distance = 0;
  for (let i = 0; i < count - 1; i++) {
    for (let j = i + 1; j < count; j++) {
      let d = calcD(points[i], points[j]);
      if (distance === 0) {
        distance = d;
      } else if (d < distance) {
        distance = d;
      }
    }
  }
  return distance.toFixed(9);
};

console.log(p816Solution(2000000));
