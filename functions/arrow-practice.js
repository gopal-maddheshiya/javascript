// Question 1 = Write an arrow funtion that returns the squre of a number 'n'.

const sqr = (n) => {
  console.log(n * n);
}

sqr(25);

// Question 2 = Write a function that prints "Hello World" 5 times at intervals of 2x each.

let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
}, 11000);