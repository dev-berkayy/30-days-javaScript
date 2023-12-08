window.addEventListener("keydown", function (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;


    audio.play();
});


