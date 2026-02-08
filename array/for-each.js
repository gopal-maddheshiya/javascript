// forEach for object

let arr1 = [
  {
    name: "Gopal",
    course: "Btech"
  },
  {
    name: "Aadarsh",
    course: "Optometry"
  },
  {
    name: "Aadarsh2",
    course: "Pharmacy"
  }];


arr1.forEach((students) => {
  console.log(students.course);
});


// forEach 

let arr = [1, 2, 3, 4, 5];
arr.forEach((el) => {
  console.log(el);
});
arr.forEach(function (el) {
  console.log(el);
});

// let print = function(el){
//   console.log(el);
// }

// arr.forEach(print);