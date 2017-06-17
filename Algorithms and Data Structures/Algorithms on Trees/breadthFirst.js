var breadthFirstTraversal = function(tree, queue, results) {
  if (!tree) {
    return results;
  }
  queue = queue || []
  results = results || [];
  results.push(tree.val);
  queue.push(tree.left);
  queue.push(tree.right);
  return breadthFirstTraversal(queue.shift(), queue, results);
}

var breadthFirstSearch = function(tree, target, queue) {
  if (!tree) {
    return null;
  }
  if (tree.val === target) {
    return tree;
  }

  queue = queue || [tree.left, tree.right];
  queue.push(tree.left);
  queue.push(tree.right);
  return breadthFirstSearch(queue.shift(), target, queue);
}

var tree = populateTree();
var traversal = breadthFirstTraversal(tree);
console.log(traversal);

var search = breadthFirstSearch(tree, 23);
console.log(search);

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

function populateTree(flattenedArray) {
  //hardcoded for now
  var rootNode = new TreeNode(25);
  var leftBranch = new TreeNode(15);
  var rightBranch = new TreeNode(35);
  rootNode.left = leftBranch;
  rootNode.right = rightBranch;

  var thirdGen1 = new TreeNode(7);
  var thirdGen2 = new TreeNode(20);
  leftBranch.left = thirdGen1;
  leftBranch.right = thirdGen2;

  var thirdGen3 = new TreeNode(30);
  var thirdGen4 = new TreeNode(45);
  rightBranch.left = thirdGen3;
  rightBranch.right = thirdGen4;

  var fourthGen1 = new TreeNode(2);
  var fourthGen2 = new TreeNode(10);
  thirdGen1.left = fourthGen1;
  thirdGen1.right = fourthGen2;

  var fourthGen3 = new TreeNode(17);
  var fourthGen4 = new TreeNode(23);
  thirdGen2.left = fourthGen3;
  thirdGen2.right = fourthGen4;

  var fourthGen5 = new TreeNode(27);
  var fourthGen6 = new TreeNode(33);
  thirdGen3.left = fourthGen5;
  thirdGen3.right = fourthGen6;

  var fourthGen7 = new TreeNode(40);
  var fourthGen8 = new TreeNode(50);
  thirdGen4.left = fourthGen7;
  thirdGen4.right = fourthGen8;

  //Create a complete tree (populate left to right, children might be uneven)
  //Not a full tree (every node other than the last gen/leaf nodes has two children)
  var fifthGen1 = new TreeNode(1);
  fourthGen1.left = fifthGen1;

  return rootNode;
};

