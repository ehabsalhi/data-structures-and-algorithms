const Graph = require("./graph-depth-first");

describe('', () => {
     it('', () => {
          const newGraph = new Graph();
  
          newGraph.addNode('A');
          newGraph.addNode('B');
          newGraph.addNode('D');
          newGraph.addNode('C');
          newGraph.addNode('E');
          
          newGraph.addEdge('A', 'B');
          newGraph.addEdge('B', 'D');
          newGraph.addEdge('A', 'C');
          newGraph.addEdge('C', 'E');

          expect(newGraph.depthFirst('B')).toEqual(["B", "A", "C", "E", "D"])
     })
})