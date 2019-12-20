const { LinkedList, mergeLists } = require('./ll-merge');

describe('LinkedList Class', () => {
    const linkedList = new LinkedList();
    it('creates an empty linked list', () => {
        expect(linkedList.head).toBeNull;
    });
    
    it('properly inserts into the linked list', () => {
        linkedList.insert(1);
        expect(linkedList.head).toEqual({ 'next': null, 'value': 1 }); 
    });

    it('properly inserts multiple nodes into the linked list', () => {
        linkedList.insert(2);
        linkedList.insert(3);
        let nextNode = linkedList.head.next;
        nextNode = nextNode.next;
        expect(nextNode.value).toEqual(1);
    });

    it('adds a node to the end of the linked list', () => {
        linkedList.append(0);
        expect(linkedList.includes(10)).toBeTruthy;
        expect(linkedList.toString()).toEqual('3 -> 2 -> 1 -> 0');
    });

    it('inserts a node before a node with a given value', () => {
        linkedList.insertBefore(4, 3);
        expect(linkedList.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0');
    });  

    it('inserts a node after a node with a given value', () => {
        linkedList.insertAfter(1, 0);
        expect(linkedList.toString()).toEqual('4 -> 3 -> 2 -> 1 -> 0 -> 1');
    });

    it('returns the node’s value that is k from the end of the linked list', () => {
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(4);
        expect(linkedList.kthFromEnd(1)).toEqual(4);
    });

    it('merges two linked lists in alternating order', () => {
        const listOne = new LinkedList();
        listOne.insert(1);
        listOne.insert(2);
        listOne.insert(3);
        const listTwo = new LinkedList();
        listTwo.insert(9);
        listTwo.insert(8);
        listTwo.insert(7);
        const zippedList = mergeLists(listOne, listTwo);
        expect(zippedList.toString()).toEqual('3 -> 7 -> 2 -> 8 -> 1 -> 9');
    });
});