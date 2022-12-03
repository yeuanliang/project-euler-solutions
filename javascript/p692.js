"use strict";

// F(1)=1, F(2)=2, F(3)=3, F(n+1) = F(n) + F(n-1)
// G(1)=1, G(2)=2, G(3)=6
// G(3) = 6
// G(5) = G(3)+G(2)+H(3)
// G(8) = G(5)+G(3)+H(5)
// G(13) = (G8)+G(5)+H(8)

const p692Solution = function () {
  const f = [1n, 2n];
  for (let i = 2; i < 100; i++) {
    f[i] = f[i - 1] + f[i - 2];
    if (f[i] === 23416728348467685n) {
      break;
    }
  }
  let len = f.length;
  const g = [1n, 3n, 6n];
  for (let i = 3; i < len; i++) {
    g[i] = g[i - 1] + g[i - 2] + f[i - 1];
  }
  return g[len - 1];
};

console.log(p692Solution());
