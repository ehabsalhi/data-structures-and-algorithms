const Graph = require("./graph-breadth-first");

describe('', () => {
     it('return the breadth firs traversal', () => {
          let newGraph = new Graph()


          newGraph.addVertex('A');
          newGraph.addVertex('B');
          newGraph.addVertex('C');
          newGraph.addVertex('D');

          newGraph.addEdge('A', 'B');
          newGraph.addEdge('B','C');
          newGraph.addEdge('C','D');
          newGraph.addEdge('D','A');


          expect(newGraph.bfs("A")).toEqual(["A", "B", "D", "C"])

     })
})