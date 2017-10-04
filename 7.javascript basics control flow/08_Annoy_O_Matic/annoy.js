// annoy the user 

var answer = prompt("are we there yet?");
// check if the user said yes within a string, if false keep asking question
// indexof, checks where the string occurs
while(answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}
// if yes display message
alert("YAY, WE MADE IT!!!");