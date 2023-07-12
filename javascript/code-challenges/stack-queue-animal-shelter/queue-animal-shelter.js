class Node {
     constructor(value, next = null){
          this.value = value;
          this.next = next
     }
   }

class AnimalShelter {
     constructor(){
          this.dog = {
               front : null,
               rear : null
          };
          this.cat = {
               front : null,
               rear : null
          };;
     }

     enqueue(animal){
          let node = new Node(animal)

          if(animal.type === 'cat'){

              if(this.cat.rear === null){
               this.cat.front = node
               this.cat.rear = node
          }
              else{
               this.cat.rear.next = node
               this.cat.rear = node
              }
          }

          else if(animal.type === 'dog'){

               if(this.dog.rear === null){
                    this.dog.front = node
                    this.dog.rear = node
               }
               else{
                    this.dog.rear.next = node
                    this.dog.rear = node
                   }
          }
     }

     dequeue(pref){

          if(pref === 'cat'){
               let dele = this.cat.front.value
               this.cat.front = this.cat.front.next
               return dele
          }

          if(pref === 'dog'){
               let dele = this.dog.front.value
               this.dog.front = this.dog.front.next
               return dele
          }
          if(pref !== 'cat' || pref !== 'dog' ){ return 'Please enter Cat or Dog'}

     }
}