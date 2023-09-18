const Graph = require("./business_trip");

describe('' ,() => {
     it('', () => {

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
          newGraph.addEdge('C', 'D', 35);
          
          expect(tripGraph.business_trip(newGraph.adjacencyList , [ "A"  , 'D' , 'C'])).toEqual({"check": true, "cost": 85})
          expect(tripGraph.business_trip(newGraph.adjacencyList , [ "A"  , 'B'])).toEqual({"check": true, "cost": 25})
          expect(tripGraph.business_trip(newGraph.adjacencyList , [ "B"  , 'C'])).toEqual({"check": true, "cost": 20})
          expect(tripGraph.business_trip(newGraph.adjacencyList , [ "B"  , 'D'])).toEqual(false)
          
     })
})