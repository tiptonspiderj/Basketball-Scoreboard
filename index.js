let homescore = 0
let guestscore = 0


function homeadd1() {
    homescore += 1
    document.getElementById("home-score").textContent = homescore
}

function homeadd2() {
    homescore += 2
    document.getElementById("home-score").textContent = homescore
}

function homeadd3() {
    homescore += 3
    document.getElementById("home-score").textContent = homescore
}

function guestadd1() {
    guestscore += 1
    document.getElementById("guest-score").textContent = guestscore
}

function guestadd2() {
    guestscore += 2
    document.getElementById("guest-score").textContent = guestscore
}

function guestadd3() {
    guestscore += 3
    document.getElementById("guest-score").textContent = guestscore
}