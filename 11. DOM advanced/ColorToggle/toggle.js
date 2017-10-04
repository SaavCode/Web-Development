// select the button
var button = document.querySelector("button");

// add an eventlistener on clicj
button.addEventListener("click", function(){
	// change to purple
	document.body.classList.toggle("purple");
});