const { BinarySearchTree } = require('./tree');

describe('Binary Tree', () => {
  it('Can successfully instantiate an empty tree', () => { const tree = new BinarySearchTree();
    expect(tree).toBeNull;
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree();
    tree.add(5);
    expect(tree.root).toEqual({ 'leftChild': null, 'rightChild': null, 'value': 5 });
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    expect().toEqual();
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    expect().toEqual();
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    expect().toEqual();
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    expect().toEqual();
  });
});
