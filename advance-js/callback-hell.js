h1 = document.querySelector("h1");

// By using promises

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color changed!");
    }, delay);
  })
}

changeColor("red", 1000)
  .then((resolve) => {
    console.log("Color is changed to red");
    return changeColor("blue", 1000)
  })
  .then((resolve) => {
    console.log("Color changed to blue");
    return changeColor("orange", 1000)
  })
  .then((resolve) => {
    console.log("Color changed to blue");
    return changeColor("yellow", 1000)
  })
  .then((resolve) => {
    console.log("Color changed to blue");
    return changeColor("green", 1000)
  })
  .then((resolve) => {
    console.log("Color changed to blue");
  })


// >>>>> IT'S A CALL BACK HELL

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });


// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Gopal Maddheshiya",
//   () => {
//     console.log("Data1 is saved to database");
//     savetoDb(
//       "Arun Maddheshiya",
//       () => {
//         console.log("Data2 is saved to database");
//         savetoDb(
//           "Priyanka Maddheshiya",
//           () => {
//             console.log("Data3 is saved to database");
//           }, () => {
//             console.log("Data3 is not saved due to weak connection speed");
//           })
//       },
//       () => {
//         console.log("Data2 is not save due to weak connection speed");
//       })
//   }, () => {
//     console.log("Data1 is not saved due to weak connection speed");
//   });


