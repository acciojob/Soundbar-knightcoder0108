//your JS code here. If required.
let currentSound = null;

function playSound(name) {
    stopSound();
    currentSound = new Audio(`sounds/${name}.mp3`);
    currentSound.play();
}

function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        currentSound = null;
    }
}
