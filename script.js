// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword  () {
    // Ask for length
    var length = Number (prompt ("Enter the length of your password between 8 and 128 characters"));

    // Ask for character type   
    var charType = prompt ("Enter a character type (lower, upper, numeric, special).");

    
    // character type 
    
    var charSet= "";
    var charTypeLower = charType.toLowerCase();
    if (charTypeLower === "lower") {
        charSet = "abcdefghijklmnopqrstuvwxyz";
    } else if (charTypeLower === "upper") {
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


// Generate password

function writePassword() {
    var password = generatePassword();
    const passwordText = document.getElementById("password");
    passwordText.value = password;
    return "El password: " + passwordText.value;
}

alert(writePassword());




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




