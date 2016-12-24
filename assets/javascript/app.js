// This function will run the game when the page is ready.
$(document).ready(function() {

// This is the variable set for the timer interval.
var interval;

// Variables for the game have been set in this object. 
// Timer, correct, blank & wrong answers, answer values,
// and the boolean variables set to determine when content on the page shows up. 

var game = {
	time: 30,
	correct: 0,
	wrong: 0,
	blank: 0,
	value: " ",

	start: function() {
    interval = setInterval(game.counter, 1000);
    //  Use setInterval to start the count.
	},
 	
 	stop: function() {
    clearInterval(interval);
    //  Use clearInterval to stop the count.
		$("#trivia").hide();
		$("#results").show();

		if (game.correct >= 6) {
			$("#userEnd").append("<h1> You're A Twin Peaks Expert! <h1>");
			$("#picture").append("<img src='assets/images/littleman.gif'>");
		} else {
			$("#userEnd").append("<h1> You Need to Watch Twin Peaks! <h1>");
			$("#picture").append("<img src='assets/images/bob.gif'>");
		}
	},

	counter: function() {
	game.time--;
	var timeLeft = parseInt(game.time);
	// If the game timer reaches 0, the trivia content will hide and the results page will appear.
		if (timeLeft === 0) {
			game.stop();
			$("#timeUp").append("<h1> Time's Up! <h1>");
		}
	$("#timer").html(timeLeft);
	}

}

// This will make the results "page" hide when the page is loaded.
	$("#results").hide();

//This will make the trivia content hide when the page is loaded. 
	$("#trivia").hide();

// This function will determine if the answer selected is correct or incorrect.
	// $("").click(function valueAnswer() {
		
		// if (game.value === "correct") {
		// 	game.correct++;
		// 	$("#corrrect").html(game.correct);

		// } else if (game.value === "wrong") {
		// 	game.wrong++;
		// 	$("#wrong").html(game.wrong);

		// } else if (game.value === " ") {
		// 	game.blank++;
		// 	$("#blank").html(game.blank);
		// }
	// });

 // When someone clicks the start button the following function will happen.
	$("#startGame").click(function newGame() {
	 // The start "page" will hide.
		$("#startGame").hide();

	//The trivia content will show. 
		$("#trivia").show();

		game.start();
	
		$("#submit").click(function endGame() {
			game.stop();
		});
	});

	$("#restart").click(function restart() {
		$("#trivia").hide();
		$("#results").hide();
		$("#startGame").show();

		game.timer = 30;
		game.correct = 0;
		game.wrong = 0;
		game.blank = 0;
		game.value = " ";

	});

});
