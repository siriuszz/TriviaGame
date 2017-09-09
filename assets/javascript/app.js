
// Hide the questions until the user clicks the Start button
$(document).ready(function(){
    $("#game").hide();
    $("#result").hide();
});



// Game buttons for start and stop ==============================================

    $("#start").on("click", run);
    $("#submit").on("click", stop);



// Quiz  ==============================================
var timer = 91;
var intervalId;
var text = "";
var windowTimeout;
var counter = 0;
var radios;
var radio;

// Start the game
function run() {
    $("#start").hide();
    intervalId = setInterval(decrement, 1000);
    windowTimeout = setTimeout(function(){
        $("#game").show();
    }, 1000);
}

// Increase score by one for each correct answer
function score() {
    for(var i = 1; i <= 5; i++) {
        radios = document.getElementsByName('question'+i);
        for(var j = 0; j < radios.length; j++) {
            radio = radios[j];
            if(radio.value == "1" && radio.checked) {
                counter++;
            }
        }
    }
}


// If the timer runs out, stop the game
function decrement() {
    timer--;
    $("#timer").html("<h2>" + timer + "</h2>");
    if (timer === 0) {
        stop();
        console.log("out of time");
    }
}



// Stop the game and shows results
function stop() {
    clearInterval(intervalId);
    $('#result').show();
    $('#game').hide();
    score();


    // Tally the score and deliver result message
    if (counter >= 3) {
        $("#result").append("<h3>And the winner is...</h3><p>You!</p><p>Congratulations! You scored "
            + counter + " out of 5.</p>" +
            "<p>Enjoy the Vanity Fair party and don't puke in the limo on the way home.</p>");
    } else {
        $("#result").append("<h2>And the winner is...</h2><p>Tom Hanks</p><p>You only scored "
            + counter + " out of 5.</p>" +
            "<p>There's always next year.</p>");
    }

}






