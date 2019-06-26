window.onload = function() {
    console.log("window loaded!");
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js');
        });
    }
}

window.onclick = function(event) {
    let proj = document.getElementsByClassName("proj");
    let projBackground = document.getElementById("projBackground");
    let navBar = document.getElementsByClassName('nav-modal')[1];
    let mContent = document.getElementById("modal-content");
    let navBarStyle = window.getComputedStyle(navBar);
    for(let i=0; i<proj.length; i++) {
        let pStyle = window.getComputedStyle(proj[i]);
        if(pStyle.getPropertyValue('display') == "block") {
            let height = proj[i].scrollHeight-parseInt(navBarStyle.getPropertyValue('padding-top'));
            projBackground.setAttribute("style", `height: ${height}px`);
        }
    }

    projBackground.onclick = function() {
        for(let i=0; i<proj.length; i++) {
            let pStyle = window.getComputedStyle(proj[i]);
            if(pStyle.getPropertyValue('display')  == "block") {
                closeModal(i);
            }
        }
    }
    mContent.onclick = function(event) {
        event.stopPropagation();
        if(event.target == mContent) {
            let i=0;
            mContent.childNodes.forEach((node) => {
                if(node.tagName) {
                    closeModal(i++);
                }
            });
        }
    }
}

window.onload = function() {
    let thumbnails = document.getElementsByClassName("thumbnail");
    for(let i=0; i<thumbnails.length; i++) {
        thumbnails[i].addEventListener('mouseover', function(event) {
            this.style.opacity = 0.9;
            this.style.cursor = "pointer";
            event.stopPropagation();
        });
        thumbnails[i].addEventListener('mouseleave', function(event) {
            this.style.opacity = 1;
            this.style.cursor = "default";
            event.stopPropagation();
        });
        thumbnails[i].addEventListener('click', function(event) {
            event.stopPropagation();
            openModal(i);
        });
    }
}

function openModal(projNum) {
    let proj = document.getElementsByClassName("proj");
    let projBackground = document.getElementById("projBackground");
    let compStyle = window.getComputedStyle(projBackground);

    if(compStyle.getPropertyValue('opacity') == "1") {
        proj[projNum].style.display = "block";
        projBackground.style.opacity = 0.5;
        let pStyle = window.getComputedStyle(proj[projNum]);
        let backHeight = parseInt(compStyle.getPropertyValue('height'));
        if(parseInt(pStyle.getPropertyValue('height')) < backHeight) {
            let navBar = document.getElementsByClassName('nav-modal')[0];
            let navBarStyle = window.getComputedStyle(navBar);
            backHeight += parseInt(navBarStyle.getPropertyValue('padding-top'));
            proj[projNum].style.height = `${backHeight}px`;
        }
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
    // let ytVid = document.getElementsByClassName("youtube-video");
    // ytVid[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    proj[projNum].style.display = "none";
    projBackground.style.opacity = 1;
    projBackground.setAttribute("height", "");
}

// Toggle between the nav bar pages
function toggleTab(section) {
    let navmodal = document.getElementsByClassName("nav-modal");
    let nav = document.getElementsByClassName("nav");
    let index;
    switch(section) {
        case "about":
        index = 0;
        break;
        case "projects":
        index = 1;
        break;
        case "skills":
        index = 2;
        break;
        case "resume":
        index = 3;
        break;
    }
    for(let i=0; i<navmodal.length; i++) {
        if(i != index) {
            navmodal[i].style.display = "none";
            nav[i].classList.remove("active");
        } else {
            nav[i].classList.add("active");
        }

    }
    navmodal[index].style.display = "block";
}
