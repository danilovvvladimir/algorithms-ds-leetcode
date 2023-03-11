const numbers = [0, 2, 4, 6, 8, 10, 12];

function BinarySearchRecursive(array, start, end, target) {
  if (start >= end) {
    if (array[start] === target) {
      return start;
    }
    return -1;
  }
  const middle = Math.round((start + end) / 2);

  if (target === array[middle]) {
    return middle;
  }

  if (target < array[middle]) {
    return BinarySearchRecursive(array, start, middle - 1, target);
  } else {
    return BinarySearchRecursive(array, middle + 1, end, target);
  }
}

console.log(BinarySearchRecursive(numbers, 0, numbers.length - 1, 102));
