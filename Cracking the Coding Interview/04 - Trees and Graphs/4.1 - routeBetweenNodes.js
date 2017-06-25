// Given a directed graph, deisgn an algorithm to find out whether there is a route between two nodes.

const { Node } = require('./4.0 - TreesAndGraphs.js');

let findPath = (a, b) => {
  if (a === b) { return true; }
  let queue = [];
  let pointer = a;
  while (pointer) {
    if (pointer === b) {
      return true;
    }
    pointer.visited = true;
    pointer.children.forEach((child) => {
      if (!child.visited) {
        queue.push(child);
      }
    })
    pointer = queue.shift();
  }

  return false;
}

let clearVisited = (graphList) => {
  graphList.forEach(node => {
    node.visited = false;
  });
}

let one = new Node(1);
let three = one.addChildVal(3);
let four = one.addChildVal(4);
let six = three.addChildVal(6);
let five = four.addChildVal(5);
six.addChildNode(five);
let two = five.addChildVal(2);
two.addChildNode(four);
let seven = six.addChildVal(7);
seven.addChildNode(six);
let eight = seven.addChildVal(8);
eight.addChildNode(seven);
let nine = new Node(9);

let graph = [one, two, three, four, five, six, seven, eight, nine];

console.log(findPath(four, one));
