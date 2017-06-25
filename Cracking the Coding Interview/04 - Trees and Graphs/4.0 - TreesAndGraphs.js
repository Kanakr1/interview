class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }

  addChildVal(val, linkParent) {
    let child = new Node(val);
    return this.addChildNode(child, linkParent);
  }

  addChildNode(node, linkParent) {
    if (linkParent) {
      node.parent = this;
    }
    this.children.push(node);
    return node;
  }

  logValue() {
    console.log(this.val);
  }

  logChildren() {
    console.log(this.children);
  }
}

class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  addChildVal(val, branch, linkParent) {
    let child = new BinaryTree(val);
    return this.addChildNode(child, branch, linkParent);
  }
  
  addChildNode(node, branch, linkParent) {
    if (linkParent) {
      node.parent = this;
    }

    if (branch === 'left') {
      this.left = node;
    } else {
      this.right = node;
    }

    return node;
  }
}

module.exports.Node = Node;
module.exports.BinaryTree = BinaryTree;

