const Queue = require("./queue");
const { Stack, Node } = require("./stack");


describe('Satck Test' , () =>{


     it('Can successfully push onto a stack' , () =>{
          const newStack = new Stack()
          newStack.push(10)
          expect(newStack.top).toEqual({"next": null, "value": 10})
     })
     it(' Can successfully push multiple values onto a stack' , () =>{
          const newStack = new Stack()
          newStack.push(10)
          newStack.push(20)
          expect(newStack.top).toEqual({"next": {"next": null, "value": 10}, "value": 20})
          newStack.pop()
          expect(newStack.top).toEqual({"next": null, "value": 10})
     })
     it(' Can successfully pop off the stack & Can successfully empty a stack after multiple pops' , () =>{
          const newStack = new Stack()
          newStack.push(10)
          newStack.push(20)
          newStack.pop()
          expect(newStack.top).toEqual({"next": null, "value": 10})
          newStack.pop()
          expect(newStack.top).toEqual(null)
     })
     it('Can successfully peek the next item on the stack' , () =>{
          const newStack = new Stack()
          newStack.push(10)
          newStack.push(20)
          expect(newStack.peek().value).toEqual(20)
     })
     it('Can successfully instantiate an empty stack' , () =>{
          const newStack = new Stack()
          expect(newStack instanceof Stack).toEqual(true)
     })
     it('Can successfully instantiate an empty stack' , () =>{
          const newStack = new Stack()
          newStack.pop()
          expect(newStack.pop()).toEqual('NO data')
     })
})

describe('Queue Test' , () =>{

     it('Can successfully enqueue into a queue' , () =>{
          const newQ = new Queue()
          newQ.enqueue(10)
          expect(newQ.front).toEqual({"next": null, "value": 10})
     })
     it('Can successfully enqueue multiple values into a queue' , () =>{
          const newQ = new Queue()
          newQ.enqueue(10)
          newQ.enqueue(20)
          expect(newQ.front).toEqual({"next": {"next": null, "value": 20}, "value": 10})
     })
     it('Can successfully dequeue out of a queue the expected value' , () =>{
          const newQ = new Queue()
          newQ.enqueue(10)
          newQ.enqueue(20)
          newQ.dequeue()
          expect(newQ.front).toEqual({"next": null, "value": 20})
     })
     it('Can successfully peek into a queue, seeing the expected value' , () =>{
          const newQ = new Queue()
          newQ.enqueue(10)
          newQ.enqueue(20)
          expect(newQ.peek()).toEqual(10)
     })
     it('Can successfully empty a queue after multiple dequeues' , () =>{
          const newQ = new Queue()
          newQ.enqueue(10)
          newQ.enqueue(20)
          newQ.dequeue()
          newQ.dequeue()
          expect(newQ.front).toEqual(null)
     })
     it('Can successfully instantiate an empty queue' , () =>{
          const newQ = new Queue()

          expect(newQ instanceof Queue).toEqual(true)
     })
     it('Calling dequeue or peek on empty queue raises exception' , () =>{
          const newQ = new Queue()

          expect(newQ.dequeue()).toEqual('NO data')
     })

})
