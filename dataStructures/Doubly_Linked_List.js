class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
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

    pop() {
        if (!this.head) return undefined;

        let popped = this.tail;
        if (this.length === 1) {
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

    shift() {
        if (!this.head) return undefined;

        let shifted = this.head;
        if (this.length === 1) {
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

    unshift(val) {
        if (!this.head) return this.push(val);

        let newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index <= this.length / 2) {
            let curr = this.head;
            let counter = 0;
            while (counter !== index) {
                curr = curr.next;
                counter++;
            }
            return curr;
        } else {
            let curr = this.tail;
            let counter = this.length - 1;
            while (counter !== index) {
                curr = curr.prev;
                counter--;
            }
            return curr;
        }
    }

    set(index, val) {
        let found = this.get(index);
        if (found !== undefined) {
            found.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let temPrev = this.get(index - 1);

        temPrev.next.prev = newNode;
        newNode.next = temPrev.next;
        newNode.prev = temPrev;
        temPrev.next = newNode;

        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();

        let rmNode = this.get(index);
        
        rmNode.prev.next = rmNode.next;
        rmNode.next.prev = rmNode.prev;
        rmNode.prev = null, rmNode.next = null;
        this.length--;
        return rmNode;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList(); //for testing