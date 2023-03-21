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
  let randomIndex=0;
  let randomChar="";
  let validChars="";

  pLen = parseInt(prompt("enter password length between 8-128"));
  if (pLen<8 || pLen>128 || isNaN(pLen)){
    alert ('the password length has to be a number between 8-128')
    return("password not generated please retry by clicking on generate button")
  }
  console.log("pLen = ",pLen);
  let useLower = confirm("press ok to include lowercase characters in password. Press cancel to exclude");
  let useUpper = confirm("press ok to include uppercase characters in password. Press cancel to exclude");
  let useNum = confirm("press ok to include numeric characters in password. Press cancel to exclude");
  let useSpecial = confirm("press ok to include special characters in password. Press cancel to exclude");

  console.log("useLower = ",useLower);
  console.log("useUpper = ",useUpper);
  console.log("useNum = ",useNum);
  console.log("useSpecial = ",useSpecial);

  if (useLower){
    validChars += lower;
    alert("your password will include lowercase characters");
  } else {
    alert("your password will exclude lowercase characters");
  }

  console.log("validChars = ",validChars);

  if (useUpper){
    validChars += upper;
    alert("your password will include uppercase characters");
  } else {
    alert("your password will exclude uppercase characters");
  }

  console.log("validChars = ",validChars);

  if (useNum){
    validChars += num;
    alert("your password will include numeric characters");
  } else {
    alert("your password will exclude numeric characters");
  }

  console.log("validChars = ",validChars);

  if (useSpecial){
    validChars += special;
    alert("your password will include special characters");
  } else {
    alert("your password will exclude special characters");
  }
  console.log("validChars = ",validChars);

  if (useLower === false && useUpper === false && useNum === false && useSpecial === false ){
    alert ('at least one character type should be selected')
    return("password not generated please retry by clicking on generate button")
  }
  //forloop generate random password and return password

  for(let i=0; i<=pLen; i++){
    randomIndex = Math.floor(Math.random() * validChars.length);
    console.log("randomIndex = ",randomIndex);
    randomChar = validChars[randomIndex];
    console.log("randomChar = ",randomChar);
    newPsw += randomChar;
    console.log("newPsw = ",newPsw);
  }

  return newPsw;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
