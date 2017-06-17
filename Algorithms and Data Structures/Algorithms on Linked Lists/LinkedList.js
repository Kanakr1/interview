class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  push(val) {
    let n = new Node(val);
    this.tail.next = n;
    this.tail = this.tail.next;
  }

  removeHead() {
    this.head = this.head.next;
  }

  getHead() {
    return this.head;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports.LinkedList = LinkedList;