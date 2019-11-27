window.addEventListener('keydown', (e) => {
    const divs = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Validate if we keydown other buttons on keyboard
    if (divs.length < 1) {
        return
    } else {
        audio.play()
    }

    // Add class for each div with active keydown
    divs.forEach(div => div.classList.add("playing"));

    // Remove class "playing" after end of transition
    divs.forEach(div => div.addEventListener('transitionend', () => {
        div.classList.remove("playing");
    }))
})