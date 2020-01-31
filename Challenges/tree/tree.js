class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
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
          if(node.left === null) {
            node.left = new Node(value);
            return;
          } else if(node.left !== null) {
            return addNode(node.left);
          }
        } else if(value > node.value) {
          if(node.right === null) {
            node.right = new Node(value);
            return;
          } else if(node.right !== null) {
            return addNode(node.right);
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
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = { Node, BinarySearchTree };
