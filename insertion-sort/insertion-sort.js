function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // начинаем со второго элемента
    let current = array[i]; // текущий элемент
    let j = i - 1; // индекс предыдущего элемента
    while (j >= 0 && array[j] > current) {
      // пока предыдущий элемент больше текущего
      array[j + 1] = array[j]; // меняем их местами
      j--;
    }
    array[j + 1] = current; // вставляем текущий элемент в отсортированную часть массива
  }
  return array;
}

//Пример:
let myArray = [30, 20, 1, 4, 5];
console.log(insertionSort(myArray)); // [1, 2, 3, 4, 5]
