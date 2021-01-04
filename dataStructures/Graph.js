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
            console.log("ERROR: One or more vertices don't exist.")
        }
    }

    removeEdge(vert1, vert2){
        if(this.adjacencyList[vert1] && this.adjacencyList[vert2]){
            this.adjacencyList[vert1] = this.adjacencyList[vert1].filter(
                v => v !== vert2
            );
            this.adjacencyList[vert2] = this.adjacencyList[vert2].filter(
                v => v !== vert1
            );
        } else {
            console.log("ERROR: One or more vertices don't exist.")
        }
    }

    removeVertex(vert){
        while(this.adjacencyList[vert].length){
            let adjacentVertex = this.adjacencyList[vert].pop();
            this.removeEdge(vert, adjacentVertex);
        }
        delete this.adjacencyList[vert];
    }
}


//for testing
let g = new Graph;

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Seattle");

g.addEdge("Tokyo", "Seattle");
g.addEdge("Tokyo", "Aspen");
