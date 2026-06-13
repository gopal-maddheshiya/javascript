// Declare your name as a string and print it's length in JS

let resultHTML = document.getElementById("result");
let checkButton = document.getElementById("checkBtn");

checkButton.addEventListener("click", function () {

  let name = prompt(`Enter you name`);

  resultHTML.textContent = `The length of the string is ${name.length}`;

  console.log(name.length);
})

