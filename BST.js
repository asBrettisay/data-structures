function BST() {
  const BST = {
    root: null
  }

  function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  function insertNode(val) {
    currentNode = BST.root;

    while(currentNode) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new Node(val);
          break;
        }
        currentNode = currentNode.left;
      } else if (val >= currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = new Node(val);
          break;
        }
        currentNode = currentNode.right
      }
    }
  }

  return {
    push(val) {
      if (!BST.root) {
        BST.root = new Node(val);
      } else {
        insertNode(val);
      }
    },
    show() {
      console.log(BST);
      return BST.root;
    }
  }
}

const myTree = new BST();


myTree.push(2);
myTree.push(4);
myTree.push(6);
myTree.push(8);

console.log(myTree.show());
