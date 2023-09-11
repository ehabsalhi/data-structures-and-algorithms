class Hash_left_join{
     constructor(size) {
         this.size = size
         this.map = new Array(size)
     }
 
     hash(ele) {
         return ele.split("").reduce((acc , cur) => acc + cur.charCodeAt(0), 0 ) * 599 % this.size
     }
 
     set(key, value) {
         let hashed = this.hash(key)
         if(!this.map[hashed]) this.map[hashed] = {[key] : value}
     }
     get(key) {
         let hashed = this.hash(key)
         return this.map[hashed]
     }
 
     left_join(map_1 , map_2){
         let arr = []
 
         for (let ele in map_1.map) {
             
 
             let one = Object.entries(map_1.map[ele])
             let value_2 = map_2.get(one[0][0])
             
             
             if (value_2) {
                 let two = Object.entries(value_2)[0][1]
         
                 arr.push([one[0][0], one[0][1], two])
             } else {
                 let newArray = [one[0][0], one[0][1] , null]
                 arr.push(newArray)
             }
         }
 
         return arr
     }
 
 
}
 
module.exports = Hash_left_join