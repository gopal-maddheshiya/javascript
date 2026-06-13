// Q5. Write a program to find the largest of three numbers.

let resultHTML = document.getElementById("result");
let checkButton = document.getElementById("checkBtn");

checkButton.addEventListener("click", function () {

  let firstNum = +prompt("Enter first Number");
  let secondNum = +prompt("Enter second Number");
  let thirdNum = +prompt("Enter third Number");

  if ((firstNum > secondNum) && (firstNum > thirdNum)) {
    resultHTML.textContent = `First Number ${firstNum} is highest from your given three numbers.`

  } else if ((secondNum > firstNum) && (secondNum > thirdNum)) {
    resultHTML.textContent = `Second Number ${secondNum} is highest from your given three numbers.`;

  } else {
    resultHTML.textContent = `Third Number ${thirdNum} is highest from your given three numbers.`;
  }
});

