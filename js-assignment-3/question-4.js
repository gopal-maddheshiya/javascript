// Q4. Write a JavaScript program to test whether the character at the given index is lowercase.

function isLowerCaseAt(str, index){
  let char = str.charAt(index);

  if(char >= 'a' && char <= 'z'){
    return true;
  }
  return false;
}

let text = "GopalMaddheshiya";

console.log(isLowerCaseAt(text, 0));
console.log(isLowerCaseAt(text, 3));