//Q6. Write a program to check whether two numbers have the same last digit.

// Example: 32 and 47852 have the same last digit, i.e., 2.

let resultHTML = document.getElementById("result");
let checkButton = document.getElementById("checkBtn");

checkButton.addEventListener("click", function () {

  let a = +prompt("Enter the first number: ");
  let b = +prompt("Enter the second number: ");

  if (a % 10 === b % 10) {
    resultHTML.textContent = `Last digit of the given number is same`;
    console.log("Last digit of the given number is same");

  } else {
    resultHTML.textContent = `Last digit of the number is not same.`;
    console.log("Last digit of the number is not same.");
  }

});

