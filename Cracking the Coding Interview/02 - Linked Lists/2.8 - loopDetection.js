// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

let { LinkedList } = require('./2.0 - LinkedList.js');

function loopDetection(list) {
  let slowPointer = list;
  let fastPointer = list.next;
  while (true) {
    if (!(fastPointer && fastPointer.next)) {
      return null;
    }
    if (slowPointer === fastPointer) {
      break;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  let countStart = slowPointer;
  let counter = 0;
  do {
    slowPointer = slowPointer.next;
    counter++;
  } while (slowPointer !== countStart);
  counter = Math.floor(counter / 2);
  counter++;
  while (counter) {
    countStart = countStart.next;
    counter--;
  }

  return countStart;
}

let listA = new LinkedList(1);
listA.push(2);
listA.push(3);
listA.push(4);
let loop = listA.push(5);
listA.push(6);
listA.push(7);
listA.push(8);
listA.push(9);
listA.push(10);
listA.push(11);
listA.push(12);
listA.push(13);
listA.pushNode(loop);

let result = loopDetection(listA.getHead());
console.log(result);