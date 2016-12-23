// Variables for the game have been set in this object. 
// Timer, correct, blank & wrong answers, answer values,
// and the boolean variables set to determine when content on the page shows up. 
var game = {
	timer: 30,
	correct: 0,
	wrong: 0,
	blank: 0,
	value: " ",

	counter: function() {
	game.timer--;
	$("#timer").html(game.timer);
	}

}

// This function will run the game when the page is ready.
$(document).ready(function() {

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
	
	//The timer will begin counting backwards. 
		var interval = setInterval(game.counter, 1000); 

	// If the game timer reaches 0, the trivia content will hide and the results page will appear.
		if (game.timer === 0) {
			endGame();
			$("#timeUp").attr("<h1>", "Time's Up!");
			$("#timeUp").append("<h1>");
		}

		$("#submit").click(function endGame() {
			$("#trivia").hide();
			$("#results").show();
			userEnd();

			if (game.correct >= 6) {
				$("#userEnd").attr("<h1>", "You Know Twin Peaks Well!");
				$("#userEnd").append("<h1>");

				$("#picture").attr("<img>", "src='assets/images/littleman.gif'");
				$("#picture").append("<img>");
			} else {
				$("#userEnd").attr("<h1>", "Looks Like You Need to Watch Twin Peaks!");
				$("#userEnd").append("<h1>");

				$("#picture").attr("<img>", "src='assets/images/bob.gif'");
				$("#picture").append("<img>");
			}
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
		newGame();

	});

});
