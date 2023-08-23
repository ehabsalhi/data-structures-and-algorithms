function Mergesort(arr) {
     let n = arr.length;
   
     if (n > 1) {
       let mid = n / 2;
       let left = arr.slice(0, mid);
       let right = arr.slice(mid, n);
       Mergesort(left);
       Mergesort(right);
       Merge(left, right, arr);
     }
   }
   
   function Merge(left, right, arr) {
     let i = 0;
     let j = 0;
     let k = 0;
   
     while (i < left.length && j < right.length) {
       if (left[i] <= right[j]) {
         arr[k] = left[i];
         i++;
       } else {
         arr[k] = right[j];
         j = j + 1;
       }
       k++;
     }
   
     if (i === left.length) {
       let rightRemain = right.slice(j);
       arr = arr.splice(k, arr.length - k, ...rightRemain);
     }
     
     else {
       let leftRemain = left.slice(i);
       arr = arr.splice(k, arr.length - k, ...leftRemain);
     }
   }

   module.exports = Mergesort