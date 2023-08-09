namespace NS739 {
  function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const prevIndex = stack.pop()!;
        result[prevIndex] = i - prevIndex;
      }
      stack.push(i);
    }

    return result;
  }

  const result = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
  console.log(result);
}
