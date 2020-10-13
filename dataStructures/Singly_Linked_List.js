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

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        
        let counter = 0;
        let curr = this.head;
        while(counter !== index){
            curr = curr.next;
            counter++;
        }
        return curr;
    }

    set(index, val){
        let found = this.get(index);
        if(found){
            found.val = val;
            return true;
        } 
        return false;
    }

    insert(index, val){
        let newNode = new Node(val);
        if(index < 0 || index > this.length) return false;
        if(index === this.length) this.push(val);
        if(index === 0) this.unshift(val);

        let prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        
        this.length++;
        return true;
    }
}

let list = new SinglyLinkedList();