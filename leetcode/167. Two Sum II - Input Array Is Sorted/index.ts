namespace NS167 {
  function twoSum(numbers: number[], target: number): number[] {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    let currentSum = 0;

    while (leftPointer < rightPointer) {
      currentSum = numbers[leftPointer] + numbers[rightPointer];

      if (currentSum === target) return [leftPointer + 1, rightPointer + 1];

      if (currentSum > target) {
        rightPointer -= 1;
      }

      if (currentSum < target) {
        leftPointer += 1;
      }
    }

    return [];
  }
}
