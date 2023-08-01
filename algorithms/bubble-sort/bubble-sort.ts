const bubbleSort = (array: number[]): number[] => {
  const newArray = [...array];
  let isSorted = true;

  for (let i = 0; i < newArray.length - 1; i++) {
    isSorted = true;
    for (let j = 0; j < newArray.length - i; j++) {
      if (newArray[j] > newArray[j + 1]) {
        const temp = newArray[j + 1];
        newArray[j + 1] = newArray[j];
        newArray[j] = temp;

        isSorted = false;
      }
    }

    if (isSorted) {
      break;
    }
  }

  return newArray;
};

const unsortedBubbleSortArray = [30, 40, 10, 20, 100];
console.log(bubbleSort(unsortedBubbleSortArray));
