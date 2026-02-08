let favMovie = "Salaar";
let guess = prompt("Guess my favorite movie");
while ((guess != favMovie) && (guess != "quite")) {
  alert("Wrong guess. Please try again");
  guess = prompt("Guess again.");
}

if (favMovie == guess) {
  alert("Congrats. You guess right");
}