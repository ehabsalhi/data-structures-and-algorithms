const movies = [
     {
       _id: '5b21ca3eeb7f6fbccd471815',
       title: 'The Terminator',
       genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
       numberInStock: 6,
       year: 2020,
       dailyRentalRate: 2.5,
     },
     {
       _id: '5b21ca3eeb7f6fbccd471816',
       title: 'Die Hard',
       genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
       numberInStock: 5,
       year: 2017,
       dailyRentalRate: 2.5,
     },
     {
       _id: '5b21ca3eeb7f6fbccd471817',
       title: 'Get Out',
       genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
       numberInStock: 8,
       year: 2018,
       dailyRentalRate: 3.5,
     },
     {
       _id: '5b21ca3eeb7f6fbccd471819',
       title: 'An BOTrip to Italy',
       genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
       numberInStock: 7,
       year: 2019,
       dailyRentalRate: 3.5,
     },
   ];
   
   function sortByChar(arr) {
     let regx = /^[The|A|An]/g;
   
     let char = arr.sort((a, b) => {
       if (regx.test(a.title)) {
         return a.title
           .split(' ')
           .slice(1)
           .join(' ')
           .localeCompare(b.title.split(' ').slice(1).join(' '));
       } else {
         return a.title.localeCompare(b.title);
       }
     });
     return char;
   }
   
   function sortByYear(arr) {
     return arr.sort((a, b) => a.year - b.year);
   }

module.exports = {
     sortByChar,
     sortByYear,
     movies
}