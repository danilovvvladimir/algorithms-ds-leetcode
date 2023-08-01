function removeElement(nums: number[], val: number): number {
  const newArray = nums.filter((num) => num !== val);
  nums.length = 0;
  for (let i = 0; i < newArray.length; i++) {
    nums.push(newArray[i]);
  }
  return newArray.length;
}
