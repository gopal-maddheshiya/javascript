let input = prompt("Enter your number.");
input = parseInt(input);
for (let i = input; i <= input * 10; i = i + input) {
  console.log(i);
}