var length;
var availableCharacters = "";


function generatePassword(){
//1. prompt user for parameters
// length, special characters, numbers, uppercase, lowercase
getParameters();
//2. create random password from available characters
// for loop run the number of times that user sets length to
// add random character to password string
for (i =i < length, i++) {
  ;
  
}

  var selection = prompt("this is a prompt")
  return selection
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// trying it out
function getParameters(){
  // set length via prompt:
  // add characters to availableCharacters via [yes or no (look this up)]
}
