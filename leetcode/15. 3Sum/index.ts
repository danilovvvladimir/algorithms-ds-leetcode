namespace NS15 {
  function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let l = i + 1;
      let r = nums.length - 1;
      let sum = 0;

      while (l < r) {
        sum = nums[i] + nums[l] + nums[r];

        if (sum > 0) {
          r -= 1;
        }

        if (sum < 0) {
          l += 1;
        }

        if (sum === 0) {
          result.push([nums[i], nums[l], nums[r]]);
          l += 1;
          while (l < r && nums[l] === nums[l - 1]) {
            l += 1;
          }
        }
      }
    }

    return result;
  }
}
