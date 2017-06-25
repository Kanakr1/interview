// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, 
// but you may not copy the elements into any other data structure (such as an array). The stack supports the following 
// operations: push, pop, peek, and isEmpty.

class SortStack {
  constructor() {
    this.stack = [];
    this.buffer = [];
  }

  push(val) {
    if (this.isEmpty() || this.peek() > val) {
      this.stack.push(val);
    } else {
      while (this.peek() < val) {
        this.buffer.push(this.stack.pop());
      }
      this.stack.push(val);
      while (this.buffer.length) {
        this.stack.push(this.buffer.pop());
      }
    }
  }

  pop() {
    return this.stack.pop();
  }

  peek(stack = this.stack) {
    return stack[stack.length - 1];
  }

  isEmpty(stack = this.stack) {
    return !stack.length;
  }
}

let sortedStack = new SortStack();

sortedStack.push(1);
sortedStack.push(2);
sortedStack.push(3);
sortedStack.push(4);
sortedStack.push(5);
sortedStack.push(6);
sortedStack.push(7);
sortedStack.push(8);

console.assert(sortedStack.pop() === 1);
console.assert(sortedStack.pop() === 2);
console.assert(sortedStack.pop() === 3);
console.assert(sortedStack.pop() === 4);
console.assert(sortedStack.pop() === 5);
console.assert(sortedStack.pop() === 6);
console.assert(sortedStack.pop() === 7);
console.assert(sortedStack.pop() === 8);



