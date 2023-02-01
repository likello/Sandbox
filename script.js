const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
var videoList = document.getElementsByTagName("video");

function reducedMotionCheck() {
    if (motionQuery.matches) {
        for (var i = 0; i < videoList.length; i++) {
            videoList[i].pause();
            console.log('the video is paused');
        }

    }
    else {
        for (var i = 0; i < videoList.length; i++) {
            videoList[i].play();
            console.log('the video is playing');
        }

    }
}
reducedMotionCheck();
motionQuery.addEventListener('change', reducedMotionCheck); 
