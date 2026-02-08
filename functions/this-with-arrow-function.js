const student = {
  name: "gopal",
  marks: 98,
  prop: this, // global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); // parent's scope -> windoww
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // Student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // Window
    }, 2000);
  }
}


student.getInfo1();