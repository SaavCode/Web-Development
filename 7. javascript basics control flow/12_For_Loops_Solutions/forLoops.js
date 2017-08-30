// for(init; condition;step;){run code}

console.log("PRINTING ALL NUMBERS from 1 to 5");

for(var i = 1; i <= 5; i++){
	console.log(i)
}



console.log("PRINTING ALL EVEN BETWEEN 0 AND 40");

// for(var i = 11; i <= 40; i += 2){
// 	console.log(i);
// }

for(var i = 0; i <= 40; i += 1){
	if(i % 2 === 0) {
		console.log(i);
	}
}




console.log("PRINTING ALL ODD NUMBERS BETWEEN 0 AND 33");

for(var i = 0; i <= 33; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 0 AND 20");

for(var i = 0; i <= 20; i++){
	if(i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}