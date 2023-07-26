class Node {
     constructor(value){
          this.value = value;
          this.children = []
     }
}

class k_ary{
     constructor(){
          this.root = null
     }

     newInser(ele){
          let newNOde = new Node(ele)
          if(!this.root){
               this.root = newNOde
          }else{
               this.root.children.push(newNOde)
          }
     }

     Breadth(tree){
          let queue =[]
          queue.push(tree.root)

          while(queue.length > 0){

               let dele = queue.shift()
               dele.value % 3 === 0 && dele.value % 5 === 0 ? dele.value = 'fuzzbuzz' 
               :dele.value % 3 === 0 ? dele.value = 'fuzz'  
               : dele.value % 5 === 0  ? dele.value = 'buzz' 
               : dele.value = `${dele.value}`

               if(dele.children.length > 0){
                    queue.push(...dele.children)
               }
          }
          return tree
     }
}

let newK_ary_1 = new k_ary()
let newK_ary_2 = new k_ary()

newK_ary_1.newInser(10)
newK_ary_1.newInser(20)
newK_ary_1.newInser(30)
newK_ary_1.newInser(40)
newK_ary_1.newInser(13)
newK_ary_2.Breadth(newK_ary_1)

console.log(newK_ary_2.Breadth(newK_ary_1));

