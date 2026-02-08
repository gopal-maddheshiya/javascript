let firstNum = +prompt("Enter first Number");
let secondNum = +prompt("Enter second Number");
let thirdNum = +prompt("Enter third Number");

if ((firstNum > secondNum) && (firstNum > thirdNum)) {
  alert("First Number is highest from your given three numbers.");
} else if ((secondNum > firstNum) && (secondNum > thirdNum)) {
  alert("Second Number is highest from your given three numbers.")
} else {
  alert("Third Number is highest from your given three numbers.")
}