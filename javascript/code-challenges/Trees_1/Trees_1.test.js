const {BST, Node} = require("./Trees_1");


describe('trees' , () =>{

     it('Can successfully instantiate an empty tree' , () =>{
          const newBSt = new BST()

          expect(newBSt.root).toBeNull()
     })

     it('Can successfully instantiate a tree with a single root node' , () =>{
          const newBSt = new BST()
          newBSt.root = new Node(10)

          expect(newBSt.root.value).toBe(10)

     })

     it('For a Binary Search Tree, can successfully add a left child and right child properly to a node' , ()=>{
          const newBSt = new BST()
          newBSt.insert(10)
          newBSt.insert(11)
          newBSt.insert(9)
          expect(newBSt.root.value).toBe(10)
          expect(newBSt.root.left.value).toBe(9)
          expect(newBSt.root.right.value).toBe(11)
     })
     it('Can successfully return a collection from a pre-order , in-order , post-order traversal' , ()=>{
          const newBSt = new BST()
          newBSt.insert(10)
          newBSt.insert(11)
          newBSt.insert(12)
          newBSt.insert(9)
          newBSt.insert(8)

          const preOrder = [10, 9, 8, 11, 12]
          const inOrder = [8, 9, 10, 11, 12]
          const postOrder = [8, 9, 12, 11, 10]

          expect(newBSt.preOrder(newBSt.root)).toEqual(preOrder)
          expect(newBSt.inOrder(newBSt.root)).toEqual(inOrder)
          expect(newBSt.postOrder(newBSt.root)).toEqual(postOrder)

     })
     it(' Returns true or false for the contains method, given an existing or non-existing node value' , ()=>{
          const newBSt = new BST()
          newBSt.insert(10)
          newBSt.insert(11)
          newBSt.insert(12)
          newBSt.insert(9)
          newBSt.insert(8)


          expect(newBSt.inclode(newBSt.root  , 10)).toEqual(true)
          expect(newBSt.inclode(newBSt.root  , 8)).toEqual(true)
          expect(newBSt.inclode(newBSt.root  , 77)).toEqual(false)

     })


})