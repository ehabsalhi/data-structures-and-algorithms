
class Node {
     constructor(value ){
       this.value = value ;
       this.next = null
     }
   
   }
   
   let next = 'this.rear'
   
   class Queue {
     constructor(){
       this.front = null
       this.rear = null
       this.size = 0
     }
   
     enqueue(ele){
       let node = new Node(ele)
   
       if(this.isEmpty()) {
         this.front = node
         this.rear = node
         this.size++
   
       }
       else{
         // let nodeString = JSON.stringify(node);
         // next += '.next' 
         // eval(`${next} = ${nodeString}`)
         this.size++
         this.rear.next = node
         this.rear = node
       }
     }
     
     isEmpty(){
       return this.front === null
     }
   
   
     dequeue(){
     if(this.isEmpty()) return 'NO data'
       let dele = this.front.value
       this.front = this.front.next
       this.size--
       return dele
     }
   
     peek() {
       if (this.isEmpty()) return null;
   
       return this.front.value;
     }
   
   
   }


module.exports = Queue