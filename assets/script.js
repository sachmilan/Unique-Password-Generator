// Assignment Code
var generateBtn = document.querySelector("#generate");


// Created Arrays of Possible Character Choices(change)
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!','@', '%', '+', '/', '{', ']', '[', '~', '-', '_','#', '$', '?', ')', '(', '}'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Created function to ask user which options and made conditional statements to ensure minimum option requirements were met.(change)
function askQuestion() {
  var isValid = false;
  do {
    var upperCaseLetters = confirm("Do you want upper case letters in your password? If yes, please click ok, otherwise you an click cancel");
    var lowerCaseLetters = confirm("Do you want lower case letters in your password? If yes, please click ok, otherwise you an click cancel");
    var number = confirm("Do you want numbers in your password? If yes, please click ok, otherwise you an click cancel");
    var specialCharacters = confirm("Do you want any special characters in your password? If yes, please click ok, otherwise you an click cancel");
    var length = prompt("Please type in the required length of the password. The length have to be in between 8 and 128 characters");
    var answers = {
      upperCaseLetters: upperCaseLetters,
      lowerCaseLetters: lowerCaseLetters,
      number: number,
      length: length,
      specialCharacters: specialCharacters,
    } 
    if((!upperCaseLetters)&&(!lowerCaseLetters)&&(!specialCharacters)&&(!number))
    alert("Please choose at leat one item from the list.");
    else if((length < 8)||(length > 128))
    alert("Sorry, the length must be in between 8 and 128 characters. Please enter a valid entry");
    else
    isValid = true;

  } while(!isValid);
  return answers;
}
// This function joins all the user responses and then creates the result - a strong password.(chan)
function makepassword() {
  var options = askQuestion();
  var pattern = [];
  var mainPassword = "";



  if (options.number) {
    for (var i of numbers)
      pattern.push(i);
  }
  if (options.lowerCaseLetters) {
    for (var i of lowerCase)
      pattern.push(i);
  }
  if (options.upperCaseLetters) {
    for (var i of upperCase)
      pattern.push(i);
  }
  if (options.specialCharacters) {
    for (var i of special)
      pattern.push(i);
  }


  console.log(pattern);


  for (var i = 0; i < options.length; i++) {
    mainPassword += pattern[Math.floor(Math.random() * pattern.length)];
    
  }
  console.log(mainPassword);

  return mainPassword;
}

// Write password to the #password input
function writePassword() {
  var password = makepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
