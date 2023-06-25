
class Node {
     constructor (value , next = null){
          this.value = value 
          this.next = next
     }
}

class LinkedList {
     constructor (){
          this.head = null,
          this.size = 0
     }

     addOne(val){
          this.head = new Node(val , this.head)
     }

     addToEnd(val){
          let current;
          let node = new Node(val)

          if(!this.head){
              this.head = node
              this.size++
          }
          
          else{
              current = this.head
              while(current.next){
                  current = current.next
              }

              current.next = node
              this.size++
          }
      }

      insertBefore(val , newVal){
         let current = this.head

          if(!this.head){
               this.addToEnd(newVal)
          }

          if(current.value === val){
               this.addToEnd(newVal)
          }

          while(current.next !== null && current.next.value !== val){
               current = current.next
          }

          const newNode = new Node(newVal)
          newNode.next = current.next
          current.next = newNode

      }

      insertAfter( val , newVal){
          let current = this.head


          while(current !== null && current.value !== val){
               current = current.next
          }

          const newNode = new Node(newVal)
          newNode.next = current.next
          current.next = newNode
      }
      toString(){
          let currentStr = this.head
          let str = ''
  
          while(currentStr){
              str += `${currentStr.value} => ` 
              currentStr = currentStr.next
          }
           str += currentStr
          
          return str
      }


}

module.exports = LinkedList