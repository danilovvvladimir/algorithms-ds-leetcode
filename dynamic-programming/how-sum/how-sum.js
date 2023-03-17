//=====================
// Write a function "howSum(targetSum, numbers)" that takes in a targetSum and an array of numbers;
//
// The function should return an array containing ANY combination of
// elements that add up exactly the targetSum. If there is no combination that add up tp the targetSum, then return null
//
// If there are multiple combinations possible, you may return any single one.
//
// howSum(7, [5, 3, 4, 7]) => [7]
// howSum(8, [5, 3, 2) => [2,2,2,2] or [3,5]
// howSum(7, [2, 4]) => null
// howSum(0, [1, 2, 3]) => []
//
//=====================

// === Classic ===
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
};

console.log(howSum(0, [1, 2, 3]));
console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 2]));
console.log(howSum(7, [2, 4]));

// Memoization
const howSumMemoization = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSumMemoization(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;

  return null;
};
console.log(howSumMemoization(300, [7, 14]));

const howSumTabulation = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table[targetSum];
};
console.log(howSumTabulation(8, [2, 3, 5]));
