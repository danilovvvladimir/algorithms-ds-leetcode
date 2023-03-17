const allSumCombinationsHandler = (targetSum) => {
  const numbers = [];
  for (let i = 1; i < targetSum; i++) {
    numbers.push(i);
  }
  return allSumCombinations(targetSum, numbers);
};

const allSumCombinations = (targetSum, numbers) => {
  if (targetSum === 0) return [[]];
  if (targetSum < 0) return null;

  let result = [];
  let maxProduct = 1;

  for (let num of numbers) {
    const newTargetSum = targetSum - num;
    const newNumbers = numbers.filter((item) => item !== num);
    const combinations = allSumCombinations(newTargetSum, newNumbers);

    if (combinations !== null) {
      if (combinations.length !== 0) {
        // массив со всеми числами
        const targetCombinations = combinations.map((combination) => [
          num,
          ...combination,
        ]);

        targetCombinations.forEach((combination) => {
          let currentProduct = 1;
          currentProduct = combination.reduce((acc, curr) => acc * curr);
          if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
            result = [...targetCombinations];
          }
        });
      } else {
        result.push(...combinations);
      }
    }
  }

  return result;
};

debugger;
console.log(allSumCombinationsHandler(15));
