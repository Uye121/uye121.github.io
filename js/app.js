window.onload = function() {
    console.log("window loaded!");
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
        //   navigator.serviceWorker.register('/sw.js');
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                registration.unregister()
           }}).catch(function(err) {
                console.log("Service Worker unregistration failed: ", err);
           })
        });
    }
}