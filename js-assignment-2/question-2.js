// Q2. Take the user's name and age as input using prompts. Then display the following statement to the user in an alert (by substituting their name and age), 

// "[name] is [age] years old."

let checkButton = document.getElementById("checkBtn");
let resultHTML = document.getElementById("result");

checkButton.addEventListener("click", function () {

  let fname = prompt(`Enter your first name.`);
  let lname = prompt(`Enter your last name.`);

  let age = prompt(`Enter your age.`)

  let fullName = fname + " " + lname;

  resultHTML.textContent = `${fullName} is ${age} years old.`;

});

