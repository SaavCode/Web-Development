console.log("CONNECTED");

//print in reverse
function printReverse(arr){
	//get the length and decrement the array printing the element
	//
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5]);

//*** isUniform() ***
//check if array is uniform, the same
function isUniform(arr){
	//track the first element of the array
	var first = arr[0];
	//compare every element to the first element
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			//if not matching return false
			return false;
		}
	}
	//if it macthes return true
	return true;
}


// *** sumArray() ***
//sum elements of the array
function sumArray(arr){
	var total = 0;
	//get every element with foreach method
	arr.forEach(function(element){
		//add the elements to the total
		total += element;
	});
	//return the total sum
	return total;
}

// *** max() ***
//get the max value in the array
function max(arr){
	//set the max to the first element

	var max = arr[0];
	//compare every element to the first element,
	//if it is greater, set the element to max
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}