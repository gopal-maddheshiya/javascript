// Qs. Declare your first name as a string and print its first character.

let resultHTML = document.getElementById("result");
let checkButton = document.getElementById("checkBtn");

checkButton.addEventListener("click", function () {

  let name = prompt(`Enter your name`);

  resultHTML.textContent = `First charcter of the string is ${name.charAt(0)}`;
  
})