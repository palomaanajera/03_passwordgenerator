// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = Number (prompt("How many characters would you like your password to be? Enter a number between 8 and 128."));

// Ask for character type 
var charType = prompt ("Enter a character type (lower, upper, numeric, special).");


function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(password);
    // character type 
    var charSet= "";
    var charTypeLower = charType.toLowerCase();
    if (charTypeLower === "lowerCase") {
        charSet = "abcdefghijklmnopqrstuvwxyz";
    } else if (charTypeLower === "upperCase") {
        charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (charTypeLower === "numeric") {
        charSet = "0123456789";
    } else if (charTypeLower === "special") {
        charSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
 
    // return value
    var returnVal = "";
    for (var i = 0; i < length; i++) {
        returnVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return returnVal;
}

window.alert (writePassword());

// Appear password in display box
document.getElementById("display").value = password();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




