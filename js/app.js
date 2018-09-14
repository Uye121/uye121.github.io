function toggleTab(section) {
    let navmodal = document.getElementsByClassName("nav-modal");
    let index;
    switch(section) {
        case "about":
        index = 0;
        break;
        case "projects":
        index = 1;
        break;
        case "experience":
        index = 2;
        break;
        case "involvement":
        index = 3;
        break;
    }
    for(let i=0; i<navmodal.length; i++) {
        if(i != index) navmodal[i].style.display = "none";
    }
    navmodal[index].style.display = "block";
}


// const navModals = document.getElementsByClassName("nav-modal");
