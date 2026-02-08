let btn = document.querySelector("button");
 let url2 = "https://dog.ceo/api/breeds/image/random";
 
 btn.addEventListener("click", async () =>{
  let link = await getImage();
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
  console.log(link);
 })

 async function getImage(){
  try{
  let res = await axios.get(url2);
  return res.data.message;
  } catch (er) {
    return "/";
  }
 }
 
 // let btn = document.querySelector("button");
 // btn.addEventListener("click", async () =>{
 //   let fact = await getFacts();
 //   let p = documentquerySelector("#result");
 //   p.innerText = fact;
 // })
 
 // let url = "https://catfact.ninja/fact";
 
 // async function getFacts() {
 //   try{
 //     let res = await axios.get(url);
 //     return res.data.fact;
 //   } catch (er){
 //     console.log("ERROR: ", er);
 //     return "No fact Found";
 //   }
 // }
















