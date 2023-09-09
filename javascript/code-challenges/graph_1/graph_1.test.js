const Graph = require("./graph_1");

describe('', () => {
     it('Vertex can be successfully added to the graph', () => {
          let newGraph = new Graph()
          newGraph.addVertex("A")
          expect(newGraph.adjacencyList.has('A')).toBe(true)
     })
     it('An edge can be successfully added to the graph // and All appropriate neighbors can be retrieved from the graph', () => {
          let newGraph = new Graph()
          newGraph.addVertex("A")
          newGraph.addVertex("B")
          newGraph.addVertex("C")
          newGraph.addEdge("B" , 'C')
          newGraph.addEdge("B", 'A')

          console.log(newGraph.getNeighbors('B')); 

          expect(newGraph.getNeighbors('B').length).toEqual(2)
          expect(newGraph.getNeighbors('B')).toEqual([ { edge: 'C', weight: 0 }, { edge: 'A', weight: 0 } ])
     })
     it('A collection of all vertices can be properly retrieved from the graph', () => {
          let newGraph = new Graph()
          newGraph.addVertex("A")
          newGraph.addVertex("B")
          newGraph.addVertex("C")
          newGraph.addEdge("B" , 'C')
          newGraph.addEdge("B", 'A')

          let data = [
               'A => [{"edge":"B","weight":0}]',
               'B => [{"edge":"C","weight":0},{"edge":"A","weight":0}]',
               'C => [{"edge":"B","weight":0}]'
             ]
          expect(newGraph.getVertices()).toEqual(data)
     })

     it('Neighbors are returned with the weight between vertices included', () => {
          let newGraph = new Graph()
          newGraph.addVertex("A")
          newGraph.addVertex("B")
          newGraph.addVertex("C")
          newGraph.addEdge("B" , 'C' , 2 )
          newGraph.addEdge("B", 'A' , 55)

          console.log(newGraph.getNeighbors('B'));

          expect(newGraph.getNeighbors('B')).toEqual([ { edge: 'C', weight: 2 }, { edge: 'A', weight: 55 } ])
     })
     it('The proper size is returned, representing the number of vertices in the graph', () => {
          let newGraph = new Graph()
          newGraph.addVertex("A")
          newGraph.addVertex("B")
          newGraph.addVertex("C")

          expect(newGraph.size).toEqual(3)
     })
     it('A graph with only one vertex and edge can be properly returned', () => {
          let newGraph = new Graph()
          newGraph.addVertex("A")
          newGraph.adjacencyList.get('A').push('B')


          expect(newGraph.adjacencyList.get('A')).toEqual(["B"])
     })
})