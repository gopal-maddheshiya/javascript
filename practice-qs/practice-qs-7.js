let arr = [2, 5, 6, 7, 33, 34, 54];

// let max = -1;

// for(let i=0; i<arr.length; i++){
//   if(max < arr[i]){
//     max = arr[i];
//   }
// }
// console.log(max);

let max = arr.reduce((result, el) => {
  if (result < el) {
    return el;
  } else {
    return max;
  }
});

console.log(max);