// Assignment code here


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

//upon click of generate password 

function generatePassword () {
  var passwordLength =prompt("Enter the number of characters in new password please. The password must be greater than 12 but less than 128");
  var numbers = confirm ("Do you want NUMBERS in your password?");
  var lowerCases= confirm("Do you want LOWERCASES in your password?");
  var upperCasses = confirm("Do you want UPPERCASES in your password?");
  var special = confirm("Do you want SPECIAL CHARACTERS in your password?");
}