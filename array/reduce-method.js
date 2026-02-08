let arr = [1, 2, 3, 4, 5];
let arr1 = arr.reduce((result, el) => {
  return result + el;
}, 0);
console.log(arr1);