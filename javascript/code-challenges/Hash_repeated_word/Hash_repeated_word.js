  
 class Hash_Word{
     constructor(size) {
         this.size = size
         this.map = new Array(size)
     }   
 
     hash(key) {
         const hashedKey = key.split("").reduce((acc, curr) => acc + curr.charCodeAt(0), 0)
         return hashedKey * 599 % this.size 
     }
      
      repeated(str) {
          if(!str) return 'please enter str'
          let arr = str.split(" ")
          this.size = arr.length
  
  
          for (let i = 0; i < arr.length; i++) {
              let ele = arr[i].toLowerCase()
  
              let hashed = this.hash(ele)
              if (this.map[hashed] && this.map[hashed] === ele) return ele
              
              this.map[hashed] = ele
          }
           
           return 'No data repeated'
      }

 }
module.exports = {Hash_Word}