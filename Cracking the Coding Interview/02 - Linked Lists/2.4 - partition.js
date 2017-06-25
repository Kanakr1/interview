// Write code to partition a linked list around a value x, such that all nodes less than x come 
// before all nodes greater than or equal to x. If x is contained within the list, the values of x 
// only need to be after the elements less than x (see below). The partiition element x can appear 
// anywhere in the 'right partition',; it does not need to appear between the left and right partitions.

// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1, partition 5
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

let { LinkedList } = require('./2.0 - LinkedList.js');

let partition = (list, partitionValue) => {
  let head = list.getHead();
  let lowerHead, lowerTail;
  let higherHead, higherTail;
  while (head) {
    if (head.val < partitionValue) {
      if (!lowerHead) {
        lowerHead = head;
        lowerTail = head;
        head = head.next;
        continue;
      }
      lowerTail.next = head;
      lowerTail = lowerTail.next;
    } else {
      if (!higherHead) {
        higherHead = head;
        higherTail = head;
        head = head.next;
        continue;
      } 
      higherTail.next = head;
      higherTail = higherTail.next;
    }
    head = head.next;
  }
  higherTail.next = null;
  lowerTail.next = higherHead;
  return lowerHead;
}

let list = new LinkedList(1);
list.push(5);
list.push(8);
list.push(9);
list.push(3);
list.push(10);
list.push(-1);
list.push(2);
list.push(40);
list.push(25);
list.push(2);

let x = 11;
let newHead = partition(list, x);
let lowerThanX = true;
while(newHead) {
  if (newHead.val < x) {
    console.assert(newHead.val < x && lowerThanX)
  } else {
    lowerThanX = false;
    console.assert(newHead.val >= x);
  }
  newHead = newHead.next;
}

// Initial Implementation
// let lowerThan = {};
// let greaterEqualThan = {};

// while(head) {
//   if (head.val < partitionValue) {
//     lowerThan[head.val] = head;
//   } else {
//     greaterEqualThan[head.val] = head;
//   }

//   head = head.next;
// }

// let newHead, pointer;
// for (let node in lowerThan) {
//   if (!newHead) { 
//     newHead = lowerThan[node];
//     pointer = lowerThan[node];
//   }
//   console.log(node);
//   pointer.next = lowerThan[node];
//   pointer = pointer.next;
// }

// for (let node in greaterEqualThan) {
//   pointer.next = greaterEqualThan[node];
//   pointer = pointer.next;
// }
// pointer.next = null;
// return newHead;