var btn = document.getElementById('btn');                // button variable 
var output = document.getElementById('outputText');      // variable for outputing text base on users guess
var message = document.getElementById('message');		 // variable for outputing secret message 
var attempts = document.getElementById('attempts');      // variable for outputing number of attempts
var counter = 0;										 // variable to keep track of attempts
var number = [Math.floor((Math.random() * 1000) + 1)]    // variable to generate the random number

// the start of the game
btn.addEventListener('click', function() {
	// variable to collect the users input
	var input = parseInt(document.getElementById('userInput').value);
	// calls the function attemptsCounter() 
	attemptsCounter();
	// displays the number of attempts for the user
	attempts.innerHTML = "Attempt(s): " + counter;
	// displays a message using the compareNumbers() function
	document.getElementById('outputText').innerHTML = compareNumbers(input);
})
// function to count the number of attempts
function attemptsCounter () {
	counter++;
}
// function to compare the users guess with the actual number, prompting further instructions
function compareNumbers (input) {
	if (input == number){
		// displays a message using the secretMessage function
		secretMessage();
		return 'Congratulations! You guessed the number!';
	} else if (input < number) {
		return 'Too low, try again.';
	} else if (input > number) {
		return 'Too high, try again.';
	} 
}
// function prompting the user with a message base on how many attempts there was
function secretMessage () {
		if (counter == 10) {
			document.getElementById('message').innerHTML = 'Ahah! You know the secret!'
		} else if (counter < 10){
			document.getElementById('message').innerHTML = 'Either you know the secret or you got lucky!'
		} else {
			document.getElementById('message').innerHTML = 'You should be able to do better!'
		}
}




