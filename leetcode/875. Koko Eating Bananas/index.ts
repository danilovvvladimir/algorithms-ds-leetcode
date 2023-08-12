namespace NS875 {
  function minEatingSpeed(piles: number[], h: number): number {
    const isPossible = (speed: number): boolean => {
      let hours = 0;
      for (const pile of piles) {
        hours += Math.ceil(pile / speed);
      }
      return hours <= h;
    };

    let l = 1;
    let r = Math.max(...piles);

    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (isPossible(mid)) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }

    return l;
  }

  const result = minEatingSpeed([3, 6, 7, 11], 8);
  console.log(result);
}
