'use strict';

class Node {
     constructor (data , next = null){
         this.data = data ;
         this.next = next;
     }
 }
 
 
 class LinkedList {
     constructor(){
         this.head = null
     }
 
 // insert 
 
     addFirst(data){
         this.head = new Node(data , this.head)
     }
 
 // includes 
 
     includes(value){
         let current = this.head
         let exist = false
 
         while(current){
             if(current.data === value) exist = true 
             current = current.next
         }
 
         if(exist) return true
         return false
     }
 
 // to string
 
     toString(){
         let currentStr = this.head
         let str = ''
 
         while(currentStr){
             str += `{${currentStr.data}} => ` 
             currentStr = currentStr.next
         }
          str += currentStr
         
         return str
     }
 
 }
 

module.exports = {LinkedList , Node};
