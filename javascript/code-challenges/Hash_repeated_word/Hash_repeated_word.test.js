const { Hash_Word } = require("./Hash_repeated_word");

describe('', () => {
     it('return the first repeated word', () => {
          let newHash = new Hash_Word()
          let str = 'Once upon a time, there was a brave princess who'
          expect(newHash.repeated(str)).toBe('a')
          expect(newHash.repeated(null)).toBe('please enter str')
          expect(newHash.repeated('a b c')).toBe('No data repeated')
     })
})