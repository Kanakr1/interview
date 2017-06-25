// Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is 
// defined to a be a tree such that the heights of the two subtrees of any node never differ by more than one.

let { BinaryTree } = require('./4.0 - TreesAndGraphs.js');

function checkBalanced(tree) {
  if (!tree) {
    return null;
  }
  if (Math.abs(checkHeight(tree.left) - checkHeight(tree.right)) > 1) {
    return false;
  }
  return true;
}

function checkHeight(tree, height = 0) {
  if (!tree) {
    return height;
  }
  let leftHeight = checkHeight(tree.left, height + 1);
  let rightHeight = checkHeight(tree.right, height + 1);
  return Math.max(leftHeight, rightHeight);
}

let tree = new BinaryTree(1);
let two = tree.addChildVal(2, 'left');
let three = tree.addChildVal(3, 'right');
let four = two.addChildVal(4, 'left');
let five = two.addChildVal(5, 'right');
let eight = four.addChildVal(8, 'left');
let nine = four.addChildVal(9, 'right');

console.log(checkBalanced(tree));

/* Hints: 

- Think about the definition of a balanced tree. Can you check that condition for a single node? 
Can you check it for every node?
- If you've developed a brute force solution, be careful about its runtime. If you are computing the height of 
the subtrees for each node, you could have a pretty inefficient algorithm.
- What if you could modify the binary tree node class to allow a node to store the height of its subtree?
- You don't need to modify the binary tree class to store the height of the subtree. Can your recursive function 
compute the height of each subtree while also checking if a node is balanced? Try having the fucntion return multiple values.


*/