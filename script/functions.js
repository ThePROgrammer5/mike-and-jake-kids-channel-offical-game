function playSound(sound) {
    var audio = new Audio(sound);
    audio.play();
}

function random(max) {
    return Math.floor(Math.random() * max);
}