//=========================
// Write a function "allConstruct(target, wordBank)" that accepts target string and an array of strings.
//
// The functions should return array of all ways ithat the target can be constructed by words in wordBank
//
// allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) => [["abc","def"]]
// allConstruct("purple", ["purp", "le", "p", "purpl", "ur"]) =>  [[purp, le] & [p, ur, p, le]]
// allConstruct("eeee", ["eeee", "e", "ee", "eee"]) => 8
// allConstruct("", [ab, abc, cd, def, abcd]) => true (zero elements taken)
//=========================

const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixCombinations = allConstruct(suffix, wordBank);
      const targetCombinations = suffixCombinations.map((combination) => [
        word,
        ...combination,
      ]);
      result.push(...targetCombinations);
    }
  }

  return result;
};

console.log(allConstruct("purple", ["purp", "le", "p", "purpl", "ur"]));

// === Memoization ===
const allConstructMemoization = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixCombinations = allConstructMemoization(
        suffix,
        wordBank,
        memo
      );
      const targetCombinations = suffixCombinations.map((combination) => [
        word,
        ...combination,
      ]);
      result.push(...targetCombinations);
    }
  }

  memo[target] = result;
  return result;
};

console.log(
  allConstructMemoization("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
  ])
);
