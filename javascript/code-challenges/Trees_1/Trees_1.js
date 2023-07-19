class Node {
     constructor(value){
       this.value = value
       this.left = null
       this.right = null
       
     }
}


class BST {
   constructor(){
     this.root = null
   }
 
   insert(value){
     let newNode = new Node(value)

     if(this.root === null){
       this.root = newNode
     }else{ 
          this.insertNode(this.root, newNode) 
     }    

     }

     insertNode(root , node){

          if(node.value < root.value){
               if(root.left === null){
                    root.left = node
               }else{
                    this.insertNode(root.left , node)
               }
          }
          
          else{
               if(root.right === null){
                    root.right = node
               }else{
                    this.insertNode(root.right , node)
               }
          }

     }

     inclode(root , val){
          if(!root){
               return false
          }else{
               if(root.value === val ){
                    return true
               }
               else if(val < root.value){
                    return this.inclode(root.left, val)
               }else{
                    return this.inclode(root.right, val)

               }
          }
     }

     preOrder(root){
          let arr = []
          const traversal = (root) =>{
          if(root){
                    arr.push(root.value)
                    traversal(root.left)
                    traversal(root.right)
               }
          }
          traversal(root)
          return arr
     }
     inOrder(root){
          let arr = []
          const traversal = (root) =>{
          if(root){
               traversal(root.left)
               arr.push(root.value)
               traversal(root.right)
               }
          }
          traversal(root)
          return arr
     }
     postOrder(root){
          let arr = []
          const traversal = (root) =>{
          if(root){
               traversal(root.left)
               traversal(root.right)
               arr.push(root.value)
               }
          }
          traversal(root)
          return arr
     }

 }


 module.exports = {Node , BST}