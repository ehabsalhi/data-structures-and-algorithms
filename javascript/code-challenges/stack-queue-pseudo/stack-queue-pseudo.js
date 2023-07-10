class Node {
     constructor(value, next = null){
          this.value = value;
          this.next = next
     }
   }
   
class Stack_1 {
     constructor(){
          this.top = null
          this.size = 0

     }
     
     push(ele){
          let node = new Node(ele)
          
          node.next = this.top
          this.top = node
          this.size++

     }

     pop(){
     if(this.top === null) return 'No Data' 
     let dele = this.top.value
     this.top = this.top.next

     this.size--
     return dele
     }
}
   
class Stack_2 {
     constructor(){
          this.top = null
          this.size = 0

     }

     push(ele){
          let node = new Node(ele)
          
          node.next = this.top
          this.top = node
          this.size++

     }

     pop(){
          if(this.top === null) return 'No Data' 
          let dele = this.top.value
          this.top = this.top.next

          this.size--
          return dele
     }
}
   
class PseudoQueue {
     constructor (){
          this.front = null;
          this.newStack_1 = new Stack_1()
          this.newStack_2 = new Stack_2()
     }


     enqueue(ele , enqueue){
          this.newStack_1.push(ele)

          if(enqueue){

          while(this.newStack_1.size > 0){
               this.newStack_2.push(this.newStack_1.pop())
          }
          this.front = this.newStack_2.top
          console.log(this.newStack_2.top)
          }

     }

     dequeue(){
          let dele  = this.newStack_2.pop()
          this.front = this.newStack_2.top
          return dele
     }
}
   