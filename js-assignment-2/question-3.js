// Q3. Write a switch statement to print the months in a quarter.

// Quarter 1: January, February, March
// Quarter 2: April, May, June
// Quarter 3: July, August, September
// Quarter 4: October, November, December

let checkButton = document.getElementById("checkBtn");

checkButton.addEventListener("click", function () {
  let quartor = parseInt(prompt("Enter your number: "));

  let resultHTML = document.getElementById("result");

  switch (quartor) {
    case 1:
      resultHTML.textContent = `January, February, March`;
      console.log(`January, February, March`);
      break;

    case 2:
      resultHTML.textContent = `April, May, June`;
      console.log(`April, May, June`);
      break;

    case 3:
      resultHTML.textContent = `July, August, September`;
      console.log(`July, August, September`);
      break;

    case 4:
      resultHTML.textContent = `October, November, December`;
      console.log(`October, November, December`);
      break;

    default:
      resultHTML.textContent = `Invalid Qurarter Number`;
      console.log(`Invalid Qurarter Number`);
      break;
  }
})

