function singleNumber(nums: number[]): number {
  const numbersOccurrence: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (numbersOccurrence[nums[i]] === undefined) {
      numbersOccurrence[nums[i]] = 1;
    } else {
      numbersOccurrence[nums[i]] += 1;
    }
  }

  for (const key in numbersOccurrence) {
    if (numbersOccurrence[key] === 1) {
      return parseInt(key);
    }
  }
  return -1;
}

// Better solution =>
// let result = 0;
//     for(let elem of nums) {
//         result ^= elem;
//     }
//     return result;

singleNumber([1, -1, 1, 2, 1, 2]);
