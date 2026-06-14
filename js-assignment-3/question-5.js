// Q5. Write a JavaScript program to strip leading and trailing spaces from a string.

let resultHTML1 = document.getElementById("result1");
let resultHTML2 = document.getElementById("result2");
let trimButton = document.getElementById("trimBtn");

trimButton.addEventListener("click", function () {

  let str = prompt("please enter a string");

  resultHTML1.textContent = `Original string is "${str}"`;
  console.log(`original string = ${str}`);

  resultHTML2.textContent = `String without spaces ${str.trim()}`;
  console.log(`string without spaces = ${str.trim()}`);

});
