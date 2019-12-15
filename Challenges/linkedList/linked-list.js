class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
  
class LinkedList {
    constructor(){
        this.head = null;
    }
  
    insert(value){
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
  
    includes(value){
        let currentNode = this.head;
        while (currentNode){
            if (currentNode.value === value){
                return true;
            }
            currentNode = currentNode.next;
        }  
        return false;
    }
  
    toString(){
        let str = '';
        let currentNode = this.head;
        str += currentNode.value;
        while (currentNode.next !== null){
            currentNode = currentNode.next;
            str += ` -> ${currentNode.value.toString()}`;
        }
        return str;
    }
  
    append(value){
        const node = new Node(value);
        let currentNode = this.head;
        while (currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
}

module.exports = { LinkedList, Node };