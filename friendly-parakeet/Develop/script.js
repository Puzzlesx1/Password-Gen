// Assignment code here

function generatePassword() {
//Set var for option choices based on prompts and blank array for all possible characters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var symbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var charArray = [];

//get user input for password length
  var length = parseInt(prompt("How many characters? (8-128)"));

  if(isNaN(length) || length < 8 || length > 128) {
    alert("Incorrect Length Stated.. Try Again");
    return "";
  }

  // get input for criteria of passord 
  hasLowercase = confirm("Does your password include lowercase letters?");

  hasUppercase = confirm("Does your password include uppercase letters?");

  hasNumbers = confirm("Does your password include numbers?");

  hasSymbols = confirm("Does your password include symbols?");

  //if no criteria is selected, return message
  if(hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSymbols === false) {
    return "Please select at least one type";

  };

  // input selected variables in character array 
  if (hasLowercase) {
    charArray = charArray.concat(lower);
  }
  if (hasUppercase) {
    charArray = charArray.concat(upper);
  }
  if (hasNumbers) {
    charArray = charArray.concat(numbers);
  }
  if (hasSymbols) {
    charArray = charArray.concat(symbols);
  }

  //selecting random character from character array until it reaches length of PW
  let password = ""
  for (let i = 0; i < length; i++) {
    let rng =[Math.floor(Math.random() * charArray.length)];
    password = password + charArray[rng];
  }
  return password;
};


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