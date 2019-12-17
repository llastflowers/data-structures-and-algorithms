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
        while (!this.stack1.isEmpty()) {
            const top = this.stack1.pop(this.stack1.top);
            this.stack2.push(top);   
        }
        const node = new Node(value, null);
        this.stack2.push(node);

        while (!this.stack2.isEmpty()){
            const top = this.stack2.pop(this.stack2.top);
            this.stack1.push(top);
        }
        return this.stack1;
    }

    // dequeue(value) {
        
    // }

    toString() {
        return this.stack1.toString();
    }
}

module.exports = { PseudoQueue };