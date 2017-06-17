// Write code to remove duplicates from an unsorted linked list. O(n)
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed? O(n^2)
//  - Use 2 pointers: current comparison and a while loop to determine what current.next should be (like below)

let { LinkedList } = require('./2.0 - LinkedList.js');

let removeDups = (list) => {
  let currentNode = list.getHead();
  let nextNode = currentNode.next;
  let dupTable = {};

  while (currentNode) {
    dupTable[currentNode.val] = currentNode.val;
    while (nextNode) {
      if (dupTable.hasOwnProperty(nextNode.val)) {
        nextNode = nextNode.next;
      } else {
        break;
      }
    }
    currentNode.next = nextNode;
    currentNode = currentNode.next;
    if (currentNode) {
      nextNode = currentNode.next;
    }
  }

  return list;
}

let list = new LinkedList(1);
list.push(1);
list.push(6);
list.push(1);
list.push(3);
list.push(3);
list.push(6);
list.push(1);
list.push(4);
list.push(2);
list.push(10);
list.push(2);
list.push(8);
list.push(5);
list.push(1);
list.push(7);
list.push(9);
list.push(9);
list.push(7);
list.push(10);


removeDups(list);
let pointer = list.getHead();
let i = 0;
let expectedResult = [1, 6, 3, 4, 2, 10, 8, 5, 7, 9];
while (pointer) {
  console.assert(pointer.val === expectedResult[i]);
  i++;
  pointer = pointer.next;
}

