//=========================
// Write a function "canConstruct(target, wordBank)" that accepts target string and an array of strings.
//
// The functions should return a boolean indicating whether or not the "target" can be constructed by concatenating elems of WordBank
//
// canConstruct(abcdef, [ab, abc, cd, def, abcd]) => true
// canConstruct("", [ab, abc, cd, def, abcd]) => true (zero elements taken)
//
// Префикс убираю, если в результате такого строка стала пустой, то true
// если невозможно убрать, то false
//=========================

// === Classic ===
const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }

  return false;
};

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(canConstruct("abcdef", ["1", "2", "3"]));

// === Memoization ===
const canConstructMemoization = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstructMemoization(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(
  canConstructMemoization("abcdef", ["ab", "abc", "cd", "def", "abcd"])
);
console.log(canConstructMemoization("abcdef", ["1", "2", "3"]));
console.log(
  canConstructMemoization("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "f",
  ])
);
