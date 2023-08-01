const numbers = [1, 1, 2];

function removeDuplicates(nums: number[]): number {
  const newArray = Array.from(new Set(nums));
  nums.length = 0;

  for (let i = 0; i < newArray.length; i++) {
    nums.push(newArray[i]);
  }

  return newArray.length;
}

console.log(removeDuplicates(numbers));
console.log(numbers);
