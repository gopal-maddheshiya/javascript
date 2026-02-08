let toDo = [];

let req = prompt("Please enter your request");

while (true) {
  if (req == "quit") {
    console.log("quitting app");
    break;
  }
  if (req == "list") {
    console.log("________________")
    for (let i = 0; i < toDo.length; i++) {
      console.log(i, toDo[i]);
    }
    console.log("________________");
  } else if (req == "add") {
    let task = prompt("Please enter your task to add");
    toDo.push(task);
    console.log("task added");
  } else if (req == "delete") {
    let idx = prompt("Please enter the task to delete");
    toDo.splice(idx, 1);
    console.log("Selected task is deleted");
  }
  req = prompt("Please enter your request");
}