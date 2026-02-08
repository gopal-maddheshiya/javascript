// Promises

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success: data is saved");
    } else {
      reject("Failure: weak connection");
    }
  });
}


// then() & catch() || Promises Chaining

savetoDb("Gopal Maddheshiya")
  .then((result) => {
    console.log("Data1 is saved");
    console.log("Result of promise: ", result);
    return savetoDb("Arun Maddheshiya")
  })
  .then((result) => {
    console.log("Data2 is saved");
    console.log("Result of promise: ", result);
    return savetoDb("Priyanaka Maddheshiya")
  })
  .then((result) => {
    console.log("Data3 is saved");
    console.log("Result of promise: ", result);
    return savetoDb("Ashok Maddheshiya")
  })
  .then((result) => {
    console.log("Data4 is saved");
    console.log("Result of promise: ", result);
    return savetoDb("Vimlavati Maddheshiya")
  })
  .then((result) => {
    console.log("Data5 is saved");
    console.log("Result of promise: ", result);
  })
  .catch((error) => {
    console.log("Data is rejected");
    console.log("Error of promise: ", error);
  })

