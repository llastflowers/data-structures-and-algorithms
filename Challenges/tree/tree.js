class Node {
  constructor(value, leftChild = null, rightChild = null){
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree {
  constructor(){

  }

  preOrder(){

  }

  inOrder(){

  }

  postOrder(){

  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  add(value) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(value);
      return;
    } else {
      const addNode = function(node) {
        if(value < node.value) {
          if(node.leftChild === null) {
            node.leftChild = new Node(value);
            return;
          } else if(node.leftChild !== null) {
            return addNode(node.leftChild);
          }
        } else if(value > node.value) {
          if(node.rightChild === null) {
            node.rightChild = new Node(value);
            return;
          } else if(node.rightChild !== null) {
            return addNode(node.rightChild);
          }
        } else {
          return null;
        }
      };
      return addNode(node);
    }
  }

  contains(value){
    let current = this.root;
    while(current) {
      if(value === current.value) {
        return true;
      }
      if(value < current.value) {
        current = current.leftChild;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = { Node, BinarySearchTree };
