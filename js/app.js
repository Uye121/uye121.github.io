window.onload = function() {
    let span = document.getElementsByClassName("close");
    let webProj = document.getElementsByClassName("web-proj");
    let thumbnail = document.getElementsByClassName("thumbnail");

    for(let i=0; i<thumbnail.length; i++) {
        thumbnail[i].onclick = function() {
            showModal(this.childNodes[0].id);
        }
    }
}

window.onclick = function(event) {
    let modal = document.getElementsByClassName("web-proj");

}

function closeModal(projNum) {
    let proj = document.getElementsByClassName("web-proj");
    proj[projNum].style.display = "none";
}

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

function showModal(proj) {
    let wProj = document.getElementsByClassName("web-proj");
    let mContent = document.getElementsByClassName("modal-content");
    for(let i=0; i<mContent.length; i++) {
        mContent[i].style.display = "block";
    }
    switch(proj) {
        case "Clostat":
        wProj[0].style.display = "block";
        break;
        case "Markit":
        wProj[1].style.display = "block";
        break;
    }
}



