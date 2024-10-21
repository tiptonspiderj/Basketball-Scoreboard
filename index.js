const home = document.getElementById("home-score")
const away = document.getElementById("away-score")

let homeScore = 0
let awayScore = 0


function homeadd(increment) {
    homeScore += increment
    home.textContent = homeScore
}

function awayadd(increment) {
    awayScore += increment
    away.textContent = awayScore
}

function resetScores() {
    homeScore = 0
    home.textContent = homeScore
    awayScore = 0
    away.textContent = awayScore
}