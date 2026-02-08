let url = "https://catfact.ninja/fact";


fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data1) => {
    console.log("DATA1 is: ", data1.fact);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log("DATA2 is : ", data2.fact);
  })
  .catch((err) => {
    console.log("ERROR : ", err);
  })

console.log("Gopal")