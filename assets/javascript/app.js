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

// This function starts the timer for the game.
	start: function() {
    
    //  Use interval to start the count.
    interval = setInterval(game.counter, 1000);
	},
 	
// This function makes the trivia content hide and the results content show.
 	stop: function() {
    clearInterval(interval);
    //  Use clearInterval to stop the count.
		$("#trivia").hide();
		$("#results").show();

// If the user has 6 or more questions right the game will post that they are an expert.
// If the user scores less than 6, the game will post that the user needs to watch more Twin Peaks.
		if (game.correct >= 6) {
			$("#userEnd").append("<h1> You're A Twin Peaks Expert! <h1>");
			$("#picture").append("<img src='assets/images/littleman.gif'>");
		} else {
			$("#userEnd").append("<h1> You Need to Watch Twin Peaks! <h1>");
			$("#picture").append("<img src='assets/images/bob.gif'>");
		}
	},

// This function is setting the timer and making the timer count backwards from 30.
	counter: function() {
	game.time--;
	var timeLeft = parseInt(game.time);

	// If the game timer reaches 0, the trivia content will hide and the results page will appear.
		if (timeLeft === 0) {
			game.stop();
			$("#timeUp").append("<h1> Time's Up! <h1>");
		}
	// This displays the amount of time left on the page.  
	$("#timer").html(timeLeft);
	}

}

// This will make the results "page" hide when the page is loaded.
	$("#results").hide();

//This will make the trivia content hide when the page is loaded. 
	$("#trivia").hide();

 // When someone clicks the start button the following function will happen.
	$("#startGame").click(function newGame() {
	 // The start "page" will hide.
		$("#startGame").hide();

	//The trivia content will show. 
		$("#trivia").show();

		game.start();
		
	// This function will determine if the answer selected is correct or incorrect.
		$("input:radio").click(function (){	
			if ($(this[value=correct])) {
				game.correct++;
				console.log("right!");
				$("#corrrect").text(game.correct);

			} else if ($(this[value=wrong])) {
				game.wrong++;
				console.log("wrong!");
				$("#wrong").text(game.wrong);

			} else if ($(this).attr("checked", false)){
				game.blank++;
				$("#blank").text(game.blank);
			}
		});
	});
	
	$("#submit").click(function endGame() {
		game.stop();	
	});

// This function will restart the game when someone clicks on the restart button.
	$("#restart").click(function restart() {
		// Hides the trivia content.
		$("#trivia").hide();
		// Hides the results content.
		$("#results").hide();
		// Shows the starting page so the user can restart the game.
		$("#startGame").show();

		$("#userEnd").empty();
		$("#picture").empty();

		// Sets the scores for correct, incorrect and blank answers to 0.
		game.correct = 0;
		game.wrong = 0;
		game.blank = 0;

		// Sets the game timer to 30 seconds.
		game.time = 30;

		// Resets the game values from the form back to being unselected.
		$('input[type=radio]').attr("checked", false);
	});
});

