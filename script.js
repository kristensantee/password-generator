  // Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var length;
var availableCharacters = []

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberNumbers = "0123456789"
var specialCharacters = "`~!@#$%^&*()-_=+<>"

// availableCharacters.push(lowercaseLetters);
// console.log(availableCharacters)
// availableCharacters += uppercaseLetters
// console.log(availableCharacters)
// availableCharacters += numberNumbers
// console.log(availableCharacters)
// availableCharacters +=


function generatePassword(){
    // console.log("hello")
    var password = ""
    //1. Prompt user for parameters
      // Prompt for length
    var length = prompt("How many characters do you need?");
        console.log(length)
    // logic for length parameters & validity of answer
    var minCharacters = "8"
    var maxCharacters = "128"
    if (length.length>=minCharacters === length.length<=maxCharacters) {
        console.log("good choice");
    } else {
        alert("Please choose a number between 8 and 128");
        generatePassword();
    }


    console.log("wrong number")
    // if not, user process needs to restart function
        // Prompt for lowercase
    var lowercase = confirm("Click OK if you need lowercase letters.")
        // Prompt for uppercase
    var uppercase = confirm("Click OK if you need uppercase letters.")
        // Prompt for numbers
    var numbers = confirm("You need numbers")
        // Prompt for special characters
    var special = confirm("You need special characters")
        // logic for creating availableCharacters string
    if (lowercase) {
        availableCharacters += lowercaseLetters
    }
    if (uppercase) {
        availableCharacters += uppercaseLetters
    }
    if (numbers) {
        availableCharacters += numberNumbers
    }
    if (special) {
        availableCharacters += specialCharacters
    }
    console.log(availableCharacters)
    // 2. Create random password from available characters
    // for loop run the number of times that user sets length to
    // add random character to password string
// for (i=0; i=length.length; i++) {
    // add one random character to password
// }
    return password
}
  

  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  
  

// Open a prompt to ask user for password criteria
// var criteria = prompt("How many characters do you need?")

// function getCriteria() {
    //  set length via prompt
    // promp
    // add characters to availableCharacters via confirm
// }
