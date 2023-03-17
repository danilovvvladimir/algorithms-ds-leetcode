//=====================
// Write a function "bestSum(targetSum, numbers)" that takes in a targetSum and an array of numbers;
//
// The function should return an array containing the SHORTEST combination of
// elements that add up exactly the targetSum. If there is no combination that add up tp the targetSum, then return null
//
// If there is tie for the shortest combinations, you may return any of these shortest.
//
// bestSum(7, [5, 3, 4, 7]) => [7]
// bestSum(8, [5, 3, 2) => [3,5]
//
//=====================

//=== Classic ===
const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];

      // if the combination is shorter that current "shortest" update it
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
};

// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [5, 3, 2]));
// console.log(bestSum(8, [1, 4, 5]));
//console.log(bestSum(100, [1, 4, 5, 25]));

// === Memoization ===
const bestSumMemoization = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumMemoization(remainder, numbers, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];

      // if the combination is shorter that current "shortest" update it
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return memo[targetSum];
};

// console.log(bestSumMemoization(100, [1, 4, 5, 25]));

// longest sum
const bestSumTabulation = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      let newNumbers = [...numbers].filter((item) => item > i);

      for (let num of newNumbers) {
        if (num === i && i != 0) continue;
        const combination = [...table[i], num];
        // console.log(num);
        // console.log(combination);
        // console.log(newNumbers);

        if (
          table[i + num] == null ||
          table[i + num].length < combination.length
        ) {
          table[i + num] = combination;
        }
        newNumbers = newNumbers.filter((item) => item !== num);
      }
    }
  }

  console.log(table[targetSum]);
  // return table.filter(
  //   (item) => item.reduce((acc, curr) => acc * curr) >= mainLength
  // );
  // return table.filter((item) => item.length == mainLength);
};
debugger;

const newArr = [];
for (let i = 1; i < 10; i++) {
  newArr.push(i);
}
console.log(bestSumTabulation(10, newArr));
