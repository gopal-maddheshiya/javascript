

let resultHTML = document.getElementById("result");
let checkButton = document.getElementById("checkBtn");

checkButton.addEventListener("click", function () {

  let str = prompt("Please enter a string.");

  if (str.length == 0) {
    resultHTML.textContent = `String is empty`;
    console.log("String is empty");

  } else {
    resultHTML.textContent = `String is not empty and it's length is ${str.length}`;
    console.log("String is not empty");
  }

})

