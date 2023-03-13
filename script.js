// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //To be completed
  console.log("in generatePassword function")
  let lower="abcdefghijklmnopqrstuvwxyz";
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num="0123456789";
  let special="!@#$%^&*()|{}/";
  let pLen=0;
  let newPsw="";
  let validChars="";

  pLen = parseInt(prompt("enter password length between 8-128"));
  if (pLen<8 || pLen>128 || isNaN(pLen)){
    alert ('the password length has to be a number between 8-128')

    return("password not generated please retry by clicking on generate button")
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
