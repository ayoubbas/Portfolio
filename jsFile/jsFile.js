let whiteLine = Array.from(document.querySelectorAll(".whiteline"));
let project = Array.from(document.querySelectorAll(".project"));
let skill = document.querySelector(".skill");
let showMore = document.querySelector(".showMore");
let showLess = document.querySelector(".showLess");
let numOfPro = document.querySelectorAll(".numOfPro");
console.log(numOfPro.length);
// let popup = document.getElementById("popup");
let skillLocate = whiteLine[3].offsetTop;

for (let i = 0; i <= numOfPro.length - 1; i++) {
  numOfPro[i].innerHTML = i + 1;
}

function zzz() {
  if (window.pageYOffset >= skillLocate) {
    whiteLine[0].classList.add("html");
    whiteLine[1].classList.add("css");
    whiteLine[2].classList.add("javascript");
    whiteLine[3].classList.add("bootstrap");
    whiteLine[4].classList.add("react");
    whiteLine[5].classList.add("photoshop");
  } else {
    // console.log(window.pageYOffset);
  }
}
function openPopup(project) {
  var popup = document.getElementById("popup");
  var popupContent = popup.querySelector(".popup-content");
  var img = popupContent.querySelector("img");

  project.scrollTop = 0;
  img.src = project.querySelector("img").src;
  popup.style.display = "block";
}

document.getElementById("popup").addEventListener("click", function () {
  this.style.display = "none";
});



//  show and less projects  !!!!!!!!
for (let proje=6 ; proje<= project.length-1 ; proje++) {
  project[proje].classList.add("d-none");
}

showMore.addEventListener("click" , function(){
  showLess.classList.remove("d-none")
  showMore.classList.add("d-none")
  for (let proje = 6; proje <= project.length-1 ; proje++) {
    project[proje].classList.remove("d-none");
  }
})
showLess.addEventListener("click" , function(){
  showLess.classList.add("d-none")
  showMore.classList.remove("d-none")
  for (let proje = 6; proje <= project.length-1 ; proje++) {
    project[proje].classList.add("d-none");
  }
})