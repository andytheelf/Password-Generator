//Password Variables
var inputCharacters = "";
var prompts = "";

//Variable Character Sets
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialSet = "@#$%^&*+<>?[]{}=~/";
  var numericValue = "0123456789";

  //Generate Password Function
function generatePassword() {
  var entry = Number(window.prompt("Please choose a password length between 8-128 characters!"));


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
