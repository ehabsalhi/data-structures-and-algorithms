class Graph {
     constructor() {
         this.adjacencyList = new Map()
         this.size = 0
     }
 
     addVertex(value) {
             this.adjacencyList.set(value ,[])
             this.size++
         
     }
 
     addEdge(value1, value2 , weight = 0) {
         if (this.adjacencyList.has(value1) === false) {
             this.addVertex(value1)
         }
         if (this.adjacencyList.has(value2) === false) {
             this.addVertex(value2)
         }
         
         this.adjacencyList.get(value1).push( value2 )
         this.adjacencyList.get(value2).push( value1 )
     }

     bfs(v) { 
         let q = [];
         let order = []
         q.push(v);
         let visited = [];
         let keys = this.adjacencyList.keys();
         for (let v of keys) {
             visited[v] = false;
         }
     
         while (q.length > 0) {
             let element = q.shift();
             visited[element] = true;
             order.push(element)
             let eList = this.adjacencyList.get(element);
 
             for (let eData in eList) {
                 let e = eList[eData];
                 if (!visited[e]) {
                     q.push(e);
                     visited[e] = true;
                 }
             }
         }
        return order
     }
}
 
module.exports = Graph