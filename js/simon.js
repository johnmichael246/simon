
/*----- app's state (variables) -----*/
let pattern = []
let playerMoves = []
let lose = false
let tickTock = null
let score = 0
let hiScore = localStorage.getItem("hiScore", score) || 0
$('LS').html(hiScore)
let counter = 1
let disable = 750
let scoreWrapper = document.getElementById('score')
let hiScoreWrapper = document.getElementById('hiScore')
let countWrapper = document.getElementById('count')
const $actionButton = $("#start-btn")
const $playCell = $('.circle')
/*----- event listeners -----*/  
$actionButton.on('click', initiateCountDown)
/*----- functions -----*/
function reinitializeState() {
    pattern = []
    playerMoves = []
    lose = false
    score = 0
    tickTock = null
    hiScore = localStorage.getItem("hiScore",score) || 0
    counter = 1
    disable = 750
    stopAllTimeouts()
    initiateCountDown()
    render()
}

function render() {
    playerMoves = []
    renderScore()
    renderCount()
}

function renderScore() {
    scoreWrapper.innerText = `Score ${score}`
    hiScoreWrapper.innerText = `High Score ${hiScore}`
}
function renderCount() {
    countWrapper.innerText = `Round ${counter}`
}

function getRandomInt() {
    const min = 0;
    const max = 4;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function addPattern() {
    let endTimer = 750
    let startTimer = 0
    counter += 1
    disableClickEvent()
    pattern.push(getRandomInt())
    pattern.forEach((elem, index) => {
        let $playCell = $(`#${elem}`)
        setTimeout(() => {
            let audio = document.getElementById(`audio${elem}`)
            audio.startTime = 0
            audio.play()
            $playCell.css({ opacity:1 }).addClass('pulse')
        }, startTimer)
        startTimer +=800;
        setTimeout(() => {
            $playCell.css({ opacity:.6 }).removeClass('pulse')
        }, endTimer)
        endTimer += 750
        if (index === pattern.length - 1) tickTock = setTimeout(timesUp, endTimer + 3000)
    })
    startTimer = 0
    endTimer = 750
}

function timesUp() {
    gameOver()
}

function colorSelect() {
    clearTimeout(tickTock)
    if (lose) return
    playerMoves.push(this.id)
    audio = document.getElementById(`audio${this.id}`)
    audio.startTime = 0
    audio.play()
    $(this).css({ opacity: 1 })
    setTimeout(() => {
        $playCell.css({ opacity: .6 })
    },750)
    playersMove()    
}
function playersMove() {
    playerMoves.forEach((_, index) => {
        if (playerMoves[index] != pattern[index]) { 
            return gameOver()
        }
    })
    if (playerMoves.length < pattern.length) {
        tickTock = setTimeout(timesUp, 3000)
        return
    }
    if (!lose) {
        updateScore()
        render()
        setTimeout(() => {
            addPattern()
        }, 1500)
    }
};
function updateScore() {
    score += 10
    if (hiScore < score) {
        hiScore = score
        window.localStorage.setItem("hiScore", score)
    }
}
function initiateCountDown() {
    let count = 3
    $actionButton.html("Ready?").off('click')
    let countdown = setInterval(() => {
        let countSound = document.getElementById('beeper')
        countSound.play()
        $actionButton.html(count)
        count -= 1
        if (count < 0) {
            clearInterval(countdown)
            $actionButton.html("Go")
            $playCell.on('click', colorSelect)
            lose = false
            renderCount()
            addPattern()
        }
    },1000)
};
function gameOver() {
    lose = true
    $playCell.off('click')
    stopAllTimeouts()
    loseFlash()
    document.getElementById('start-btn').innerText = 'Restart'
    $actionButton.on('click', reinitializeState)
    clearInterval(tickTock)
}
function loseFlash() {
    let loseAnimationCount = 3
    startTime = 0
    endTime = 750
    let loseColors = setInterval(() => {
        setTimeout(() => {
            let endBeep = document.getElementById("losebeep")
            endBeep.play()
            $playCell.css({opacity:1}).removeClass('scale-in').addClass('scale-out pulse')
        }, startTime)
        startTime += 800
        setTimeout(() => {
            $playCell.css({opacity:.6}).removeClass('scale-out pulse').addClass('scale-in')
        }, endTime)
        endTime += 750
        loseAnimationCount -= 1
        if (loseAnimationCount <= 0) {
            clearInterval(loseColors)
        }
    })
    startTime = 0
    endTime = 750
}

function disableClickEvent() {
    $playCell.off('click')
    setTimeout(() => {
        $playCell.on('click', colorSelect)
    }, disable)
    disable += 750
}

function stopAllTimeouts() {
    var id = window.setTimeout(null,0)
    while (id--) {
        window.clearTimeout(id)
    }
}
render()