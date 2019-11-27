window.addEventListener('keydown', (e) => {
    const divs = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (divs.length < 1) {
        return
    } else {
        audio.play()
    }
    divs.forEach(div => div.classList.add("playing"))
})