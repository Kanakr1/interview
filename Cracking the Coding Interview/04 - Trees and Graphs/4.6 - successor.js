// Write an algorithm to find the 'next' node (i.e., in-order successor) of a given node in a binary search tree. 
// You may assume that each node has a link to its parent.

let { BinaryTree } = require('./4.0 - TreesAndGraphs.js');

// Book solution
function inOrderSuccessor(treeNode) {
  if (treeNode === null) {
    return null;
  }

  if (treeNode.right !== null) {
    return leftMostNode(treeNode.right);
  } else {
    let pointer = treeNode;
    let parent = pointer.parent;
    while (parent && parent.left !== pointer) {
      pointer = parent;
      parent = parent.parent;
    }

    return parent;
  }
}

function leftMostNode(n) {
  if (n === null) {
    return null;
  }
  while (n.left !== null) {
    n = n.left;
  }

  return n;
}

let tree = new BinaryTree(4);
let two = tree.addChildVal(2, 'left', true);
let six = tree.addChildVal(6, 'right', true);
let one = two.addChildVal(1, 'left', true);
let three = two.addChildVal(3, 'right', true);
let five = six.addChildVal(5, 'left', true);
let seven = six.addChildVal(7, 'right', true);
let eight = seven.addChildVal(8, 'right', true);

console.log(inOrderSuccessor(eight));

/* Hints: 

- Think about how an in order traversal works and try to reverse engineer it
- Here's one step of the logic: The successor of a specific node is the leftmost node of the right subteee. What if there 
is no right subtree, though?

*/

// Own solution: flawed - does not account for getting left most node of right tree, 
// doesn't account for when it's the last node
// let inOrderSuccessor = (treeNode) => {
//   let parent = treeNode.parent;
//   if (!parent) {
//     return treeNode.right;
//   }

//   if (parent.left === treeNode) {
//     return parent;
//   } else if (treeNode.right) {
//     return treeNode.right;
//   } else {
//     return inOrderSuccessor(parent);
//   }
// }