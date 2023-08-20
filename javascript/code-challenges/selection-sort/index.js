function sortedList(arr, value) {
     let i = 0
     while (value > arr[i]) {
          i++
     }
     let temp = 0
     while (i < arr.length) { // 2 3
          temp = arr[i] // 23 42
          
          arr[i] = value // 4 8 16 23
          
          value = temp // 23 42
          i++
     }
     console.log(arr); 
     arr.push(value)
}

function insertionSort(arr) {
     let sorted = []
     sorted[0] = arr[0]

     for (let i = 1; i < arr.length; i++){
          sortedList(sorted, arr[i])
     }
     return sorted
}


module.exports = {
     insertionSort,
     sortedList
}