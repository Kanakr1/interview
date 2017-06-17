class LinkedList {
  constructor(headValue) {
    if (!headValue) {
      this.head = null;
    } else {
      this.head = new Node(headValue);
    }
    this.tail = this.head;
  }

  push(val) {
    let n = new Node(val);
    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = this.tail.next;      
    }
    return n;
  }

  pushNode(n) {
    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = this.tail.next;      
    }
    return n;
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