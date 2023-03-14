const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    if (canSum(targetSum - num, numbers)) {
      return true;
    }
  }

  return false;
};

console.log(canSum(10, [5, 3, 4, 7]));
console.log(canSum(7, [1, 2]));