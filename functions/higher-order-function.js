function multipleGreet(func, count) { // Higher order function.
  for (let i = 1; i <= count; i++) {
    func();
  }
}

const greet = function () {
  console.log("hello!");

}

console.log(multipleGreet(greet, 100));
