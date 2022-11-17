"use strict";

// https://en.wikipedia.org/wiki/Fibonacci_number
// x = A * (1 - x - x^2);
// x = (5 * A^2 + 2 * A + 1)^0.5 - A - 1 / (2 * A));
// y * y = (2 * A)^2 + (A + 1)^2
// k-th golden nugget , x = F(2 * k)/F(2 * k + 1), then A = F(2 * k) * F(2 * k + 1)
// Nugget(n) = Nugget(n-1) * 7 - Nugget(n-2) + 1
// https://oeis.org/A081018, Pell's equation x^2 - 5 * y^2 = -4

const p137Solution = function (k) {
  const fibonnaciNumbers = [0, 1]; 
  // fibonnaciNumbers[78] = 8944394323791464
  for (let i = 2; i < 78; i++) {
    fibonnaciNumbers[i] = fibonnaciNumbers[i - 1] + fibonnaciNumbers[i - 2];
  }
  return fibonnaciNumbers[2 * k] * fibonnaciNumbers[2 * k + 1];
};

console.log(p137Solution(15));
