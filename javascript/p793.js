"use strict";

// time cost: 5h 25m 19s

const nextS = function (s) {
  const p = 50515093;
  return (s * s) % p;
};

const genS = function (n) {
  const s = [290797];
  for (let i = 1; i < n; i++) {
    s[i] = nextS(s[i - 1]);
  }
  return s;
};

const p793Solution = function (n) {
  const s = genS(n).sort((a, b) => a - b);
  const len = s.length;
  const total = (len * (len - 1)) / 2;
  const m = Math.floor((total + 1) / 2);
  const isOk = function (product) {
    let ans = 0;
    for (let l = 0; l < n; l++) {
      let r = n - 1;
      while (r > l && s[l] * s[r] > product) {
        if (r <= l) {
          break;
        }
        r--;
      }
      ans += r - l;
    }
    return ans >= m;
  };

  let high = s[len - 1] * s[len - 2];
  let low = s[0] * s[1];
  while (low < high) {
    let middle = Math.floor((high + low) / 2);
    if (isOk(middle)) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }
  return low;
};

console.log(p793Solution(1000003));
