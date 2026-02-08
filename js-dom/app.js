let mainImg = document.querySelector("#mainImg");
let images = document.querySelectorAll(".oldImg");

for (let img of images) {
  img.onclick = function () {
    mainImg.src = img.src;
  };
}
