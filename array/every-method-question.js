let arr = [20, 40, 50, 30, 60, 70];
let multipleOf10 = arr.every((el)=>{
  return el % 10 == 0;
});
console.log(multipleOf10);