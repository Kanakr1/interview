// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? 
// Push, pop, and min should all operate in O(1) time

function Stack() {
  this.stack = [];
  this.min;
}

Stack.prototype.push = function(val) {
  if (this.stack.length) {
    if (this.min > val) {
      this.min = val;
    }
    this.stack.push({val: val, min: this.min});
  } else {
    this.min = val;
    this.stack.push({val: val, min: this.min});
  }
};

Stack.prototype.pop = function() {
  let popped = this.stack.pop();
  this.min = this.stack[this.stack.length - 1].min;
  return popped.val;
};

Stack.prototype.getMin = function() {
  return this.min;
};

let stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(10);
console.assert(stack.getMin() === 3);

stack.pop();
stack.pop();

stack.push(10);
console.assert(stack.getMin() === 5);
stack.push(-1);
console.assert(stack.getMin() === -1);
stack.pop();
console.assert(stack.getMin() === 5);
stack.push(-5);
console.assert(stack.getMin() === -5);






