// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //To be completed
  console.log("in generatePassword function")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
