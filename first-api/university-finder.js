let url2 = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let state = document.querySelector("input").value;
  console.log(state);
  let colArr1 = await getCollegeByState(state);
  show1(colArr1);

})


function show1(colArr1) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (let col1 of colArr1) {
    let li = document.createElement("li");
    li.innerText = col1.name;
    list.appendChild(li);
  }
}

async function getCollegeByState(state) {
  try {
    let res = await axios.get(url2 + state);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}




// // Get Universities name search by country.

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () =>{
//   let country = document.querySelector("input").value;
//   console.log(country);

//   let colArr = await getColleges(country);
//   show(colArr);
// });

// function show(colArr){
//   let list = document.querySelector("#list");
//   list.innerText = "";
//   for(col of colArr){
//     console.log(col.name);
//     let li = document.createElement("li");
//     li.innerText = col.name;
//     list.appendChild(li);
//   }
// }

// async function getColleges(country){
//   try{
//     let res = await axios.get(url + country);
//     return res.data;
//   } catch(err){
//     console.log("error", err);
//     return [];
//   }
// }










































