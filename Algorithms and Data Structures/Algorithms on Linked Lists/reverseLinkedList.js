let { LinkedList } = require('./LinkedList.js');

let reverseLinkedList = (node) => {
  if (!(node && node.next)) {
    return node;
  }
  let result = reverseLinkedList(node.next);
  node.next.next = node;
  node.next = null
  return result;
}

let l = new LinkedList(1);
l.push(2);
l.push(3);
l.push(4);
l.push(5);
l.push(6);
l.push(7);
l.push(8);
l.push(9);
l.push(10);

let resultHead = reverseLinkedList(l.getHead());
let i = 10;
while(resultHead && i > 0) {
  console.assert(resultHead.val === i);
  resultHead = resultHead.next;
  i--;
}