let a = +prompt("Enter the first number: ");
let b = +prompt("Enter the second number: ");

if (a % 10 === b % 10) {
  console.log("Last digit of the given number is same");
} else {
  console.log("Last digit of the number is not same.")
}