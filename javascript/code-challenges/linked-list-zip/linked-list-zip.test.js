const { LL_Three, LL_Tow, LinkedList } = require("./linked-list-zip");


let LL_2 = new LL_Tow()
let LL_3 = new LL_Three()
let llOne = new LinkedList()



llOne.addOne(10)
llOne.addOne(20)
llOne.addOne(30)
llOne.addOne(40)
llOne.addOne(50)
llOne.addOne(60)


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


describe('Zip LL test' , () =>{

     it('test 1' , () =>{
          expect(LL_3.toString()).toBe('60 => 77 => 50 => 88 => 40 => 99 => 30 => 20 => 10 => null')
     })
})