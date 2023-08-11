namespace NS121 {
  function maxProfit(prices: number[]): number {
    let maxP = 0;
    let right = 1;
    let left = 0;

    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        maxP = Math.max(maxP, prices[right] - prices[left]);
      } else {
        left = right;
      }
      right += 1;
    }

    return maxP;
  }
}
