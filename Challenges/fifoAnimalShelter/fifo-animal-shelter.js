class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class AnimalShelter {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(animal) {
        const node = new Node(value, null);
        if (!this.front) {
            this.front = node;
        }
        this.back.next = node;
        this.back = node;
    }

    dequeue(pref) {
      
    }

    string() {
        let currentNode = this.front;
        let string = ''; 
        while (currentNode) {
            string += currentNode.value.toString() + ' , ';
            currentNode = currentNode.next;
        }
        return string; 
    }
}

module.exports = { AnimalShelter };