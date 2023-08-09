namespace NS150 {
  function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
      if (!isNaN(Number(token))) {
        stack.push(Number(token));
      } else {
        const operand2 = stack.pop()!;
        const operand1 = stack.pop()!;

        switch (token) {
          case "+":
            stack.push(operand1 + operand2);
            break;
          case "-":
            stack.push(operand1 - operand2);
            break;
          case "*":
            stack.push(operand1 * operand2);
            break;
          case "/":
            stack.push(Math.trunc(operand1 / operand2));
            break;
        }
      }
    }

    return stack[0];
  }

  const result = evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]);

  console.log(result);
}
