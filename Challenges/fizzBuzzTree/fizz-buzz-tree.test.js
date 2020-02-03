const { Tree } = require('../tree/tree.js');
const { FizzBuzzTree } = require('./fizz-buzz-tree.js');

describe('FizzBuzzTree', () => {
  it('makes fizzbuzz tree', () => {
    const tree = new Tree();
    tree.add(6);
    tree.add(2);
    tree.add(9);
    tree.add(15);
    tree.add(4);
    tree.add(63);
    tree.add(8);
    const newTree = FizzBuzzTree(tree);
    expect(newTree.inOrder()).toEqual([]);
  });
});
