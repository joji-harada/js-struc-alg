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

    dfsRecursive(start){
        if(!this.adjacencyList[start]) return undefined;
        let result = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    dfsIterative(start){
        if(!this.adjacencyList[start]) return undefined;
        let stack = [start];
        let visited = {};
        let result = [];
        let current;

        visited[start] = true;
        while(stack.length){
            current = stack.pop();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    bfs(start){
        if(!this.adjacencyList[start]) return undefined;
        let queue = [start];
        let visited = {};
        let result = [];
        let current;
        
        visited[start] = true;
        while(queue.length){
            current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}


//for testing
let g = new Graph;

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("E", "F");

console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfs("A"));
