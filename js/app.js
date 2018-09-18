window.onclick = function(event) {
    let proj = document.getElementsByClassName("proj");
    let projBackground = document.getElementById("projBackground");
    let navBar = document.getElementsByClassName('nav-modal')[1];
    let navBarStyle = window.getComputedStyle(navBar);
    for(let i=0; i<proj.length; i++) {
        let pStyle = window.getComputedStyle(proj[i]);
        if(pStyle.getPropertyValue('display') == "block") {
            let height = proj[i].scrollHeight-parseInt(navBarStyle.getPropertyValue('padding-top'));
            projBackground.setAttribute("style", `height: ${height}px`);
        }
    }

    projBackground.onclick = function() {
        console.log("gone");
    }
}

window.onload = function() {
    let thumbnails = document.getElementsByClassName("thumbnail");
    for(let i=0; i<thumbnails.length; i++) {
        thumbnails[i].addEventListener('mouseover', function(event) {
            this.style.opacity = 0.6;
            this.style.cursor = "pointer";
            event.stopPropagation();
        });
        thumbnails[i].addEventListener('mouseleave', function(event) {
            this.style.opacity = 1;
            this.style.cursor = "default";
            event.stopPropagation();
        });
    }
}

function openModal(projNum) {
    console.log("open modal");
    let proj = document.getElementsByClassName("proj");
    let projBackground = document.getElementById("projBackground");
    let compStyle = window.getComputedStyle(projBackground);
    if(compStyle.getPropertyValue('opacity') == "1") {
        proj[projNum].style.display = "block";
        projBackground.style.opacity = 0.5;
        scrollToTop(1);
    }
}

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}

function closeModal(projNum) {
    let proj = document.getElementsByClassName("proj");
    let projBackground = document.getElementById("projBackground");
    proj[projNum].style.display = "none";
    projBackground.style.opacity = 1;
}

// Toggle between the nav bar pages
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
    let mContent = document.getElementById("modal-content");
    mContent.style.display = "block";
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
