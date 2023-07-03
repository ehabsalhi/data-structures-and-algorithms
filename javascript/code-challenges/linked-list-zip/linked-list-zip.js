
class Node {
     constructor (value , next = null){
          this.value = value 
          this.next = next
     }
}

class LinkedList {
     constructor (){
          this.head = null,
          this.size = -1
     }

     addOne(val){
          this.head = new Node(val , this.head)
          this.size++
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
      getIndex (num){
          if(num < 0){ return 'The Num is not a positive integer'}
          let current = this.head
          let index = this.size



          while(current){
              if(num === index) {
                  return current.value
              }
              index--
              current = current.next
              
          }
          return 'Not Exist !!'
      }

      showAllInConsole(){
        let current = this.head

        while(current){
          console.log(current.value);
          current = current.next
        }

      }

      showAll(){
        let current = this.head
        let arr = []
        while(current){
           arr.push(current.value)
           current = current.next
        }
        return arr
      }
}


class LL_Tow {

     constructor(){
     this.head = null,
     this.size = -1

     }

     addOneTOLL_Tow(val){

     this.head = new Node(val , this.head)
     this.size++

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



     showAll(){
     let current = this.head
     let arr = []
     while(current){
          arr.push(current.value)
          current = current.next
     }
     return arr
     }

}


class LL_Three {

  constructor(){
    this.head = null,
    this.size = -1
  }

  zipLists(val){
    this.head = new Node(val , this.head) 
    this.size++
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


let LL_2 = new LL_Tow()
let LL_3 = new LL_Three()
let llOne = new LinkedList()

llOne.addOne(10)
llOne.addOne(20)
llOne.addOne(30)
llOne.addOne(40)
llOne.addOne(50)
llOne.addOne(60)
console.log(llOne.toString());



LL_2.addOneTOLL_Tow(99)
LL_2.addOneTOLL_Tow(88)
LL_2.addOneTOLL_Tow(77)

let length  = Math.max(llOne.size , LL_2.size)



for (let i = length ; i >= 0 ; i--){
  if(LL_2.showAll()[i]){

    LL_3.zipLists(LL_2.showAll()[i])
  }
  if(llOne.showAll()[i]){

    LL_3.zipLists(llOne.showAll()[i])
  }

}


// console.log(LL_2.toString());
// console.log(LL_3.toString());


module.exports = {
     LinkedList,
     LL_Tow,
     LL_Three
}