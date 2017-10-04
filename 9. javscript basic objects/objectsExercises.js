var someObject = {}; //
//Which of the following are valid: 
someObject._name = "Hedwig";
 someObject.age = 6; 
 var prop = "color" someObject[prop] = "red"; 
 someObject.123 = true;//cant use dot notation for starting with a number


var someObject = {  friends: [    {name: "Malfoy"},   
 {name: "Crabbe"},    {name: "Goyle"}   ], 
  color: "baby blue",  isEvil: true };
   //Write code to retrieve "Malfoy" from someObject
someObject.friends[0].name;