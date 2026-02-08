let obj = {
  email: "ironman@gmail.com",
  password: "abcd",
};
let dataCopy = {...obj, id: 101, country: "India"};
console.log(obj);
console.log(dataCopy);