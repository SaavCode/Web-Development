//Nestor Saavedra
//return true if the number is even, false if not
function isEven(num){
	return num % 2 === 0;
}
//calculate the factorial
function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
  	result *= i;
  }
  //return the result variable
  return result;
}

// factorial(4) 4 x 3 x 2 x 1

//replace - with _
function kebabToSnake(str) {
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;

}






