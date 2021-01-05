class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(name){
        if(!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(vert1, vert2, weight){
        if(this.adjacencyList[vert1] && this.adjacencyList[vert2]){
            this.adjacencyList[vert1].push({node: vert2, weight});
            this.adjacencyList[vert2].push({node: vert1, weight});
        } else {
            console.log("ERROR: One or more vertices don't exist.")
        }
    }
}