var TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
};

var populateTree = (flattenedArray) => {
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

var depthFirstTraversal = (rootNode) => {
  var results = [];

  if (!rootNode.left) { //BSN are always 
    // console.log('At node: ', rootNode.val); 
    return rootNode.val; 
  } else {
    // console.log('At node: ', rootNode.val);
    results = results.concat(depthFirstTraversal(rootNode.left));
    // console.log('first concat: ', results);
    results.push(rootNode.val);
    // console.log('pushed current node valuee: ', results);
    if (rootNode.right) {
      results = results.concat(depthFirstTraversal(rootNode.right));
    }
    // console.log('second concat: ', results);
  }

  return results;
};

var breadthFirstTraversal = (rootNode, queue) => {
  var results = [];
  queue = queue || [];

  if (false) {}

  return results;
}

// Solve it using O(n) space.
// Solve it using O(1) space, but with no other constraints imposed.
// Solve it using O(1) space, but with a completely self-contained recursive function -- 
//   no references to any data stored outside of that function, no helper functions, etc.
var kthSmallest = (root, k) => {
  var smallestArray = smallestArray || [];
  var pointer = root;
  var traversalStack = [pointer];
  var smallestFound = false;
  while (pointer) {
    traversalStack.push(pointer.left);
    traversalStack.push(pointer.right);
    pointer = traversalStack.pop();
  }
  console.log(smallestArray);
  return smallestArray[smallestArray.length - k];
};


var flattenedTree = [25, 15, 35, 7, 20, 30, 45, 2, 10, 17, 23, 27, 33, 40, 50, 1]; // results of a breadth first 
// traversal should be the same
var tree = populateTree(flattenedTree);

console.log('Final depth first result: ', depthFirstTraversal(tree));
console.log('Final breadth first result: ', breadthFirstTraversal(tree));

















