class Graph {
     constructor() {
         this.adjacencyList = new Map()
         this.size = 0
     }
 
     addVertex(value) {
             this.adjacencyList.set(value ,{edge : [] })
             this.size++
         
     }
 
     addEdge(value1, value2 , weight = 0) {
         if (this.adjacencyList.has(value1) === false) {
             this.addVertex(value1)
         }
         if (this.adjacencyList.has(value2) === false) {
             this.addVertex(value2)
         }
         
         this.adjacencyList.get(value1).edge.push({value: value2  , weight})  
         this.adjacencyList.get(value2).edge.push({value: value1 , weight})
     }
 
     business_trip(graph, array) {
         let check = true
         let cost  = 0
         for (let i = 0; i < array.length; i++) {
             if (check === false) return false
             
             if (!graph.has(array[i])) {
               return  check = false
             } 
 
             if (array[i + 1]) {
                 let edge = graph.get(array[i + 1]).edge
 
                 for (let x = 0; x < edge.length; x++) {
                     const element = edge[x].value === array[i] 
                     if (element) {
                         cost += edge[x].weight
                         check = true
                         break
                     } else {
                         check = false
                     }
                 }
             }
         }
         
         return {check , cost}
     }
 }
 
 let newGraph = new Graph()
 let tripGraph = new Graph()
 
 
 newGraph.addVertex('A');
 newGraph.addVertex('B');
 newGraph.addVertex('C');
 newGraph.addVertex('D');
 
 newGraph.addEdge('D','A' , 50);
 newGraph.addEdge('A', 'B' , 25);
 newGraph.addEdge('X', 'A' , 15);
 newGraph.addEdge('B','C' , 20);
 newGraph.addEdge('C','D' , 35);
 
 
 console.log(tripGraph.business_trip(newGraph.adjacencyList , [ "A"  , 'D' , 'C']));
 

 module.exports = Graph