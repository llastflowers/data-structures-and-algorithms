class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        const node = new Node(value, this.top);
        this.top = node;
    }    

    pop() {
        if (!this.top) return null;

        const top = this.top;
        this.top = top.next;
        return top;
    }

    peek() {
        if (!this.top) return null;
        return this.top;
    }

    isEmpty() {
        return !!this.top;
    }
}

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        while (!this.stack1.isEmpty) {
            this.stack1.push(this.stack2.pop(value));   
        }
    }

    dequeue(value) {
        
    }

    toString() {
        return this.stack1.toString()
            .concat(' -> ');
    }
}

module.exports = { PseudoQueue, Stack, Node };