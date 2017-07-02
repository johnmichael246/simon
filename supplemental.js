function simonsTurn() {
    simon.push(getRandomInt());
    simon.forEach(function(elem) {
        setTimeout($(`#${elem}`).css({opacity:1}))
    },timer)
    simon.forEach(function(elem) {
        setTimeout($(`#${elem}`).css({opacity:1}))
    },timer+500)
};
