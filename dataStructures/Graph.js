class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(name){
        if(!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(vert1, vert2){
        if(this.adjacencyList[vert1] && this.adjacencyList[vert2]){
            this.adjacencyList[vert1].push(vert2);
            this.adjacencyList[vert2].push(vert1);
        } else {
            console.log("One or more vertices don't exist.")
        }
    }


}

let g = new Graph;

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
