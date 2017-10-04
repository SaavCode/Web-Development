var p1Button = document.querySelector("#p1");
// dont need octothorp
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
// call from html
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
// slect spans inside the paragraphs 
var winningScoreDisplay = document.querySelector("p span");
// start score with 0
var p1Score = 0;
var p2Score = 0;
// 
var gameOver = false;
var winningScore = 5;

// player 1 button
p1Button.addEventListener("click", function(){
	if(!gameOver){
		// increment score
		p1Score++;
		// check the score
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			// set game over to true
			gameOver = true;
		}
		// update the p1 display
		p1Display.textContent = p1Score;
	}
});

// player 2 button, works the same as p1button
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		// update the player two score
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

// game reset
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}


numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	// call reset function
	reset();
});