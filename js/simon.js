
/*----- constants -----*/
// var Colors = ["blue","purple","yellow", "green", "red"];
/*----- app's state (variables) -----*/
var simon = [];
var player = [];
var lose = false;
var score = 0;
var hiScore = (localStorage.getItem("hiScore", score));
$('LS').html(hiScore)
var counter = 1;
var sound0 = "beep0";
var sound1 = "beep1";
var sound2 = "beep2";
var sound3 = "beep3";
var sound4 = "beep4";
render();

/*----- event listeners -----*/  
$("#start-btn").on('click', countDown)
/*----- functions -----*/
function reInitialize() {
    simon = [];
    player = [];
    lose = false;
    score = 0;
    hiScore = localStorage.getItem("hiScore",score)
     counter = 0;
    countDown();
    render();
};

function loadsound() {
    createjs.Sound.registerSound("sound/simon_sound0.mp3", sound0)
    createjs.Sound.registerSound("sound/simon_sound1.mp3", sound1)
    createjs.Sound.registerSound("sound/simon_sound2.mp3", sound2)
    createjs.Sound.registerSound("sound/simon_sound3.mp3", sound3)
    createjs.Sound.registerSound("sound/simon_sound4.mp3", sound4)
}

function getRandomInt() {
    var min = 0;
    var max = 4;
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

function simonsTurn() {
    $("circle").off('click');
    var endTimer = 750;
    var startTimer = 0;
    counter += 1;
    simon.push(getRandomInt());
    simon.forEach(function(elem, index) {
        setTimeout(function() {
            var audio = document.getElementById(`audio${elem}`);
            audio.play();
            $(`#${elem}`).css({opacity:1})
        }, startTimer)
        startTimer +=750;
        setTimeout(function() {
            $(`#${elem}`).css({opacity:.6})
        }, endTimer)
        endTimer += 750
    })
    startTimer = 0;
    endTimer = 750;
};

function playerTurn() {
    player.forEach(function(colorIdx, index) {
        if (player[index] != simon[index]) { 
            return gameOver();
        }
    })
    if (player.length < simon.length) {
        return;
    }
    if (lose === false) {
        scoring();
        render();
        setTimeout(function() {
            simonsTurn();
        }, 1500)       
    }
};

function scoring() {
    score += 10
    if (hiScore < score) {
        hiScore = score;
        window.localStorage.setItem("hiScore", score);
    }
};

function colorSelect() {
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

function gameOver() {
    lose = true
    $("circle").off('click');
    alert("game over!");
    document.getElementById('start-btn').innerText = 'Try Again?'
    $("#start-btn").on('click', reInitialize)
}

function countDown() {
    var count = 3;
    $("#start-btn").html("Get Ready!")
    var countdown = setInterval(function(){
        var countSound = document.getElementById('beep')
        countSound.play();
        $("#start-btn").html(count)
        count -= 1;
        if (count < 0) {
            clearInterval(countdown)
            $("#start-btn").html("Game On")
            renderCount();
            simonsTurn();
        }
    },1000)
    $('#start-btn').off('click');
    $(".circle").on('click', colorSelect)
};
/*----- cached element references -----*/