const numbers = [0, 2, 4, 6, 8, 10, 12, 14];

function binarySearchIterative(array, target) {
  let start = 0;
  let end = array.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.round((start + end) / 2);
    if (target === array[middle]) {
      return middle;
    }

    if (target < array[middle]) {
      end = middle - 1;
    }

    if (target > array[middle]) {
      start = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearchIterative(numbers, 2));
