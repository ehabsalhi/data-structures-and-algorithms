
class Node {
     constructor (value){
          this.value = value;
          this.left = null
          this.right  = null
          this.next = null
     }
}

class BST {
     constructor(){
          this.root = null
          this.front  = null
          this.rear  = null
     }

     insert(ele){
          const newNode = new Node(ele)
          if(this.root === null){
               this.root = newNode
          }
          else{
               this.insertNode(newNode , this.root)
          } 
     }

     insertNode(newNode , root){
          if(newNode.value < root.value){
               if(root.left === null){
                    root.left = newNode
               }else{
                    this.insertNode(newNode , root.left)
               }
          }else{
               if(root.right === null){
                    root.right = newNode
               }else{
                    this.insertNode(newNode , root.right)
               }
          }
     }

     enQueue(ele){
          const newNode = new Node(ele)
          if(this.front === null){
               this.front = newNode
               this.rear= newNode
          }else{
               this.rear.next = newNode
               this.rear = newNode
          }
     }

     deququ(){
               let dele = this.front.value
               this.front = this.front.next
               return dele
     }

     Breadth2(){

          let arr =[]
          this.enQueue(this.root)
          while(this.front){

               let curr2 = this.deququ()
               // console.log(curr2);
               if(curr2){
                    arr.push(curr2.value)

                    if(curr2.left){
                         this.enQueue(curr2.left)
                    }
                    if(curr2.right){
                         this.enQueue(curr2.right)
                    }
               }else{
                    break
               }              
          }
          return arr
     }

     Breadth(){
          let queue = []
          let arr =[]

          queue.push(this.root)
         while(queue.length){
          let item  = queue.shift()
          arr.push(item.value)

          if(item.left){
               queue.push(item.left)
          }
          if(item.right){
               queue.push(item.right)
          }
         }
          return arr

     }
}