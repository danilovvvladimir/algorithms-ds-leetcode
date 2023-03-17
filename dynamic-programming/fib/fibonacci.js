// === Classic Recursive Fibonacci ===
// O(2^n) - time
// O(n) - space
// n > 40, working badly

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
// const number = 30;
// for (let i = 0; i <= number; i++) {
//   console.log(`Fib #${i + 1} -> ${fib(i)}`);
// }

// === Dynamic Programming =>
// === Memoization Fibonacci ===
// O(n) - time
// O(n) - space

const fibMemoizationObj = (n, memo = {}) => {
  // check for existing n
  if (n in memo) return memo[n];
  // basic case
  if (n <= 2) return 1;

  // memoizating value
  memo[n] = fibMemoizationObj(n - 1, memo) + fibMemoizationObj(n - 2, memo);
  return memo[n];
};
console.log(fibMemoizationObj(50));

// array case
const fibMemoizationArray = (n, memo = []) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibMemoizationArray(n - 1, memo) + fibMemoizationArray(n - 2, memo);
  return memo[n];
};
console.log(fibMemoizationArray(50));

// === Tabulation ===
const fibTabulation = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i < n + 1; i++) {
    table[i + 1] = table[i + 1] + table[i];
    table[i + 2] = table[i + 2] + table[i];
  }

  return table[n];
};

console.log(fibTabulation(50));
