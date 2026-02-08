const student = {
  name: "Gopal",
  age: 22,
  math: 54,
  pps: 85,
  js: 90,
  avg() {
    let average = (this.math + this.pps + this.js) / 3; // this keyword is used for access the data from object in a function
    console.log(average);
  }
}

// student.avg();
function avg() {
  console.log(this);
}

