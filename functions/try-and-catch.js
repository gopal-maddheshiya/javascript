// We use try and catch for error handling

console.log('hello1');
console.log('hello1');
console.log('hello1');
// console.log(a);           // ath here we got an error, uncought undefined variable, 
// and after that error no any code execute further, and it crash the page, 
// for that reason we use try and catch keyword, which first tested by try and then throw to the catch after finding 
// an error, after that the code is execute properly till any error not found.
try {
   console.log(a);
} catch (err) {
   console.log("error found....");
}
console.log("hello2");
console.log("hello2");
console.log("hello2"); 