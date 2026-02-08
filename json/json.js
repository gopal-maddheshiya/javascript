let Jsonres = `{
  "id": 3,
  "joke": "Why don’t programmers like nature? It has too many bugs.",
  "category": "Programming"
}`

// JSON to Js object

let jsontoObj = JSON.parse(Jsonres);
console.log(jsontoObj);


let object = {
  name: "Gopal maddheshiya",
  age: 22
}

// Js object to JSON

let objToJson = JSON.stringify(object);
console.log(objToJson);