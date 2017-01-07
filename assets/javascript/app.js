// This function will run the game when the page is ready.
$(document).ready(function() {

// This is the variable set for the timer interval.
var interval;

// Variables for the game have been set in this object. 
// Timer, correct, blank & wrong answers, answer values,
// and the boolean variables set to determine when content on the page shows up. 

var game = {
	time: 60,
	correct: 0,
	wrong: 0,
	blank: 0,
	answered: false,

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
		if (game.correct >= 6) {
			$("#userEnd").append("<h1> You're A Twin Peaks Expert! <h1>");
			$("#picture").append("<img src='assets/images/littleman.gif'>");
			console.log("Good You got " + game.correct + " right and left " + game.blank + " blank.");
// If the user scores less than 6, the game will post that the user needs to watch more Twin Peaks.
		} else {
			$("#userEnd").append("<h1> You Need to Watch Twin Peaks! <h1>");
			$("#picture").append("<img src='assets/images/bob.gif'>");
			console.log("Womp womp! You got " + game.correct + " right and left " + game.blank + " blank.");
		}
	},

// This function is setting the timer and making the timer count backwards from 60.
	counter: function() {
	game.time--;
	var timeLeft = parseInt(game.time);

	// If the game timer reaches 0, the trivia content will hide and the results page will appear.
		if (timeLeft === 0) {
			game.userAnswer();
			game.stop();
			$("#timeUp").append("<h1> Time's Up! <h1>");
		}
	// This displays the amount of time left on the page.  
	$("#timer").html(timeLeft);
	},

// This function will determine if the answers selected are correct or incorrect.	
	userAnswer: function () {

		$('input[type="radio"]:checked').each(function() {

		    if (this.value === "correct") {
		  		game.answered = true;
				game.correct++;
				$("#correct").text(game.correct);
		    } else if (this.value === "wrong") {
		   		game.answered = true;
		   		game.wrong++;
				$("#wrong").text(game.wrong);
			}
	        	  
		});

		// Loop through available sets
	    	$(".answers").each(function(){

	    		// var inputName = $("input[name]")
		        // Validate
		        if (!$(this).is(':checked')) {
		            game.blank++;
				    $("#blank").text(game.blank);
				} else {
					console.log('Checked!')
					game.blank--;
				}
			});

	}
}

// Here's the beginning of the trivia logic.

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
		
	});
	
	 // When someone clicks the submit button, then the game will end.
	$("#submit").click(function endGame() {
		game.userAnswer();

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

		// This will empty the text content that was revealed when the game is over..
		$("#userEnd").empty();

		// This will empty the picture content that was revealed when the game is over..
		$("#picture").empty();

		// This will empty the 'Time's Up!' content that was revealed when the game ended due to time constraints..
		$("#timeUp").empty();

		// Sets the scores for correct, incorrect and blank answers to 0.
		game.correct = 0;
		game.wrong = 0;
		game.blank = 0;

		// Sets the game timer to 60 seconds.
		game.time = 60;

		$("#correct").text(game.correct);

		$("#wrong").text(game.wrong);

		$("#blank").text(game.blank);


		// Resets the game values from the form back to being unselected.
		$('input[type=radio]').attr("checked", false);
	});
});

