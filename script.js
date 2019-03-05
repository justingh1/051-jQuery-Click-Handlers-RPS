// Fix the click handler below so that the corresponding
// image disappears when you click the button under it.  For example, make the paper image disappear when you click the rock button.


// Write a click handler for Rock
$(".rock-button").click(function(){
    $(".scissors-button").fadeToggle();
});

$(".rock-button").click(function(){
    $("#scissors").fadeToggle();
});

$(".scissors-button").click(function(){
    $(".paper-button").fadeToggle();
});

$(".scissors-button").click(function(){
    $("#paper").fadeToggle();
});

$(".paper-button").click(function(){
    $(".rock-button").fadeToggle();
});

$(".paper-button").click(function(){
    $("#rock").fadeToggle();
});


