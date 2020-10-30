class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = first;
        this.last = last;
        this.size = 0;
    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;

        this.size--;
        return temp.val;
    }
}