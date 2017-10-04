// a while loop will run the code as long as the condition is true
console.log("PRINTING ALL NUMBERS BETWEEN 1 AND 19");
var count = 1;
count
// prints everything bellow 20
while(count < 20){
	console.log(count);
	count++;
}

console.log("PRINTING ALL EVEN BETWEEN 10 AND 20");
var count = 10;

while(count <= 20){
	console.log(count);
	count+=2;
	// count by two's
}

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
var count = 300;

while(count <= 333){
	if(count % 2 !== 0){
		console.log(count);
	}
	count+=1;
}


console.log("numbers between -10 and 19")
var num = -10;
while (num <=19)
{
	console.log(num);
	num++;

}

console.log("numbers DIVISIBLE by 5 and 3 between 5 and 50")
var num = 50;
while (num <=50)
{
	if(num % 5 === 0 && num % 3 === 0)
		{	
console.log(num);
		}
	num++;

}