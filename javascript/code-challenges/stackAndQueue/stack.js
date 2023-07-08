class Node {
     constructor(value ){
       this.value = value ;
       this.next = null
     }
   
}


class Stack {
     constructor (){
       this.top = null
       this.size = 0
     }
   
     push(ele){
   
       let node = new Node(ele)
       node.next = this.top
       this.top = node
       this.size++
       // console.log(this.top)
     }
   
     pop(){
       if(this.isEmpty()) return 'NO data'
   
       let deleItem = this.top.value
       this.top = this.top.next
   
       this.size--
       return deleItem
     }
   
     isEmpty(){
       return this.top === null
     }
   
     peek(){
       if(this.isEmpty()) return 'NO data'
       return this.top
     }
   
   }

   module.exports = {
     Stack,
     Node
   }
   