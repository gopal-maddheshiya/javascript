function isAdult(age) {
  if (age >= 18) {
    return "Adult";
    console.log("Adult");// Because of return statement further code will not implement;
  } else {
    return "Not Adult";
  }
}


let votingAge = isAdult(2);
console.log(votingAge);



// Return Statement return value, and it can be reuse and store.