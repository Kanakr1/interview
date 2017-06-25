// You have two numbers represented by a linked list, where each node contains a single digit. The digits are sorted 
// in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers 
// and returns the sum as a linked list.

// Example

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). 617 + 295
// Output: (2 -> 1 -> 9). 912

// Follow up: 
// Suppose the digits are stored in forward order. Repeat the above problem.

// Example: 
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). 617 + 295
// Output: (9 -> 1 -> 2). 912

let { LinkedList } = require('./2.0 - LinkedList.js');

let sumReverseLists = (a, b, carry, sum) => {
  carry = carry || 0;
  if (!(a || b)) {
    if (carry) {
      sum.push(carry);
    }
    return sum;
  }

  let aVal, bVal, aNext, bNext;
  if (a) {
    aVal = a.val;
    aNext = a.next;
  } else {
    aVal = 0;
    aNext = null;
  }

  if (b) {
    bVal = b.val;
    bNext = b.next;
  } else {
    bVal = 0;
    bNext = null;
  }

  let digit = aVal + bVal + carry;
  carry = 0;
  if (digit > 9) {
    digit = digit % 10;
    carry = 1;
  }
  if (!sum) {
    sum = new LinkedList(digit);
  } else {
    sum.push(digit);
  }

  return sumReverseLists(aNext, bNext, carry, sum);
}

if (Array.prototype.equals)
  console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;

  // compare lengths - can save a lot of time 
  if (this.length != array.length)
    return false;

  for (var i = 0, l=this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;       
    }           
    else if (this[i] != array[i]) { 
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;   
    }           
  }       
  return true;
}

let numOne = new LinkedList(7);
numOne.push(1);
numOne.push(6);

let numTwo = new LinkedList(5);
numTwo.push(9);
numTwo.push(2);

let result = sumReverseLists(numOne.getHead(), numTwo.getHead());
let head = result.getHead();
let answer = [];
while (head) {
  answer.push(head.val);
  head = head.next;
}

console.assert(answer.equals([2, 1, 9]));

let numThree = new LinkedList(1);
numThree.push(5);
numThree.push(9);

let numFour = new LinkedList(2);
numFour.push(3);
numFour.push(6);
numFour.push(7);

result = sumReverseLists(numThree.getHead(), numFour.getHead());
head = result.getHead();
answer = [];
while (head) {
  answer.push(head.val);
  head = head.next;
}

console.assert(answer.equals([3, 8, 5, 8])); 

let numFive = new LinkedList(9);
numFive.push(7);
numFive.push(8);

let numSix = new LinkedList(6);
numSix.push(8);
numSix.push(5);

result = sumReverseLists(numFive.getHead(), numSix.getHead());
head = result.getHead();
answer = [];
while (head) {
  answer.push(head.val);
  head = head.next;
}

console.assert(answer.equals([5, 6, 4, 1])); 

/* Hints: 

- Of course, you could convert the linked lists to integers, compute the sum, and then convert it back to a 
new linked list. If you did this in an interview, your interviewer would likely accept the answer, and then 
see if you could do this without converting it to a number and back.

- Try recursion. Suppose you have two lists, A = 1 -> 5 -> 9 (951) and B = 2 -> 3 -> 6 -> 7 (7632), and a 
function that operates on the remainder of the lists (5 -> 9 and 3 -> 6 -> 7). Could you use this to create 
the sum method? What is the relationsihp between sum (1 -> 5 -> 9, 2 -> 3 -> 6 -> 7) and sum (5 -> 9, 3 -> 6 -> 7)?

- Make sure you have considered linked lists that are not the same length

- Does your algorithm work on linked lists like (9 -> 7 -> 8) and (6 -> 8 -> 5)? Double check that.

- For the follow up question: The issue is that when the linked lists aren't the same length, the head of one linked list 
might represent the 1000's place while the other represents the 10's place. What if you made them the same length? Is 
there a way to modify the linked list to do that, without changing the value it represents?

*/

/* Naive solution
let numToReverseLinkedList = (num) => {
  let divisor = 10;
  let result = new LinkedList();

  while (num > 10) {
    let digit = num % divisor;
    num -= digit;
    digit /= (divisor / 10);
    result.push(digit);
    divisor *= 10;
  }
  return result;
}

let reverseOrderListToNum = (pointer, multiplier = 1, num = 0) => {
  if (pointer === null) { return num; }
  num += pointer.val * multiplier;
  return reverseOrderListToNum(pointer.next, multiplier * 10, num);
}
*/
