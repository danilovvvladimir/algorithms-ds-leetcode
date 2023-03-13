function selectSort(array) {
  const sortedArray = [...array];

  let count = 0;
  let minIndex;
  for (let i = 0; i < sortedArray.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[minIndex]) {
        minIndex = j;
      }
      count++;
    }

    if (minIndex == i) break;

    let temp = sortedArray[minIndex];
    sortedArray[minIndex] = sortedArray[i];
    sortedArray[i] = temp;
  }
  console.log(count);
  return sortedArray;
}

const worstCaseArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
debugger;
console.log(selectSort(worstCaseArray));
