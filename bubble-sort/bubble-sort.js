function bubbleSort(array) {
  const sortedArray = [...array];

  let isSwapped = true;
  for (let i = 0; i < sortedArray.length - 1; i++) {
    isSwapped = false;
    for (let j = 0; j < sortedArray.length - 1 - i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return sortedArray;
}

const randomCaseArray = [70, 55, 21, 67, 88, 12];
const bestCaseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const worstCaseArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(randomCaseArray));
console.log(bubbleSort(bestCaseArray));
console.log(bubbleSort(worstCaseArray));
