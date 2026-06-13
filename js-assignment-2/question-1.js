// Question Number 1
// Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.

let checkButton = document.getElementById("checkBtn");
let resultHTML = document.getElementById("result");

checkButton.addEventListener("click", function () {

  let num = prompt(`Enter the number`);
  
  if (num % 10 === 0) {
    resultHTML.textContent = `Good`;
    console.log("Good");
  } else {
    resultHTML.textContent = `Bad`;
    console.log("Bad");
  }

})


