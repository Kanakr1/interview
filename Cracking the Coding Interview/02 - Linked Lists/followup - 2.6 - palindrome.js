// Implement a function to check if a linked list is a palindrome

let { LinkedList } = require('./2.0 - LinkedList.js');

let palindrome = (node) => {
  let slowPointer = node;
  let fastPointer = slowPointer.next;
  let stack = [];
  let evenFlag = false;
  while (fastPointer) {
    stack.push(slowPointer.val);
    slowPointer = slowPointer.next;
    if (fastPointer.next) {
      fastPointer = fastPointer.next.next;
    } else {
      evenFlag = true;
      fastPointer = fastPointer.next;
    }
  }

  if (!evenFlag) {
    slowPointer = slowPointer.next;
  }

  while (slowPointer) {
    if (slowPointer.val !== stack.pop()) {
      return false;
    }
    slowPointer = slowPointer.next;
  }
  return true;
}

let palindromeRecurse = (node, length, head) => {
  // TODO: fill me out
}

// Need to make a new linked list before this works
let reverseLinkedList = (node) => {
  if (node.next === null) {
    return node;
  }
  let result = reverseLinkedList(node.next);
  node.next.next = node;
  node.next = null;
  return result;
}

let list = new LinkedList('r');
list.push('a');
list.push('c');
list.push('e');
list.push('c');
list.push('a');
list.push('r');

let result = palindrome(list.getHead());
console.assert(result);

let list2 = new LinkedList('r');
list2.push('a');
list2.push('c');
list2.push('e');
list2.push('c');
list2.push('a');
list2.push('r');
list2.push('r');

result = palindrome(list2.getHead());
console.assert(!result);

/* Hints: 

- A palindrome is something which is the same when written forwards and backwards. What if you reversed the linked list?
- Try using a stack
- Assume you have the length of the linked list. Can you implement it recursively? 
- In the recursive approach (we have the length of the list), the middle is the base case: isPermutation(middle) is true.
The node x to the immediate left of the middle: What can that node do to check if x -> middle -> y forms a palindrome? 
Now suppose that checks out. What about the prevous node a? If x -> middle -> y is a palindrome, how can it check that 
a -> x -> middle -> y -> b is a palindrome?
- Go back to the previous hint. Remember, there are ways to return multiple values. You can do this with a new class.

*/

