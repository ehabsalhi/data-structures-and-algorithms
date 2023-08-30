const {Hash , Node} = require("./Hash_table");


describe('Hash table tests', () => {

     it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
          const newHash = new Hash(19)

          newHash.set('Ihab', 'salhi')
          
          expect(newHash.map[15].head.value['Ihab']).toBe( "salhi")
     })

     it('Retrieving based on a key returns the value stored', () => {
          const newHash = new Hash(19)

          newHash.set('Ihab', 'salhi')
          
          expect(newHash.get('Ihab').head).toEqual( new Node({'Ihab': 'salhi'} , null))
     })
     it('Successfully returns undefined for a key that does not exist in the hashtable', () => {
          const newHash = new Hash(19)

          newHash.set('Ihab', 'salhi')
          
          expect(newHash.get('anyThing')).toEqual(undefined)
     })
     it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
          const newHash = new Hash(19)

          newHash.set('Ihab', 'salhi')
          newHash.set('Ahmad', 'Hany')
          
          expect(newHash.keys()).toEqual(["Ahmad", "Ihab"])
     })
     it('Successfully handle a collision within the hashtable', () => {
          const newHash = new Hash(19)

          newHash.set('Ihab', 'salhi')
          newHash.set('Ihab', 'salhi')
                    
          let match = new Node({ 'Ihab': 'salhi' }, new Node({ 'Ihab': 'salhi' }, null))
          expect(newHash.get('Ihab').head.next).toEqual(match)
     })

     it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
          const newHash = new Hash(19)

          newHash.set('Ihab', 'salhi')
          newHash.set('Ihab', 'salhi')
                    
          expect(newHash.has('Ihab')).toEqual(true)
     })
     it('Successfully hash a key to an in-range value', () => {
          const newHash = new Hash(19)

          expect(newHash.hash('Ihab')).toEqual(15)
     })
})