// Global variables 
var availableCharacters = []
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberNumbers = "0123456789"
var specialCharacters = "~!@#$%^&*()-_=+<>?,./"

function generatePassword(){
    var password = ""
    //1. Prompt user for parameters
        // Prompt for length
    var length = prompt("How many characters do you need?");
        // Logic for length parameters & validity of answer
    if (length<8 || length>128 || isNaN(length)) {
        alert("Please choose a number between 8 and 128");
        return generatePassword();
    }
        // Confirm for lowercase
    var lowercase = confirm("Click OK if you need lowercase letters.")
        // Confirm for uppercase
    var uppercase = confirm("Click OK if you need uppercase letters.")
        // Confirm for numbers
    var numbers = confirm("Click OK if you need numbers.")
        // Confirm for special characters
    var special = confirm("Click OK if you need special characters.")
        // Logic for creating availableCharacters string
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

    // 2. Create random password from available characters and a for loop run the number of times that user sets length to
    for (var i = 0; i < length; i++) {
        password += availableCharacters[Math.floor(Math.random()*availableCharacters.length)];
        console.log(password);
    }
    return password
    }

    // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    }
  
    // Assignment Code
var generateBtn = document.querySelector("#generate");
    // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);