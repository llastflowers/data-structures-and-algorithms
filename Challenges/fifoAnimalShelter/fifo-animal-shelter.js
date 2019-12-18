class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        const node = new Node(value, null);
        if (!this.front) {
            this.front = node;
        } else {
            this.back.next = node;
        }
        this.back = node;
    }

    dequeue() {
        if (!this.isEmpty()) return null;

        const front = this.front;
        this.front = this.front.next;
        if (!this.front) this.back = null;

        return front;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.front.value;
    }

    isEmpty() {
        return !this.front;
    }

    toString() {
        let currentNode = this.front;
        let string = ''; 
        while (currentNode) {
            string += currentNode.value.name.toString() + ' , ';
            currentNode = currentNode.next;
        }
        return string; 
    }
}

class AnimalShelter {
    constructor() {
        this.dogQueue = new Queue;
        this.catQueue = new Queue;
    }

    enqueue(animal) {
        if (animal.type === 'cat') {
            this.catQueue.enqueue(animal);
        } else if (animal.type === 'dog') {
            this.dogQueue.enqueue(animal);
        }
        else return;
    }

    dequeue(pref) {
      
    }
}

module.exports = { AnimalShelter, Queue, Node };