window.onclick = function(event) {
    if(event.target.className != "thumbnail" && event.target.tagName.toLowerCase() != "img") {
        let proj = document.getElementsByClassName("proj");
        for(let i=0; i<proj.length; i++) {
            proj[i].style.display = "none";
        }
    }
}

function openModal(projNum) {
    let proj = document.getElementsByClassName("proj");
    proj[projNum].style.display = "block";
}

function closeModal(projNum) {
    let proj = document.getElementsByClassName("proj");
    proj[projNum].style.display = "none";
}

function toggleTab(section) {
    let navmodal = document.getElementsByClassName("nav-modal");
    console.log(navmodal);
    let index;
    switch(section) {
        case "about":
        index = 0;
        break;
        case "projects":
        index = 1;
        break;
        case "resume":
        index = 2;
        break;
    }
    for(let i=0; i<navmodal.length; i++) {
        if(i != index) navmodal[i].style.display = "none";
    }
    console.log(navmodal[index]);
    navmodal[index].style.display = "block";
}

function showModal(proj) {
    let project = document.getElementsByClassName("proj");
    let mContent = document.getElementsByClassName("modal-content");
    for(let i=0; i<mContent.length; i++) {
        mContent[i].style.display = "block";
    }
    switch(proj) {
        case "Clostat":
        project[0].style.display = "block";
        break;
        case "Markit":
        project[1].style.display = "block";
        break;
        case "AppName":
        project[2].style.display = "block";
        break;
    }
}



