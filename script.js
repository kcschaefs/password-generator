// Assignment Code
var generateBtn = document.querySelector("#generate");

var addSpecialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ":", ";", "'", "<", ">", "?"];
var addLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var addUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var addNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var numberOfCharacters;
var useSpecialChar;
var useLowerCase;
var useUpperCase;
var useNumbers;
var finishedPassword = "" ;

function askNumOfChar () {
  var response = prompt ("How many characters would you like your password to be?");
  numberOfCharacters = parseInt (response);
}

function askUseSpecialChar () {
  var response = confirm ("Is it ok to use special characters?");
}

function askUseLowerCase () {
  var response = confirm ("Is it ok to use lower case letters?");
}

function askUseUpperCase () {
  var response = confirm ("Is it ok to use upper case letters?");
}

function askUseNumbers () {
  var response = confirm ("Is it ok to use numbers?");
}

// --------------------------------------------------------------


  console.log(askNumOfChar())
  console.log(askUseSpecialChar());
  console.log(askUseLowerCase());
  console.log(askUseUpperCase());
  console.log(askUseNumbers());






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


