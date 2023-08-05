namespace NS128 {
  // === Best Speed ===

  function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    let max = 0;

    const resultNums = Array.from(new Set([...nums].sort((a, b) => a - b)));

    if (resultNums.length === 1) {
      return 1;
    }

    let localMax = 1;
    for (let i = 0; i < resultNums.length - 1; i++) {
      if (resultNums[i] + 1 === resultNums[i + 1]) {
        localMax += 1;
      } else {
        localMax = 1;
      }

      if (localMax > max) {
        max = localMax;
      }
    }

    return max;
  }

  // === Best Memory ===
  // function longestConsecutive(nums: number[]): number {
  //   const numSet = new Set(nums);
  //   let max = 0;
  //   let length = 0;
  //   for (const n of nums) {
  //     if (!numSet.has(n - 1)) {
  //       length = 0;
  //       while (numSet.has(n + length)) {
  //         length += 1;
  //       }
  //       max = Math.max(length, max);
  //     }
  //   }
  //   return max;
  // }
}
