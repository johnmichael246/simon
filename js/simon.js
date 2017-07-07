/*----- constants -----*/
/*----- app's state (variables) -----*/
var simon = [];
var player = [];
var lose = false;
var tickTock ;
var score = 0;
var hiScore = localStorage.getItem("hiScore", score);
$('LS').html(hiScore)
var counter = 1;
var disable = 750;
render();

/*----- event listeners -----*/  
$("#start-btn").on('click', countDown)
$(".circle").on('click', colorSelect)
/*----- functions -----*/
function reInitialize() {
    simon = [];
    player = [];
    lose = false;
    score = 0;
    tickTock;
    hiScore = localStorage.getItem("hiScore",score)
     counter = 1;
     click = 0;
     disable = 750;
    countDown();
    render();
};
function render() {
    player =[];
    renderScore();
    renderCount();
}

function renderScore () {
    document.getElementById('score').innerText = `Score ${score}`;
    document.getElementById('hiScore').innerText = `High Score ${hiScore}`;
}
function renderCount() {
        document.getElementById('count').innerText = `Round ${counter}`;
}

function getRandomInt() {
    var min = 0;
    var max = 4;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function simonsTurn() {
    var endTimer = 750;
    var startTimer = 0;
    counter += 1;
    disableClick();
    simon.push(getRandomInt());
    simon.forEach(function(elem, index) {
        setTimeout(function() {
            var audio = document.getElementById(`audio${elem}`);
            audio.play();
            $(`#${elem}`).css({opacity:1})
        }, startTimer)
        startTimer +=900;
        setTimeout(function() {
            $(`#${elem}`).css({opacity:.5})
        }, endTimer)
        endTimer += 750
        if (index === simon.length-1) tickTock = setTimeout(timesUp, endTimer + 3000);
    })
    startTimer = 0;
    endTimer = 750;
}

function timesUp() {
    gameOver();
}

function colorSelect() {
    clearTimeout(tickTock);
    if (lose === true) {
        return
    }
    player.push((`${this.id}`));
    $(this).css({opacity: 1});
    audio = document.getElementById(`audio${this.id}`);
    audio.play();
    setTimeout(function() {
        $(".circle").css({opacity: .5})
    },750)
    playerTurn();    
};
function playerTurn() {
    player.forEach(function(colorIdx, index) {
        if (player[index] != simon[index]) { 
            return gameOver();
        }
    })
    if (player.length < simon.length) {
        tickTock = setTimeout(timesUp, 3000);
        return;
    }
    if (lose === false) {
        scoring();
        render();
        setTimeout(function() {
            simonsTurn();
        }, 1500);
    }
};
function scoring() {
    score += 10
    if (hiScore < score) {
        hiScore = score;
        window.localStorage.setItem("hiScore", score);
    }
};
function countDown() {
    var count = 3;
    $("#start-btn").html("Ready?")
    var countdown = setInterval(function(){
        var countSound = document.getElementById('beeper')
        countSound.play();
        $("#start-btn").html(count)
        count -= 1;
        if (count < 0) {
            clearInterval(countdown)
            $("#start-btn").html("Go")
            renderCount();
            simonsTurn();
        }
    },1000)
    $('#start-btn').off('click');
};
function gameOver() {
    lose = true
    $("circle").off('click');
    loseFlash();
    document.getElementById('start-btn').innerText = 'Again?'
    $("#start-btn").on('click', reInitialize)
}
function loseFlash() {
    var loseAnimate = 2
    time1 = 0;
    time2 =750;
    var loseColors = setInterval(function() {
        setTimeout(function() {
            var endBeep = document.getElementById("losebeep")
            endBeep.play()
            $(`.circle`).css({opacity:1})
        }, time1)
        time1 += 750;
        setTimeout(function() {
            $(`.circle`).css({opacity:.6})
        }, time2)
        time2 +=750
        loseAnimate -= 1;
        if (loseAnimate < 0) {
            clearInterval(loseColors)
        }
    })
    time1 = 0;
    time2 = 500;
};
function disableClick() {
    $('.circle').off('click')
    setTimeout(function(){
        $('.circle').on('click', colorSelect)
    }, disable)
    disable += 750;
}
/*----- cached element references -----*/