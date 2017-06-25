// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, 
// not necessarily the exact middle) of a singly linked list, given only access to that node

let { LinkedList } = require('./2.0 - LinkedList.js');

let deleteMiddleNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
}

let list = new LinkedList(1);
list.push(2);
list.push(3);
list.push(4);
let toRemove = list.push(5);
list.push(6);
list.push(7);
list.push(8);

deleteMiddleNode(toRemove);

let pointer = list.getHead();
let i = 1;
while(pointer) {
  if (i !== 5) {
    console.assert(pointer.val === i);
    pointer = pointer.next;
  }
  i++;
}