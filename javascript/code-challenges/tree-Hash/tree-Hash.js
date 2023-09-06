
 class Hash{
     constructor(size) {
         this.size = size
         this.map = new Array(size)
     }   
 
     hash(key) {
         const hashedKey = key.split("").reduce((acc, curr) => acc + curr.charCodeAt(0), 0)
         // console.log(hashedKey);
         return hashedKey * 599 % this.size 
     }


     tree(treeOne, treeTwo) {
         let one = treeOne.preOrder()
         let tow = treeTwo.preOrder()
 
         let togather = [...one,...tow]
 
         this.size = togather.length
         let matched = []
 
         console.log(togather);
 
 
         for (let i = 0; i < togather.length; i++){
 
             let ele = `${togather[i]}`
             let hashed = this.hash(ele)
             
             
             if ( tow.includes(+this.map[hashed]) && one.includes(+this.map[hashed])) {         
                 matched.push(ele)
             }
             else {
                 this.map[hashed] = ele 
             }
         }
 
         return matched
     }
 }
 
 
 
 class NodeTree {
     constructor(value) {
         this.value = value
         this.left = null
         this.right = null
     }
 }
 
 class BST{
     constructor() {
         this.root = null
     }
 
     insert(value) {
         let newNode = new NodeTree(value)
 
         if (!this.root) {
             this.root = newNode
             return
         }
 
         this.inserFN(this.root , newNode)
     }
 
     inserFN(root, newNode) {
         
         if (root.value > newNode.value) {
             if (root.left === null) {
                 root.left = newNode
             } else {  
                 this.inserFN(root.left , newNode)
             }
         } else {
             if (root.right === null) {
                 root.right = newNode
             } else {
                 this.inserFN(root.right , newNode)
             }
         }
     }
 
     search(root, value) {
         if (!root) {
             return false
         } else {
             if (root.value === value) {
                 return true
             }
             else if (value < root.value) {
                 return this.search(root.left , value)
             } else {
                 return this.search(root.right , value)
             }
         }
     }
 
     preOrder() {
         let arr = []
 
         const traversal = (root) => {
             if (root) {                
                 arr.push(root.value)
                 traversal(root.left)
                 traversal(root.right)
             }
         }
         traversal(this.root)
         return arr
     }
     inOrder() {
         let arr = []
 
         const traversal = (root) => {
             if (root) {
                 traversal(root.left)
                 arr.push(root.value)
                 traversal(root.right)
             }
             
         }
         traversal(this.root)
         return arr
     }
     postOrder() {
         let arr = []
 
         const traversal = (root) => {
             if (root) {
                 traversal(root.left)
                 traversal(root.right)
                 arr.push(root.value)
             }
             
         }
         traversal(this.root)
         return arr
     }
 
 }
 
 let newTree = new BST()
 let Second_Tree = new BST()
 let newHash = new Hash()
 
 
 newTree.insert(10) 
 newTree.insert(5)
 newTree.insert(20)
 newTree.insert(59)
 
 Second_Tree.insert(10)
 Second_Tree.insert(56)
 Second_Tree.insert(5)
 Second_Tree.insert(20)
 
 
 
 
console.log(newHash.tree(newTree, Second_Tree));
 
module.exports = {
     Hash,
     BST
}