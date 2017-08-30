//set the secretNumber
var secretNumber = 4;

//ask user to guess a number
var stringGuess = prompt("Guess the secret Number");
var guess = Number(stringGuess);

//check if the number is correct
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}
//check if the guess is higher than the secret number
else if(guess > secretNumber){
	alert("That was too high.  Try again!");
}

else {
	alert("That was too low.  Try again!");
}
//else, checkif it was lower