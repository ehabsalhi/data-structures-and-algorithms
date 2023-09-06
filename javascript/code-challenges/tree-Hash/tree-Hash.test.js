const { BST  , Hash} = require("./tree-Hash")


describe('', () => {
     it('return the first repeated word', () => {
          let newTree = new BST()
          let Second_Tree = new BST()
          let newHash = new Hash()
          
          
          newTree.insert(10)
          newTree.insert(5)
          newTree.insert(20)
          newTree.insert(59)
          
          Second_Tree.insert(10)
          Second_Tree.insert(56)
          Second_Tree.insert(5)
          Second_Tree.insert(20)

          expect(newHash.tree(newTree, Second_Tree)).toStrictEqual(["10", "5", "20"])
     })
})