const quickSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  const less = [];
  const greater = [];

  for (let i = 0; i < array.length; i++) {
    if (pivotIndex === i) continue;

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

const unsortedQuickSortArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedQuickSortArray = quickSort(unsortedQuickSortArray);
console.log(sortedQuickSortArray);
