
const LinkedList = require('./linked-list-3');

describe('testing the Linked List', () => {


it('Can successfully add a node to the end of the linked list', () => {
     const list = new LinkedList();
     list.addOne(12);
     console.log(list.toString() , '666666666666666666666666666666666666666666666666');
     expect(list.toString()).toBe('12 => null');
   });
 
   it('Can successfully add multiple nodes to the end of a linked list', () => {
     const list = new LinkedList();
     list.addOne(12);
     list.addOne(13);
     list.addOne(14);
     expect(list.toString()).toBe('14 => 13 => 12 => null');
   });
 
   it('can successfully insert a node before a node located in the middle of a linked list', () => {
     const list = new LinkedList();
     list.addOne(11);
     list.addOne(12);
     list.addOne(14);
     list.addOne(15);
     list.insertBefore(14, 13);
     expect(list.toString()).toBe('15 => 13 => 14 => 12 => 11 => null');
   });
 
   it('can successfully insert a node before the first node of a linked list', () => {
     const list = new LinkedList();
     list.addOne(0);
     list.addOne(2);
     list.addOne(3);
     list.addOne(4);
     list.addOne(5);
     list.insertBefore(2, 1);
     expect(list.toString()).toBe('5 => 4 => 3 => 1 => 2 => 0 => null');
   });
 
   it('can successfully insert after a node in the middle of the linked list', () => {
     const list = new LinkedList();
     list.addOne(11);
     list.addOne(13);
     list.addOne(15);
     list.addOne(16);
     list.insertAfter(11, 12);
     expect(list.toString()).toBe('16 => 15 => 13 => 11 => 12 => null');
   });
 
   it('can successfully insert a node after the last node of the linked list', () => {
     const list = new LinkedList();
     list.addOne(11);
     list.insertAfter(11, 12);
     expect(list.toString()).toBe('11 => 12 => null');
   })

});