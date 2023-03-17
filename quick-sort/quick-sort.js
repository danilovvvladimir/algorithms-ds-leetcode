const quickSort = (array) => {
  // Базовый случай
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];

  let lessSubArray = [];
  let greaterSubArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      // Если элемент в массиве - наш разделитель
      continue;
    }

    if (array[i] < pivot) {
      lessSubArray.push(array[i]);
    } else {
      greaterSubArray.push(array[i]);
    }
  }

  return [...quickSort(lessSubArray), pivot, ...quickSort(greaterSubArray)];
};

const unsortedArray = [90, 75, 162, 55, 24, 1, 20, 532, -53];
console.log(quickSort(unsortedArray));
