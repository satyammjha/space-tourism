let hamburgericon = document.getElementById("hamburger");
let hamburgerlines = document.querySelector(".hamburger_lines");
let navlinks = document.querySelector(".navlinks");

hamburgericon.addEventListener("click", displaymenu);

function displaymenu() {
  if (hamburgericon.children[1].style.display != "none") {
    hamburgericon.style.zIndex = "1";
    hamburgerlines.style.marginBottom = "0px";
    hamburgericon.children[1].style.display = "none";
    hamburgericon.children[0].style.transform = "rotate(45deg)";
    hamburgericon.children[2].style.transform = "rotate(-45deg)";
    hamburgericon.children[2].style.marginTop = "-4%";
    navlinks.style.display = "block";
  } else {
    hamburgerlines.style.marginBottom = "8px";
    hamburgericon.children[0].style.transform = "rotate(0deg)";
    hamburgericon.children[2].style.transform = "rotate(0deg)";
    hamburgericon.children[1].style.display = "block";
    navlinks.style.display = "none";
  }
}
