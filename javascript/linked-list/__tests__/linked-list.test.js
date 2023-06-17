'use strict';

// Require our linked list implementation
const {LinkedList} = require("../index")
const {Node} = require("../index")



describe ('Linked List ' ,() =>{

    it('Can successfully instantiate an empty linked list' , () =>{
      let ll = new LinkedList
      expect(ll.head).toEqual(null)
    })

    it('Can properly insert into the linked list' , () =>{
      let ll = new LinkedList ;
      let canInsert = false ;

      ll.addFirst(10)
      if(ll.head) canInsert = true ;

      expect(canInsert).toEqual(true)
    })

    it('The head property will properly point to the first node in the linked list' , () =>{
      let ll = new LinkedList ;
      ll.addFirst(30)
      expect(ll.head).toEqual(new Node(30, null));
      expect(ll.head.data ).toEqual(30)
    })

    it('Can properly insert multiple nodes into the linked list' , () =>{
      let ll = new LinkedList ;
      ll.addFirst(20)
      ll.addFirst(30)
      ll.addFirst(40)
      expect(ll.head).toEqual(new Node(40, new Node(30, new Node(20, null))));
    })

    it('Will return true when finding a value within the linked list that exists' ,() =>{
      let ll = new LinkedList ;
      ll.addFirst(10)
      ll.addFirst(20)
      ll.addFirst(30)

      expect(ll.includes(20)).toBe(true);
    })
    it('Will return false when searching for a value in the linked list that does not exist' ,() =>{
      let ll = new LinkedList ;
      ll.addFirst(10)
      ll.addFirst(20)
      ll.addFirst(30)
      
      expect(ll.includes(99)).toBe(false);
    })
    it('Can properly return a collection of all the values that exist in the linked list' ,() =>{
      let ll = new LinkedList ;
      ll.addFirst(10)
      ll.addFirst(20)
      ll.addFirst(30)
      expect(ll.toString()).toBe("{30} => {20} => {10} => null");
    })

})