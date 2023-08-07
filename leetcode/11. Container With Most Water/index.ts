namespace NS11 {
  function maxArea(height: number[]): number {
    let max = 0;
    let currentArea = 0;

    let l = 0;
    let r = height.length - 1;

    while (l < r) {
      currentArea = (r - l) * Math.min(height[l], height[r]);
      max = Math.max(max, currentArea);

      if (height[l] < height[r]) {
        l += 1;
      } else {
        r -= 1;
      }
    }

    return max;
  }
}
