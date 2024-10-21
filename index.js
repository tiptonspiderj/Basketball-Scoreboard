const home = document.getElementById("home-score")
const away = document.getElementById("away-score")

let homeScore = 0
let awayScore = 0


function homeadd1() {
    homeScore += 1
    home.textContent = homeScore
}

function homeadd2() {
    homeScore += 2
    home.textContent = homeScore
}

function homeadd3() {
    homeScore += 3
    home.textContent = homeScore
}

function awayadd1() {
    awayScore += 1
    away.textContent = awayScore
}

function awayadd2() {
    awayScore += 2
    away.textContent = awayScore
}

function awayadd3() {
    awayScore += 3
    away.textContent = awayScore
}

function resetScores() {
    homeScore = 0
    home.textContent = homeScore
    awayScore = 0
    away.textContent = awayScore
}