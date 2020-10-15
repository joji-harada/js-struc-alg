class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;

        let popped = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }

    shift(){
        if(!this.head) return undefined;

        let shifted = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = shifted.next;
            this.head.prev = null;
            shifted.next = null;
        }
        this.length--;
        return shifted;
    }

    unshift(val){
        if(!this.head) return this.push(val);

        let newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;

        if(index <= this.length / 2){
            let curr = this.head;
            let counter = 0;
            while(counter !== index){
                curr = curr.next;
                counter++;
            }
            return curr;
        } else {
            let curr = this.tail;
            let counter = this.length - 1;
            while(counter !== index){
                curr = curr.prev;
                counter--;
            }
            return curr;
        }
    }

    print(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList(); //for testing