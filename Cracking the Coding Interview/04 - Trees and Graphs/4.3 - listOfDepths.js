// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth 
// (e.g., If you have a tree with depth D, you'll have D linked lists).

let { BinaryTree } = require('./4.0 - TreesAndGraphs.js');
let { LinkedList } = require('../02 - Linked Lists/2.0 - LinkedList.js');

// Breadth first
// Book solution
let listOfDepths = (tree) => {
  let current = new LinkedList(tree);
  let results = [];
  let pointer;
  while(pointer = current.getHead()) {
    results.push(current);
    current = new LinkedList();
    while(pointer) {
      if (pointer.val.left) {
        current.push(pointer.val.left);
      }
      if (pointer.val.right) {
        current.push(pointer.val.right);
      }
      pointer = pointer.next;
    }
  }

  return results;
}


// Depth first
// let listOfDepths = (tree, list = [], depth = 0) => {
//   if (!tree) { 
//     return list; 
//   }

//   if (!list[depth]) {
//     list[depth] = new LinkedList(tree);
//   } else {
//     list[depth].push(tree);
//   }
//   listOfDepths(tree.left, list, depth + 1);
//   listOfDepths(tree.right, list, depth + 1);

//   return list;
// }


let arrayToBinaryTree = (array, start = 0, end = array.length - 1) => {
  if (start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);
  let root = new BinaryTree(array[mid]);
  root.left = arrayToBinaryTree(array, start, mid - 1);
  root.right = arrayToBinaryTree(array, mid + 1, end);
  return root;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8];
let tree = arrayToBinaryTree(a);

let results = listOfDepths(tree);
console.log(results);

let pointer = results[3].getHead();
while(pointer) {
  console.log(pointer.val.val);
  pointer = pointer.next;
}

/* Hints:

- Try modifying a graph search algorithm to track the depth from the root.
- A hash table or array that maps from level number to nodes at that level might also be useful.
- You should be able to come up with an algorithm that involves both depth first and breadth first search.

*/

// Breadth first
// own solution
/*
let listOfDepths = (tree) => {
  let rootList = new LinkedList(tree);
  let results = [];
  results.push(rootList);
  let i = 0;
  let pointer = rootList.getHead();
  while(pointer) {
    if (!results[i + 1]) {
      results[i + 1] = new LinkedList();
    }

    if (pointer.val) {
      if (pointer.val.left) {
        results[i + 1].push(pointer.val.left);
      }
      if (pointer.val.right) {
        results[i + 1].push(pointer.val.right);
      }
    }

    if (pointer.next) {
      pointer = pointer.next;
    } else {
      pointer = results[i + 1].getHead();
      i++;
    }
  }

  results.pop();
  return results;
}
*/





