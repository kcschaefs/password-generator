// Assignment Code
var generateBtn = document.querySelector("#generate");

// -------------------------------------------------------------

var addSpecialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ":", ";", "'", "<", ">", "?"];
var addLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var addUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var addNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var numberOfCharacters;
var useSpecialChar;
var useLowerCase;
var useUpperCase;
var useNumbers;

function askNumOfChar() {
  var response = prompt("How many characters would you like your password to be?");
  numberOfCharacters = parseInt(response);
}

function askUseSpecialChar() {
  var response = confirm("Is it ok to use special characters?");
  if (response == true) {
    useSpecialChar = true;
  } else useSpecialChar = false;
}

function askUseLowerCase() {
  var response = confirm("Is it ok to use lower case letters?");
  if (response == true) {
    useLowerCase = true;
  } else useLowerCase = false;
}

function askUseUpperCase() {
  var response = confirm("Is it ok to use upper case letters?");
  if (response == true) {
    useUpperCase = true;
  } else useUpperCase = false;
}

function askUseNumbers() {
  var response = confirm("Is it ok to use numbers?");
  if (response == true) {
    useNumbers = true;
  } else useNumbers = false;
}

function generatePassword() {
  askNumOfChar()
  var charsToUse = []; //need to create an empty array to allow for the user character selection

  askUseSpecialChar()
  if (useSpecialChar == true) {
    charsToUse = charsToUse.concat(addSpecialChar); //adds spec characters to array
  }

  askUseLowerCase()
  if (useLowerCase == true) {
    charsToUse = charsToUse.concat(addLowerCase); //adds lowercase to array
  }

  askUseUpperCase()
  if (useUpperCase == true) {
    charsToUse = charsToUse.concat(addUpperCase); //adds uppercase to array
  }

  askUseNumbers()
  if (useNumbers == true) {
    charsToUse = charsToUse.concat(addNumbers); //adds numbers to array
  }

  // this has added all chars types to array, need to figure out how to pick and choose
  //var charsToUse = addLowerCase.concat (addUpperCase, addNumbers, addSpecialChar); //don't want to do this, bc it hardcodes ALL arrays and doesn't allow for user rejection of array

var password = "";


for (var i = 0; i < numberOfCharacters; i++) {
  var randomNumber = Math.floor(Math.random() * charsToUse.length); //chooses a random number to apply to the array
  password += charsToUse[randomNumber];
}

return password;

}

// --------------------------------------------------------------

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


