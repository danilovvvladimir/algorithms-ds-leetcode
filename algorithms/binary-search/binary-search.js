"use strict";
const binarySearch = (array, target) => {
    let start = 0;
    let end = array.length;
    let middle;
    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (array[middle] === target) {
            return middle;
        }
        else if (target < array[middle]) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }
    return -1;
};
const recursiveBinarySearch = (array, target, start, end) => {
    if (start >= end) {
        if (array[start] === target) {
            return start;
        }
        return -1;
    }
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
        return middle;
    }
    else if (target < array[middle]) {
        return recursiveBinarySearch(array, target, start, middle - 1);
    }
    else {
        return recursiveBinarySearch(array, target, middle + 1, end);
    }
};
const randomCase = [1, 2, 3, 4, 5];
console.log(binarySearch(randomCase, 5));
console.log(recursiveBinarySearch(randomCase, 5, 0, randomCase.length - 1));
