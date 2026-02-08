async function greet() {
  // throw "error 404 not found";
  return 5;
}

greet()
  .then((result) => {
    console.log("Problem resolved");
    console.log("The result is : ", result)
  })
  .catch((err) => {
    console.log("Promise was rejected with err: ", err);
  })


// Asyn can be use in arrow function

let hello = async () => {
  return 143;
}