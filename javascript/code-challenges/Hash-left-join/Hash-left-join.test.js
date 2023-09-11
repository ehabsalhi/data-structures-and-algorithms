const Hash_left_join = require("./Hash-left-join")

describe('Hash table tests', () => {

     it('', () => {
          let Hach_1 = new Hash_left_join(10)
          let Hash_2 = new Hash_left_join(10)


          Hach_1.set('diligent', 'employed')
          Hach_1.set('fond', 'enamored')
          Hach_1.set('guide', 'usher')
          Hach_1.set('outfit', 'garb')
          Hach_1.set('wrath', 'anger')
          
          Hash_2.set('fond', 'averse')
          Hash_2.set('diligent', 'idle')
          Hash_2.set('guide', 'follow')
          Hash_2.set('wrath', 'delight')
          Hash_2.set('flow', 'jam')
          
          Hach_1.left_join(Hach_1, Hash_2)
          
          let value = [
               ["wrath", "anger", "delight"],
               ["diligent", "employed", "idle"],
               ["outfit", "garb", null],
               ["guide", "usher", "follow"],
               ["fond", "enamored", "averse"]
          ]
          
          expect(Hach_1.left_join(Hach_1 , Hash_2)).toEqual(value)
     })

})