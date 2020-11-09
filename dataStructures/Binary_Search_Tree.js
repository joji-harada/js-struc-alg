class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;

            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    contains(val){
        if(!this.root) return false;

        let current = this.root;
        while(true){
            if(val === current.val) return true;
            if(val < current.val){
                if(current.left === null){
                    return false;
                } else {
                    current = current.left;
                }
            } else if(val > current.val){
                if(current.right === null){
                    return false;
                } else {
                    current = current.right;
                }
            }
        }
    }
    
    bfs(){ //breadth first
        let data = [],
            queue = [],
            node = this.root;

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    dfsPreOrder(){
        let data = [];        
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }

    dfsPostOrder(){
        let data = [];
        
        function traverse(node){
            if(node.right) traverse(node.right);
            if(node.left) traverse(node.left);
            data.push(node.val);
        }
        traverse(this.root);

        return data;
    }

    dfsInOrder(){
        let data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }
}

let tree = new BinarySearchTree();