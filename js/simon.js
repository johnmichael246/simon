/*----- constants -----*/
var Colors = ["blue","purple","yellow", "green", "red"];

/*----- app's state (variables) -----*/
var simon;
var player;
var lose;
var score;
var hiScore;
   
/*----- event listeners -----*/

// $('#purple').on('click',function() {
//     console.log("hello!");
// })

/*----- functions -----*/
initialize();
function initialize() {
    simon = [getRandomInt()];
    player = [];
    lose = false;
    score = 0;
    hiScore = 0;
    $("#start-btn").one('click', function() {
        var count = 3;
        var countdown = setInterval(function(){
            console.log("get ready!")
            console.log(count)
            count -= 1;
            if (count < 0) {
                clearInterval(countdown)
                console.log("go!");
            }
        },1000)
turn();
        // setTimeout(function() {
        //     console.log("2")
        // }, 1000)
        // setTimeout(function() {
        //     console.log("1")
        // }, 2000)
        // setTimeout(function() {
        //     console.log("go")
        // }, 3000)
    })
};

function turn() {
    simon.push(getRandomInt())
};

function getRandomInt() {
    var min = 0;
    var max = 4;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function render() {
    renderScore();
    renderHiScore();
}

function renderScore () {
    document.getElementById('score').innerText = score
}
function renderHiScore() {
    document.getElementById('hiScore').innerText = hiScore
}

function turn() {
    simon.push(getRandomInt())
};

function playerTurn() {
    while (player.length <= simon.length) {

    }
}
/*----- cached element references -----*/


