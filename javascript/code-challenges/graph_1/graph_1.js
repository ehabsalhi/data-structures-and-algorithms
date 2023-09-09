// class Graph {
//      constructor() {
//          this.adjacencyList = {}
//          this.size = 0
//      }
 
//      addVertex(value) {
//          if (!this.adjacencyList[value]) {
//              this.adjacencyList[value] = new Set()
//              this.size++
//          }
//      }
 
//      addEdge(value1, value2) {
//          if (!this.adjacencyList[value1]) {
//              this.addVertex(value1)
//          }
//          if (!this.adjacencyList[value2]) {
//              this.addVertex(value2)
//          }
         
//          this.adjacencyList[value1].add(value2)
//          this.adjacencyList[value2].add(value1)
//      }
 
//      getVertices() {
//           let arr = []
//          for (let vertex in this.adjacencyList) {
//           //     console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`);
//               arr.push(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
//          }
//           return arr
//      }
 
//      getNeighbors(vertex) {
//          if (!this.adjacencyList[vertex]) return 'not exist'
//          return [...this.adjacencyList[vertex]]
//      }
//      getSize() {
//          return this.size
//      }
// }
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
         
         this.adjacencyList.get(value1).push({edge : value2 , weight})
         this.adjacencyList.get(value2).push({edge : value1 , weight})
     }
 
     getVertices() {
         let arr = []
         for (let [vertex, v] of this.adjacencyList) {
             arr.push(`${vertex} => ` + JSON.stringify(v))
         }
         return arr;
     }
 
     getNeighbors(vertex) {
         if (!this.adjacencyList.has(vertex)) return 'not exist'
         return [...this.adjacencyList.get(vertex)]
     }
     getSize() {
         return this.size
     }
 
 
 }
 
module.exports = Graph