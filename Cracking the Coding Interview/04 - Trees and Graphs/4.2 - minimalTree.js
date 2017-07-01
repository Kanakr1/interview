// Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree 
// with minimal height.
let { BinaryTree } = require('./4.0 - TreesAndGraphs.js');

let minimalTree = (array, start = 0, end = array.length - 1) => {
  if (start > end) {
    return null;
  }

  let mid = Math.ceil((start + end) / 2);
  let root = new BinaryTree(array[mid]);
  root.left = minimalTree(array, start, mid - 1);
  root.right = minimalTree(array, mid + 1, end);
  return root;
}
module.exports.minimalTree = minimalTree;

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];
let root = minimalTree(sortedArray);
console.log(root.val);
console.log(root.left.val);
console.log(root.right.val);
console.log(root.left.left.val);
console.log(root.left.right.val);
console.log(root.right.left.val);
console.log(root.right.right.val);
console.log(root.left.left.left.val);
// console.log(root.left.left.right.val);
// console.log(root.left.right.left.val);
// console.log(root.left.right.right.val);
console.log(root.right.l eft.left.val);
// console.log(root.right.left.right.val);
// console.log(root.right.right.left.val);
// console.log(root.right.right.right.val);

/* Hints: 

- A minimal binary tree has about the same number of nodes on the left of each node as on the right. Let's focus on just 
the root for now. How would you ensure that about the same number of nodes are on the left of the root as on the right? 
- You could implement this by finding the 'ideal' next element and repeatedly calling insertValue. This will be a bit 
inefficient, as you would have to repeatedly traverse the tree. Try recursion instead. Can you divide this problem into 
subproblems?
- Imagine we had a createMinimalTree method that returns a minimal tree of a given array (but for some strange reason 
doesn't operate on the root of the tree). Could you use this to operate on the root of the tree? Could you write the 
base case for the function? Great! Then that's basically the entire function.

*/

// let minimalTree = (array, start = 0, end = array.length - 1, parentNode) => {
//   if (start > end) {
//     return;
//   }

//   let mid = Math.floor((start + end) / 2);

//   if (!parentNode) {
//     parentNode = new BinaryTree(array[mid]);
//   }

//   let left = Math.floor((start + mid - 1) / 2);
//   let leftNode = parentNode.addChildVal(array[left], 'left');
//   minimalTree(array, start, mid - 1, leftNode);

//   let right = Math.floor((mid + 1 + end) / 2);
//   let rightNode = parentNode.addChildVal(array[right], 'right');
//   minimalTree(array, mid + 1, end, rightNode);

//   return parentNode;
// }
