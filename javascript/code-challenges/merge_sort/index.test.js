const Mergesort = require(".")

describe('Testing Sorted Insertion ', () => {

    it('Returns a sorted array from the input array', () => { 
     const arr = [8, 4, 23, 42, 16, 15];
     Mergesort(arr);

     expect(arr).toEqual([ 4, 8, 15, 16, 23, 42 ])
    })
})