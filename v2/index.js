const cells = document.getElementsByClassName("project-cell");
const modals = document.getElementsByClassName("overlay");
let modalOn = false;

window.onload = function() {
  console.log("window loaded");
  for(let i=0; i<cells.length; i++) {
    cells[i].onclick = function() {
      hideAllModals();
      cells[i].firstElementChild.style.opacity = 0.65;
      modals[i].style.display = "block";
      modalOn = true;
    }
  }
}

window.onclick = function(event) {
  console.log(event.target);
  if(modalOn && (event.target.className != "overlay") || (event.target.parentElement.className != "overlay")) {
    // hideAllModals();
    console.log("it should have worked");
  }
}

function hideAllModals() {
  for(let i=0; i<cells.length; i++) {
    modals[i].style.display = "none";
    cells[i].firstElementChild.style.opacity = 1;
  }
}
