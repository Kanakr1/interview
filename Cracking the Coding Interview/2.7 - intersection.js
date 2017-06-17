// Given two singly linked lists, determine if the two lists intersect. Return the intersecting node. Note that the 
// intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the 
// exact same node (by reference) as the jth node of the second linked list, then they are interescting. 

let { LinkedList } = require('./2.0 - LinkedList.js');

let intersection = (head1, head2) => {
  let length1 = 0;
  let length2 = 0;
  let pointer1 = head1;
  let pointer2 = head2;
  while (pointer1 || pointer2) {
    if (pointer1) {
      length1++;
      pointer1 = pointer1.next;
    }
    if (pointer2) {
      length2++;
      pointer2 = pointer2.next;
    }
  }

  pointer1 = head1;
  pointer2 = head2;
  let difference;
  if (length1 > length2) {
    difference = length1 - length2;
    while (difference) {
      pointer1 = pointer1.next;
      difference--;
    }
  } else {
    difference = length2 - length1;
    while (difference) {
      pointer2 = pointer2.next;
      difference--;
    }
  }

  while (pointer1) {
    if (pointer1 === pointer2) {
      return pointer1;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return null;
}

let listA = new LinkedList(1);
listA.push(2);
listA.push(3);
listA.push(4);
listA.push(6);
listA.push(7);
listA.push(8);
listA.push(9);
listA.push(11);
listA.push(12);
listA.push(13);
let intersect = listA.push(5);

let listB = new LinkedList(10);
listB.push(20);
listB.push(30);
listB.push(40);
listB.pushNode(intersect);
listB.push(60);
listB.push(70);
listB.push(80);
listB.push(90);

let resultNode = intersection(listA.getHead(), listB.getHead());
console.log(resultNode);
/* Hints: 

- You can do this in O(A + B) time and O(1) additional space. That is, you do not need a hash table 
(although you could do it with one).
- Examples will help you. Draw a picture of intersecting linked lists and two equivalent linked lists (by value) that
do not intersect.
- Focus first on identifying if there is an intersection.
- Observe that two intersecting linked lists will always have the same last node. Once they intersect, 
all the nodes after taht will be equal
- You can determine if two linked lists intersect by traversing to the end of each and comparing their tails
- Now you need to find where the linked lists intersect. Suppose the linked lists were the same length. 
How could you do this?
- If the two linked lists were the same length, you could traverse forward in each until you found an element in 
common. Now, how do you adjust this for lists of different lengths?
- Try using the difference in length between the two linked lists

*/

// O(A + B) time + space
// let stack1 = [];
// let stack2 = [];
// let pointer1 = head1;
// let pointer2 = head2;
// while (pointer1 || pointer2) {
//   if (pointer1) {
//     stack1.push(pointer1);
//     pointer1 = pointer1.next;
//   }
//   if (pointer2) {
//     stack2.push(pointer2);
//     pointer2 = pointer2.next;
//   }
// }
// let intersectingNode;
// while(true) {
//   let tail1 = stack1.pop();
//   let tail2 = stack2.pop();
//   if (tail1 === tail2) {
//     intersectingNode = tail1;
//   } else {
//     break;
//   }
// }
// return intersectingNode;