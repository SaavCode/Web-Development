//array iteration
// Use a for loop to iterate over an array
// Use forEach to iterate over an array
// Compare and contrast for loops and forEach
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
//arr.forEach(someFunction)
//method for each//passing in function color
colors.forEach(function(color){
//color is a placeholder, call it whatever you want
  console.log(color);
});




//For vs. ForEach
//The following 2 code snippets do the same thing:
//with a for loop, we need to use the length property
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
//using forEach, we use the forEach method
var colors = ["red", "orange","yellow", "green"];

colors.forEach(function(color){
  console.log(color);
});