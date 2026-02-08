let btn = document.querySelector("Button");
btn.addEventListener("click", async () => {
  let fact = await getFacts();
  let p = document.querySelector("#result");
  p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    return data.fact;
  } catch (err) {
    console.log("error: ", err);
  }

}


