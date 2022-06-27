  // Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var length;
var availableCharacters = []
var finalCharacter = []

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberNumbers = "0123456789"
var specialCharacters = "~!@#$%^&*()-_=+<>?,./"

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
    // logic for length parameters & validity of answer
    if (length>=8 && length<=128) {
        console.log("good work")
    } else {
        // if user entry is not valid, inform user of valid options
        alert("Please choose a number between 8 and 128");
        // recall function
        generatePassword();
    }
        // Prompt for lowercase
    var lowercase = confirm("Click OK if you need lowercase letters.")
        // Prompt for uppercase
    var uppercase = confirm("Click OK if you need uppercase letters.")
        // Prompt for numbers
    var numbers = confirm("Click OK if you need numbers.")
        // Prompt for special characters
    var special = confirm("Click OK if you need special characters.")
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

    // 2. Create random password from available characters and a for loop run the number of times that user sets length to
    for (var i = 0; i < length; i++) {
        password += availableCharacters[Math.floor(Math.random()*availableCharacters.length)];
        console.log(password);
        // answer += availableCharacters[i];
    }

    // var password = randomPassword.concat();

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
