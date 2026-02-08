let arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr.some((el) => {
  return el % 2 == 0;
});

console.log(arr1); 