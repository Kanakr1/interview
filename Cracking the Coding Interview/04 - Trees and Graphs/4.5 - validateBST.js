// Implement a function to check if a binary tree is a binary search tree.

let { BinaryTree } = require('./4.0 - TreesAndGraphs.js');

let validateBST = (tree) => {
  let traversal = inOrderTraversal(tree);
  for (let i = 1; i < traversal.length; i++) {
    if (traversal[i] < traversal[i - 1]) {
      return false;
    }
  }

  return true;
}

let inOrderTraversal = (tree, result = []) => {
  if (!tree) {
    return result;
  }

  inOrderTraversal(tree.left, result);
  result.push(tree.val);
  inOrderTraversal(tree.right, result);
  return result;
}

let minimalTree = (array, start = 0, end = array.length - 1) => {
  if (start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);
  let root = new BinaryTree(array[mid]);
  root.left = minimalTree(array, start, mid - 1);
  root.right = minimalTree(array, mid + 1, end);
  return root;
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];
let BST = minimalTree(sortedArray);
let nonBST = new BinaryTree(1);
let two = nonBST.addChildVal(2, 'left');
let three = nonBST.addChildVal(3, 'right');
let four = two.addChildVal(4, 'left');
let five = two.addChildVal(5, 'right');
let eight = four.addChildVal(8, 'left');
let nine = four.addChildVal(9, 'right');

console.log(validateBST(nonBST));


/* Hints: 

- If you traversed the tree using an in-order travesal and the elements were truly in the right order, does this 
indicate that the tree is actually in order? What happens for duplicate elements? If duplicate elements are allowed 
they must be on a specific side (usually the left).
- To be a binary search tree, it's not sufficient that he left.value <= current.value < rightfor each node. Every 
node on the left must be less than the current node, which must be less than all the nodes on the right.
- If every node on the left must be less than or equal to the current node, then this is really the same thing as 
saying that the biggest node on the left must be less than or equal to the current node.

*/









