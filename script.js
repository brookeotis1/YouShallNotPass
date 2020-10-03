
var char ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
var num ='0123456789'
var sym ='!@#$%^&*'



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getInfo() {
    // Get Password Length, Prompt 8 to 128 Characters
    var getPasswordLength = parseInt(prompt("How Long Would You Like Your Password? 8 - 128 Characters."));
    //If statement to get a number
    if (isNaN(getPasswordLength)(getPasswordLength < 8 || getPasswordLength > 128)) {
      alert("Try Again, Enter a Number.");
      getInfo();
    
    } 
    console.log(getPasswordLength);
}

// Get Password LowerCase Characters, Confirm  
var getNumbers = prompt ('Do you want numbers in your password?');
var getLetters = prompt ('Do you want letters in your password?');
var getSymbols = prompt('Do you want symbols in your password?');

    





getInfo();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
