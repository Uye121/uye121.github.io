const projects = document.getElementsByTagName("figure");
const modals = document.getElementsByClassName("overlay");
const menuButton = document.getElementsByClassName("burger-icon");
let modalOn = false;

window.onload = function(event) {
  event.stopPropagation();
  console.log("window loaded");
  for(let i=0; i<projects.length; i++) {
    projects[i].onclick = function() {
      hideAllModals();
      openModal(i);
    }
  }

  menuButton[0].addEventListener("click", () => {
    let mainNav = document.getElementsByClassName("main-nav")[0];
    let burgerIcon = document.getElementsByClassName("burger-icon")[0];
    let navWrapper = document.getElementsByClassName("nav-wrapper")[0];
		if(mainNav.classList.contains("mobile-hide")) {
			mainNav.classList.remove("mobile-hide");
      mainNav.classList.add("mobile-show");
      burgerIcon.style.color = "black";
      // mainNav.style.opacity = 1.0;
		} else {
			mainNav.classList.add("mobile-hide");
      mainNav.classList.remove("mobile-show");
      burgerIcon.style.color = "white";
      // mainNav.style.opacity = 0.0;
		}
  });
}

// Broken; it activates right after modalOn becomes true
// window.onclick = function(event) {
//   console.log(event.target);
//   if(modalOn && (event.target.className != "overlay") || (event.target.parentElement.className != "overlay")) {
//     hideAllModals();
//   }
// }

function openModal(index) {
  projects[index].firstElementChild.style.opacity = 0.65;
  modals[index].style.display = "block";
  modalOn = true;
}

function hideAllModals() {
  for(let i=0; i<projects.length; i++) {
    modals[i].style.display = "none";
    projects[i].firstElementChild.style.opacity = 1;
  }
}
