namespace NS155 {
  class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
      this.stack = [];
      this.minStack = [];
    }

    push(val: number): void {
      this.stack.push(val);

      if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
      }
    }

    pop(): void {
      if (this.stack.length === 0) {
        return;
      }

      const popped = this.stack.pop();
      if (popped !== undefined && popped === this.getMin()) {
        this.minStack.pop();
      }
    }

    top(): number {
      if (this.stack.length === 0) {
        throw new Error("Stack is empty");
      }

      return this.stack[this.stack.length - 1];
    }

    getMin(): number {
      if (this.minStack.length === 0) {
        throw new Error("Stack is empty");
      }

      return this.minStack[this.minStack.length - 1];
    }
  }

  /**
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(val)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */
}
