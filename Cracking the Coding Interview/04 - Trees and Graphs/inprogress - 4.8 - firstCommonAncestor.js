// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing 
// additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

let { BinaryTree } = require('./4.0 - TreesAndGraphs.js');

// book solution: doesn't work?
let firstCommonAncestor = (root, a, b) => {
  let result = commonAncestorHelper(root, a, b);
  if (result.isAncestor) {
    return result.node;
  } else {
    return null;
  }
}

let commonAncestorHelper = (root, a, b) => {
  if (!root) { 
    return { node: null, isAncestor: false }; 
  }
  if (root === a && root === b) {
    return { node: root, isAncestor: true };
  }

  let left = commonAncestorHelper(root.left, a, b);
  if (left.isAncestor) { return left; }
  let right = commonAncestorHelper(root.right, a, b);
  if (right.isAncestor) { return right; }

  if (left.node !== null && right.node !== null) {
    return { node: root, isAncestor: true }; 
  } else if (root === a || root === b) {
    let isAncestor = left.node !== null || right.node !== null;
    return { node: root, isAncestor: isAncestor};
  } else {
    return { node: root, isAncestor: false };
  }
}

let tree = new BinaryTree('a');
let b = tree.addChildVal('b', 'left');
let c = tree.addChildVal('c', 'right');
let d = b.addChildVal('d', 'left');
let e = b.addChildVal('e', 'right');
let f = c.addChildVal('f', 'left');
let g = c.addChildVal('g', 'right');
let h = d.addChildVal('h', 'left');
let i = d.addChildVal('i', 'right');
let j = e.addChildVal('j', 'left');
let k = e.addChildVal('k', 'right');
let l = f.addChildVal('l', 'left');
let m = f.addChildVal('m', 'right');
let n = g.addChildVal('n', 'left');
let o = g.addChildVal('o', 'right');
let p = new BinaryTree('p');

// console.log(breadthFirstSearch(b, f));
console.log(firstCommonAncestor(tree, b, c));


/* Hints:

- If each node has a link to its parent, we could leverage the approach from question 2.7 on page 95. However,our interviewer 
might not let us make this assumption.
- The first common ancestor is the deepest node such that p and q are both decendants. Think about how you might identify 
this node.
- How would you figure out if p is a descendent of a node n? 
- Start with the root. Can you identify if root is the first common ancestor? If it is not, can you identify which side 
of root the first common ancestor is on?
- Try a recursive approach. Check if p and q are descendants of the left subtree and the right subtree. If they are 
decendants of different subtrees, then the current node is the first common ancestor. If they are descendants of the same 
subtree, then that subtree holds the first common ancestor. Now, how do you implement this efficiently?
- In a more naive algorithm, we had one method that indicated if x is a descendent of n, and another method that would 
recurse to find the first common ancestor. This is repeatedly searching the same elements in a subtree. We should merge 
this into one firstCommonAncestor function. What return values would give us the information we need?
- The firstCommonAncestor function could return the first common ancestor (if p and q are both contained in the tree), 
p if p is in the tree and not q, q if q is in the tree and not p, and null otherwise.

*/

// function firstCommonAncestor(root, a, b) {
//   let leftA = breadthFirstSearch(root.left, a);
//   let leftB = breadthFirstSearch(root.left, b);
//   let rightA = breadthFirstSearch(root.right, a);
//   let rightB = breadthFirstSearch(root.right, b);
//   if (leftA && leftB) {
//     return firstCommonAncestor(root.left, a, b);
//   } else if (rightA && rightB) {
//     return firstCommonAncestor(root.right, a, b);
//   } else {
//     return root;
//   }
// }

// function breadthFirstSearch(root, node) {
//   let queue = [root];
//   while(queue.length) {
//     let n = queue.shift();
//     if (n === node) {
//       return true;
//     }
//     if (n.left) {
//       queue.push(n.left);
//     }
//     if (n.right) {
//       queue.push(n.right);
//     }
//   }
//   return false;
// }