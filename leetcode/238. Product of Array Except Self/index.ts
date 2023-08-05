namespace NS238 {
  function productExceptSelf(nums: number[]): number[] {
    const result = new Array(nums.length).fill(1);

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
      result[i] = prefix;
      prefix *= nums[i];
    }

    let postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] = postfix;
      postfix *= nums[i];
    }

    return result;
  }

  // const result1 = productExceptSelf([1, 2, 3, 4]);
  // console.log(result1);

  const result2 = productExceptSelf([-1, 1, 0, -3, 3]);
  console.log(result2);
}
