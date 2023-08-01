"use strict";
const selectionSort = (array) => {
  const newArray = [...array];
  let minElementIndex;
  for (let i = 0; i < newArray.length; i++) {
    minElementIndex = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[minElementIndex] > newArray[j]) {
        minElementIndex = j;
      }
    }
    if (minElementIndex !== i) {
      const temp = newArray[minElementIndex];
      newArray[minElementIndex] = newArray[i];
      newArray[i] = temp;
    }
  }
  return newArray;
};
const unsortedSelectionSortArray = [30, 40, 10, 20, 100, 50];
console.log(selectionSort(unsortedSelectionSortArray));
