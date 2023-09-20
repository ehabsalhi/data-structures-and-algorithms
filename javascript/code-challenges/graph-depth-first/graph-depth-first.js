class Graph {
     constructor() {
       this.adjacencyList = {};
     }
   
     addNode(value) {
       if (!this.adjacencyList[value]) {
         this.adjacencyList[value] = [];
       }
     }
   
     addEdge(value1, value2) {
       if (this.adjacencyList[value1] && this.adjacencyList[value2]) {
         this.adjacencyList[value1].push(value2);
         this.adjacencyList[value2].push(value1);
       }
     }
   
     depthFirst(startNode) {
       const visited = {};
       const result = [];
   
       const preOrder = (node) => {
         if (!node) return
   
         visited[node] = true;
         result.push(node);
   
         this.adjacencyList[node].forEach((edges) => {
           if (!visited[edges]) {
             preOrder(edges);
           }
         });
       };
   
       preOrder(startNode);
       return result;
     }
}
 
module.exports = Graph