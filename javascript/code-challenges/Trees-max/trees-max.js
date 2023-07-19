class Node {
     constructor (value){
          this.value = value;
          this.left = null
          this.right  = null
     }
}


class Tree {
     constructor(){
          this.root = null
     }


     insert(ele){
          let newNode = new Node(ele)
          if(this.root === null){
               this.root = newNode
          }else{
               this.insertNode(this.root , newNode)
          }

     }

     insertNode(root , newNode){
          if(newNode.value < root.value){
               if(root.left === null){
                    root.left = newNode
               }else{
                    this.insertNode(root.left , newNode)
               }
          }else{
               if(root.right === null){
                    root.right = newNode
               }else{
                    this.insertNode(root.right , newNode)
               }
          }

     }

     max(){
          let arr = []
          const traversal = (root) =>{
               if(root){
                    arr.push(root.value)
                    traversal(root.left)
                    traversal(root.right)
               }
          }
          traversal(this.root)
          return Math.max(...arr)
     }
}


let newTree = new Tree()

newTree.insert(10)
newTree.insert(20)
newTree.insert(5)
newTree.insert(4)
newTree.insert(6)
newTree.insert(15)
newTree.insert(25)
console.log(newTree.max());

console.log(newTree.root);

