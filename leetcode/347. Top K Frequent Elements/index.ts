namespace NS347 {
  function findKMax(arr: number[], k: number): number[] {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr.slice(0, k);
  }

  function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap: { [key: number]: number } = {};

    for (const num of nums) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Пары значений сортирую по убыванию повторений, вырезаю K начальных и мап именно значений.
    return Object.entries(frequencyMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((v) => Number(v[0]));
  }

  const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
  console.log(result);
}
