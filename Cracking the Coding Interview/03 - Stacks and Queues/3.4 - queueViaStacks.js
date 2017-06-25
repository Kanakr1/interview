// Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  enqueue(val) {
    this.input.push(val);
    return val;
  }

  dequeue() {
    if (this.output.length) {
      return this.output.pop();
    } else {
      while (this.input.length) {
        this.output.push(this.input.pop());
      }
      return this.output.pop();
    }
  }

  showStacks() {
    console.log(this.input);
    console.log(this.output);
  }
}  

let queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.showStacks();
queue.dequeue();
queue.showStacks();
queue.dequeue();
queue.showStacks();
