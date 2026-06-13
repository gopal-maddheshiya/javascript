// Q4. A string is called a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5. For a given string, print whether it is a golden string or not.

let str = "application";

if ((str[0] === "a" || str[0] === "A") && (str.length > 5)) {
  console.log("It's a Golden String");
} else {
  console.log("It's not a Golden String")
}