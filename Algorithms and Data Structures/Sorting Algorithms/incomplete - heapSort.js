class Heap {
  constructor(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }

  push(val) {
    this.content.push(val);
    this.bubbleUp(this.content.length - 1);
  }

  pop() {
    let removed = this.content[0];
    let end = this.content.pop();
    if (this.content.length > 0) {
      this.content[0] = end;
      this.sinkDown(0);
    } 

    return removed;
  }

  remove(node) {
    for (let i = 0; i < this.content.length; i++) {
      if (this.content[i] != node) { continue; }
      let end = this.content.pop();
      if (i === this.content.length - 1) { break; }
      this.content[i] = end;
    }
  }

  size() {
    return this.content.length;
  }

  bubbleUp(n) {
    let element = this.content[n];
    let score = this.scoreFunction(element);
    while (n > 0) {
      let parentN = Math.floor((n + 1) / 2) - 1;
      let parent = this.content[parentN];
      if (score >= this.scoreFunction(parent)) { break; }
      this.content[n] = parent;
      this.content[parentN] = element;
    }
  }

  sinkDown(n) {
    console.log('hello');
  }
};

let minHeap = new Heap(function(x) { return x; });
minHeap.push(5);

let collect = 0;
for (let i = 1; i <= 26; i++) {
  collect += i;
}

collect -= (15 + 21);

console.log(collect);
console.log(15*21);