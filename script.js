// Assignment Code
var generateBtn = document.querySelector("#generate");

// this is where I need to enter the vars, arrays, and loops

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


