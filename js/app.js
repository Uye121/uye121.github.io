function toggleTab(section) {
    let modal = document.getElementsByClassName("modal");
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
    for(let i=0; i<modal.length; i++) {
        if(i != index) modal[i].style.display = "none";
    }
    modal[index].style.display = "block";
}


// const navModals = document.getElementsByClassName("nav-modal");
