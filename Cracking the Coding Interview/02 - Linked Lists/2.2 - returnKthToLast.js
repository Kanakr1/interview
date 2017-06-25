// Implement an algorithm to find the kth to last element of a singly linked list
let { LinkedList } = require('./2.0 - LinkedList.js');

let returnKthToLast = (list, k) => {
  if (list === null || k < 1) { return null; }
  // Before hints
  // let listArray = [];
  // let pointer = list.getHead();
  // while (pointer) {
  //   listArray.push(pointer);
  //   pointer = pointer.next;
  // }
  // let index = listArray.length - k;
  // return listArray[index].val;

  // Recursively - Book
  let kthRecurse = (node, k, counter) => {
    if (!node) {
      return 0;
    }
    let pointer = kthRecurse(node.next, k, counter);
    counter[0]++;
    if (counter[0] === k) {
      return node.val;
    }
    return pointer;
  }
  let n = list.getHead();
  let result = kthRecurse(n, k, [0]);
  return result;

  // Iteratively - Using last hint
  // let kthPointer = endPointer = list.getHead();
  // while (endPointer) {
  //   if (k === 0) {
  //     kthPointer = kthPointer.next;
  //   } else {
  //     k--;
  //   }
  //   endPointer = endPointer.next
  // }
  // return kthPointer.val;
}

let list = new LinkedList(1);
for (let i = 2; i <= 10; i++) {
  list.push(i);
}

console.assert(returnKthToLast(list, 2) === 9);
console.assert(returnKthToLast(list, 6) === 5);
console.assert(returnKthToLast(list, 9) === 2);

/* Hints: 

- What if you knew the linked list size? What is the difference between finding the Kth-to-last element 
and finding the Xth element?

- If you don't know the linked list size, can you computer it? How does this impact the runtime?

- Try implementing it recursively. If you could find the (K - 1)th to last element, can you find the Kth element?

- You might find it useful to return multiple values. Some languages don't directly support this, but there are 
workarounds in essentially any language. What are some of those workarounds?

- Can you do it iteratively? Imagine if you had two pointers pointing to adjacent nodes and they were moving 
at the same speed through the linked list. When one hits the end of the linked list, where will the other be?

*/