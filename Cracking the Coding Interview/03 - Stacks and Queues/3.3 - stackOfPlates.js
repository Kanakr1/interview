// Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely 
// start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. 
// SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. 
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the 
// same values as it would if there were just a single stack). 

// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

function SetOfStacks(capacity) {
  this.capacity = capacity;
  this.set = [[]];
  this.currentStack = 0;
}

SetOfStacks.prototype.push = function(val) {
  if (this.set[this.currentStack].length >= this.capacity) {
    this.set.push([]);
    this.currentStack++;
    this.set[this.currentStack].push(val);
  } else {
    this.set[this.currentStack].push(val);
  }
};

SetOfStacks.prototype.pop = function() {
  if (this.set[this.currentStack].length) {
    return this.set[this.currentStack].pop();
  } else {
    this.set.pop();
    this.currentStack--;
    return this.set[this.currentStack].pop();
  }
}

SetOfStacks.prototype.showStacks = function() {
  console.log(this.set);
}

SetOfStacks.prototype.popAt = function(index) {
  return this.set[index].pop();
}

let stackSet = new SetOfStacks(2);

stackSet.push(1);
stackSet.push(2);
stackSet.push(1);
stackSet.push(1);
stackSet.showStacks();
stackSet.pop();
stackSet.pop();
stackSet.showStacks();
stackSet.push(3);
stackSet.push(3);
stackSet.showStacks();
stackSet.popAt(0);
stackSet.showStacks();








