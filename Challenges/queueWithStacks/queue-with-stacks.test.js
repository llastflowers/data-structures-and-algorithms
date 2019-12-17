const { PseudoQueue } = require('./queue-with-stacks');

describe('PseudoQueue Class', () => {
    it('adds a new node to the pseudoqueue', () => {
        const pseudoqueue = new PseudoQueue;
        pseudoqueue.enqueue(20);
        pseudoqueue.enqueue(15);
        pseudoqueue.enqueue(10);
        expect(pseudoqueue.toString()).toEqual('5 -> 10 -> 15 -> 20');
    });
});