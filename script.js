//set characters to use for password

var lower ='abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num ='0123456789'
var sym ='!@#$%^&*'


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


//get random number 
function getRandom(str) {
var randomnum = Math.floor(Math.random()*str.length)
var randomchar = str[randomnum]
return randomchar
}

function generatePassword() {

//asking for a number of characters, alerting if not a number or outside the range

var getCharacters = parseInt(prompt('Choose a number of characters between 8 and 128'))
if(getCharacters < 8 || getCharacters > 128 || isNaN (getCharacters)) {
  alert("Number must be between 8-128")
  return;
}

//questions for parameters for password 

var getUpper = confirm('Do you want upper case letters in your password?');
var getLower = confirm('Do you want lower case letters in your password?');
var getNumbers = confirm ('Do you want numbers in your password?');
var getSymbols = confirm('Do you want symbols in your password?');

//If they choose cancel on every prompt it will alert to confirm something

if(!getUpper && !getLower && !getNumbers && !getSymbols) {
  alert("Please pick one")
  return;
};

var myPass = ""


//while loop to keep iterating through the characters

while(myPass.length < getCharacters) {
  if(getUpper){
    myPass += getRandom(upper)
    if(myPass.length === getCharacters) {
      break;
    }
  } if(getLower) {
    myPass += getRandom(lower)
    if(myPass.length === getCharacters) {
      break;
    }

  } if(getNumbers) {
    myPass += getRandom(num)
    if(myPass.length === getCharacters) {
      break;
    }
  } if(getSymbols) {
    myPass += getRandom(sym)
    if(myPass.length === getCharacters) {
      break;
    }
  }
} 



//return function
return (myPass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

