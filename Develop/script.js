// Assignment code here
// constants for the characters
const generate = document.getElementById('generate')
generate.addEventListener('click', writePassword)

console.log(generate)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numarr = ["0","1","2","3","4","5","6","7","8","9"]


//Upon click of generate password 

function generatePassword () {
  var passwordLength = parseInt(prompt("Enter the number of characters in new password please. The password must be greater than 12 but less than 128"));
  var numbers = confirm ("Do you want NUMBERS in your password?");
  var lowerCases= confirm("Do you want LOWERCASES in your password?");
  var upperCasses = confirm("Do you want UPPERCASES in your password?");
  var special = confirm("Do you want SPECIAL CHARACTERS in your password?");
 
  var possiblecharacters = []
  if (numbers) {
    possiblecharacters = possiblecharacters.concat(numarr)
  }
  if (lowerCases) {
    possiblecharacters = possiblecharacters.concat(lowerCasesarr)
  }
  if (upperCasses) {
    possiblecharacters = possiblecharacters.concat(upperCassesarr)
  }
  if (special) {
    possiblecharacters = possiblecharacters.concat(specialarr)
  }
  for (let index = 0; index < passwordLength; index++) {
    var character = getRandom(possiblecharacters)
    push (character)
  }
}
// array for variables above
function getRandom (arr) {
  var randomIndex = Math.floor(Math.random()* arr.length )
  var randomElement = arr[randomIndex]
  return randomElement
}

// minimum count for variables above
var minimumCount = 0;
// empty string for character variables
var minimumNumbers = "";
var minimumLowerCases = "";
var minimumUpperCases = "";
var minimumSpecialCharacters = "";



