// Get the age and convert it to a Number (returns a String)
var age = Number(prompt("What is your age?"));
 
// check if the age is negative
if(age < 0) {
 console.log("Come back when your older");
}
 
// check if age is 21  
if(age === 21) {
 console.log("Your'e twenty one!");
}
 
// check if age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is an odd number!");
}
 
// check if age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}