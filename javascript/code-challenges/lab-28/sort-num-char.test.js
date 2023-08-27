const { sortByChar  , sortByYear ,movies} = require(".");


describe('test cahr and num', () => {
     it('test cahr', () => {
          
          expect(sortByChar(movies)[0].title).toEqual('An BOTrip to Italy')
     })
     it('test num', () => {
          
          expect(sortByYear(movies)[0].year).toEqual(2017)
     })
})
