let guess = Number(prompt("Guess the number"));

let random = Math.floor(Math.random() * 100) + 1;

while (guess !== random) {
  if (guess < random) {
    alert("You guessed a smallest number");
  } else {
    alert("You guessed a greater number");
  }
  guess = Number(prompt("Please guess again a right number"));
}

console.log("You guess right number!, the number is: " + random);