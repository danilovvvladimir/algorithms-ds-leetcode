// =================================
// Say that you are a traveler on a 2D grid.
// You begin in the top-left corner and
// your goal is to travel to the bottom-right corner.
// You may only move down or right
//
// In how many ways can you travel to the goal on a grid with dimenions m*n?
// =================================

// === Classic Recursive Grid Traveler ===
// O(2^(n+m)) - time
// O(n+m) - space
const gridTraveler = (m, n) => {
  // basic cases
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 2
console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18, 18)); // 2+ trillions

// === Dynamic Programming =>
// === Memoization Grid Traveler ===
// O() - time
// O() - space
// gridTraveler(a,b) == gridTrvaveler(b,a);

const gridTravelerMemoization = (m, n, memo = {}) => {
  // memo checking
  const key = m + "," + n;
  if (key in memo) return memo[key];

  // basic cases
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] =
    gridTravelerMemoization(m - 1, n, memo) +
    gridTravelerMemoization(m, n - 1, memo);

  return memo[key];
};

console.log(gridTravelerMemoization(18, 18)); //2333606220

const gridTravelerTabulation = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      const current = table[i][j];
      // adding current to left cell and bottom cell
      if (j + 1 < n + 1) table[i][j + 1] += current;
      if (i + 1 < m + 1) table[i + 1][j] += current;
    }
  }

  return table[m][n];
};

console.log(gridTravelerTabulation(3, 3)); // 6
console.log(gridTravelerTabulation(18, 18)); //2333606220
