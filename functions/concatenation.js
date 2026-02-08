let arr = ["Gopal", "Priyanak", "Arun"];


function family(member) {
  let result = "";
  for (let i = 0; i < member.length; i++) {
    result += member[i];
  }

  return result;
}

let concate = family(arr);
console.log(concate);