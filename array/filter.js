let nums  = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let even = nums.filter((num) => (num%2 == 0));
let greater = nums.filter((el)=>{
  return el > 5;
})
console.log(greater);
console.log(even);