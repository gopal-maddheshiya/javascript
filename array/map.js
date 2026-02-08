let students = [
  {
    name: "Gopal",
    marks: 95,
  },
  {
    name: "Aadarsh",
    marks: 96,
  },
  {
    name: "Sandesh",
    marks: 94,
  },
];

let gpa = students.map((el) => {
  return el.marks / 10;
});

console.log(gpa);