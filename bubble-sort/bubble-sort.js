function bubbleSort(array) {
  const sortedArray = [...array];
  let count = 0;
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
      count++;
    }
    if (!isSwapped) break;
  }
  console.log(count);
  return sortedArray;
}

//const randomCaseArray = [70, 55, 21, 67, 88, 12];
//console.log(bubbleSort(randomCaseArray));

//const bestCaseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(bubbleSort(bestCaseArray));

const worstCaseArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(bubbleSort(worstCaseArray));
