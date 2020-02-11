var myNumber = 42
var myString = "Hello, world"
var myName = "Hannah"
var myAge = 17
var myHeight = "5 feet 7 inches"
var myEyeColor = "hazel"
var myPassword = "password123"
var guessedPassword = "asdf"

console.log("My name is "+myName + " and my age is " + myAge)
console.log(myNumber)
console.log(myString)

//Hello there. Purpose: to take notes (won't be part of code). Comment
/*
randomness (another way to take notes that won't be coded)
this is a multi-line comment. Helps keep code organized
*/

//Check if old enough to enter bar
if(myAge >= 18 && myAge < 21){
  console.log("You are allowed to enter the bar but not drink");
}
else if(myAge >= 21){
  console.log("You are allowed to enter the bar");
}
else{
  console.log("You are NOT allowed to enter the bar");
}

//Check user password
if(myPassword == guessedPassword){
  console.log("Your password is correct");
}
else{
  console.log("Your passsword is NOT correct");
}
