//=========================
// Write a function "countConstruct(target, wordBank)" that accepts target string and an array of strings.
//
// The functions should return the number of ways ithat the target can be constructed by words in wordBank
//
// countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) => 1
// countConstruct("purple", ["purp", "le", "p", "purpl", "ur"]) => 2 purp + le & p ur p le
// countConstruct("eeee", ["eeee", "e", "ee", "eee"]) => 8
// countConstruct("", [ab, abc, cd, def, abcd]) => true (zero elements taken)
//
// Префикс убираю, если в результате такого строка стала пустой, то true
// если невозможно убрать, то false

// === Classic ===
const countConstruct = (target, wordBank) => {
  if (target === "") return 1;

  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWays = countConstruct(suffix, wordBank);
      count += numWays;
    }
  }

  return count;
};

// console.log(countConstruct("purple", ["purp", "le", "p", "purpl", "ur"]));
// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(countConstruct("eeee", ["eeee", "e", "ee", "eee"]));

// === Memoization ===
const countConstructMemoization = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWays = countConstructMemoization(suffix, wordBank, memo);
      count += numWays;
    }
  }

  memo[target] = count;
  return count;
};

console.log(
  countConstructMemoization("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
  ])
);
