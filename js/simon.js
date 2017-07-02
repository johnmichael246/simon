
/*----- constants -----*/
var Colors = ["blue","purple","yellow", "green", "red"];
/*----- app's state (variables) -----*/
var simon;
var player;
var lose;
var score;
var hiScore;
var timer;
   
/*----- event listeners -----*/

$(".circle").on('click', function(event) {
    player.push((`${this.id}`));
    console.log(`${this.id}`);
    $(this).css({opacity: 1});
    setTimeout(function() {
        $(".circle").css({opacity: .5})
    },1000)
});
/*----- functions -----*/
initialize();
function initialize() {
    simon = [];
    player = [];
    lose = false;
    score = 0;
    hiScore = 0;
    timer = 1000;
    $("#start-btn").one('click', function() {
        var count = 3;
        console.log("get ready!")
        $("#message").html("Get Ready!")
        var countdown = setInterval(function(){
            console.log(count)
            $("#message").html(count)
            count -= 1;
            if (count < 0) {
                clearInterval(countdown)
                $("#message").html("game on")
                console.log("go!");
            }
        },1000)

    })
};

// $(".circle").on('click', function(event) {
//     simon.push(getRandomInt());
//     console.log(event.target.id);
//     $(`#${event.target.id}`).css({opacity: 1});
//     setTimeout(function() {
//         $(".circle").css({opacity: .5})
//     },1000)
// })


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

function simonsTurn() {
    simon.push(getRandomInt());
    simon.forEach(function(elem,) {
        setTimeout($(`#${elem}`).css({opacity:1}))
    },timer)
        setTimeout($(`#${elem}`).css({opacity:.5}), timer+=500)
};

/*----- cached element references -----*/
