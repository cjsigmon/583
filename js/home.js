let launchBtn = document.getElementById('launch-btn');
let homescreen = document.getElementById('homescreen');

function launch() {
    fadeOutEffect(homescreen, 200);
}

function fadeOutEffect(element, duration) {
    let opacity = 1; // initial opacity
    const interval = 50; // in milliseconds
    const step = interval / duration; // calculate step for each interval

    const timer = setInterval(function() {
        if (opacity <= 0) {
            clearInterval(timer);
            element.style.display = 'none'; // hide the element after fade out
        } else {
            opacity -= step; // decrease opacity
            element.style.opacity = opacity;
        }
    }, interval);
}