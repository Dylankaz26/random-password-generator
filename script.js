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
  let useLower = confirm("press ok to include lowercase characters in password. Press cancel to exclude");
  let useUpper = confirm("press ok to include uppercase characters in password. Press cancel to exclude");
  let useNum = confirm("press ok to include numeric characters in password. Press cancel to exclude");
  let useSpecial = confirm("press ok to include special characters in password. Press cancel to exclude");

  if (useLower){
    validChars += lower;
    alert("your password will include lowercase characters");
  } else {
    alert("your password will exclude lowercase characters");
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
