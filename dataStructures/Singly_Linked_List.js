class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        
        let curr = this.head;
        let newTail = this.head;
        while(curr.next){
            newTail = curr;
            curr = curr.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return curr;
    }

    shift(){
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }

        return currentHead;
    }
}

let list = new SinglyLinkedList();